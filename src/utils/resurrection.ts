/**
 * WARMABLON System Resurrection & Cache Purge Protocol
 * 
 * Analyzes and resolves browser freeze/stale lockup states caused by
 * rogue service workers, dev-dist precache collisions, or stale Workbox caches.
 */

export interface ResurrectionReport {
  timestamp: string;
  unregisteredWorkersCount: number;
  clearedCacheKeys: string[];
  status: 'RESURRECTED' | 'CLEAN_ACTIVE' | 'ERROR';
  details: string;
}

/**
 * Execute the full System Resurrection Protocol
 * Purges all active service workers, flushes CacheStorage, clears corrupted local cache keys,
 * and resets reactive state.
 */
export async function executeResurrectionProtocol(): Promise<ResurrectionReport> {
  const clearedCacheKeys: string[] = [];
  let unregisteredCount = 0;

  try {
    // 1. Purge and unregister all active Service Workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        const success = await registration.unregister();
        if (success) {
          unregisteredCount++;
        }
      }
    }

    // 2. Flush all Workbox and browser CacheStorage keys
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      for (const cacheName of cacheNames) {
        await caches.delete(cacheName);
        clearedCacheKeys.push(cacheName);
      }
    }

    // 3. Clear transient corrupted keys in localStorage (keeping critical user settings safe)
    try {
      const keysToPurge = [
        'workbox-precache',
        'pwa-update-available',
        'sw-cache-lock',
        'warmablon_stale_lock'
      ];
      for (const key of keysToPurge) {
        localStorage.removeItem(key);
      }
    } catch {
      // Ignore storage access errors in strict iframes
    }

    // 4. Broadcast global resurrection event
    window.dispatchEvent(
      new CustomEvent('SYSTEM_RESURRECTED', {
        detail: {
          timestamp: new Date().toISOString(),
          unregisteredWorkersCount: unregisteredCount,
          clearedCacheKeys
        }
      })
    );

    return {
      timestamp: new Date().toISOString(),
      unregisteredWorkersCount: unregisteredCount,
      clearedCacheKeys,
      status: 'RESURRECTED',
      details: `Resurrection Protocol executed successfully. Unregistered ${unregisteredCount} service worker(s) and purged ${clearedCacheKeys.length} cache store(s).`
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      timestamp: new Date().toISOString(),
      unregisteredWorkersCount: unregisteredCount,
      clearedCacheKeys,
      status: 'ERROR',
      details: `Resurrection Protocol encountered an error: ${message}`
    };
  }
}

/**
 * Autonomous Resurrection Watchdog
 * Runs on application startup to ensure no ghost service workers hijack dev mode.
 */
export function initResurrectionWatchdog(): void {
  // In development mode, aggressively purge any rogue service worker registrations
  if (typeof window !== 'undefined') {
    if (!import.meta.env.PROD) {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          if (registrations.length > 0) {
            console.log(`[RESURRECTION WATCHDOG] Dev environment detected with ${registrations.length} active service worker(s). Purging to prevent stale freeze...`);
            executeResurrectionProtocol().then((report) => {
              console.log('[RESURRECTION WATCHDOG] Dev sweep complete:', report.details);
            });
          }
        }).catch(() => {
          // Silent catch for sandboxed environments
        });
      }
    }
  }
}
