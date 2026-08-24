/**
 * WARMABLON Unified System & Data Integrity Tooling
 * Merged & consolidated from legacy scratchpad scripts.
 * 
 * Provides verification, diagnostics, registry counts, duplicate checks,
 * flag validations, and WARMABLONDATA schema integrity assertions.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WARMABLON_DATA_PATH = path.join(ROOT, 'src/data/WARMABLONDATA.json');

function loadWarmablonData() {
  if (!fs.existsSync(WARMABLON_DATA_PATH)) {
    console.error(`[ERROR] WARMABLONDATA.json not found at ${WARMABLON_DATA_PATH}`);
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(WARMABLON_DATA_PATH, 'utf8'));
  } catch (err) {
    console.error(`[ERROR] Failed to parse WARMABLONDATA.json:`, err.message);
    return null;
  }
}

/**
 * 1. Validate Core WARMABLON Schema and Continental Nodes
 */
function validateWarmablon() {
  console.log('--- WARMABLON Data Matrix Validation ---');
  const data = loadWarmablonData();
  if (!data) return false;

  console.log(`Title: ${data.metadata?.title}`);
  console.log(`Version: ${data.metadata?.version}`);
  console.log(`Total Quadrants: ${data.metadata?.totalQuadrants}`);

  let totalCountries = 0;
  let allCountryNames = [];

  (data.continents || []).forEach((c) => {
    const count = (c.countries || []).length;
    totalCountries += count;
    console.log(`  [${c.id.toUpperCase().padEnd(4)}] ${c.name.padEnd(28)} | ${c.frequency}Hz | ${count} entities | Key: ${c.securityKey || 'N/A'}`);
    (c.countries || []).forEach((name) => allCountryNames.push({ name, continent: c.name }));
  });

  console.log(`\nTotal Entities Registered: ${totalCountries}`);

  // Duplicate check
  const nameCounts = {};
  allCountryNames.forEach(({ name }) => {
    nameCounts[name] = (nameCounts[name] || 0) + 1;
  });
  const dups = Object.keys(nameCounts).filter((k) => nameCounts[k] > 1);
  if (dups.length > 0) {
    console.warn(`[WARN] Duplicate entity names detected:`, dups);
  } else {
    console.log(`[OK] Zero duplicates found across all continental registries.`);
  }

  // True Sun Core Validation
  if (data.trueSunCore && Array.isArray(data.trueSunCore.strata)) {
    console.log(`\nTrue Sun Core Strata (${data.trueSunCore.strata.length} layers):`);
    data.trueSunCore.strata.forEach((s) => {
      console.log(`  - ${s.name} (${s.frequency}Hz): ${s.sub}`);
    });
  }

  // Hermes Agent Protocol Validation
  if (data.hermesAgent) {
    console.log(`\nHermes Agent Protocol:`);
    console.log(`  Name: ${data.hermesAgent.agentName} (v${data.hermesAgent.version})`);
    console.log(`  Role: ${data.hermesAgent.role}`);
    console.log(`  Operating Frequency: ${data.hermesAgent.operatingFrequency} Hz | Key: ${data.hermesAgent.securityKey}`);
    console.log(`  Hermetic Axioms Anchored: ${data.hermesAgent.principles?.length || 0}`);
  }

  return true;
}

/**
 * 2. Check Solfeggio Harmonic Frequency Specifications
 */
function checkFrequencies() {
  console.log('\n--- Harmonic Frequencies Verification ---');
  const data = loadWarmablonData();
  if (!data || !Array.isArray(data.frequencies)) return;

  data.frequencies.forEach((f) => {
    console.log(`  ${f.frequency} Hz | Note: ${f.note.padEnd(2)} | Wavelength: ${f.wavelength.padEnd(9)} | Solfeggio: ${f.solfeggioName}`);
  });
}

/**
 * 3. Security Key Diagnostics
 */
function checkSecurityKeys() {
  console.log('\n--- Security Keys Diagnostics ---');
  const data = loadWarmablonData();
  if (!data || !data.masterSecurityKeys) return;

  console.log('Universal Master Bypass Keys:', data.masterSecurityKeys.universalBypass.join(', '));
  console.log('Continental Security Keys:');
  Object.entries(data.masterSecurityKeys.continental || {}).forEach(([id, key]) => {
    console.log(`  ${id.padEnd(14)} -> ${key}`);
  });
}

// CLI Execution Router
const command = process.argv[2] || 'all';

switch (command) {
  case 'validate':
    validateWarmablon();
    break;
  case 'frequencies':
    checkFrequencies();
    break;
  case 'keys':
    checkSecurityKeys();
    break;
  case 'all':
  default:
    validateWarmablon();
    checkFrequencies();
    checkSecurityKeys();
    break;
}
