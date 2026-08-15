import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, FileText, ChevronRight, ChevronDown, Lock } from 'lucide-react';

interface DirectoryTreeProps {
  onNodeSelect: (name: string) => void;
}

export function DirectoryTree({ onNodeSelect }: DirectoryTreeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [keyInput, setKeyInput] = useState('');

  // Listen to keyboard anywhere to unlock the hidden directory
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isUnlocked) return;
      
      setKeyInput(prev => {
        const next = (prev + e.key).slice(-20);
        
        // Let's verify secret via API rather than hardcoded in the client
        if (next.includes('yantra') || next.includes('◬ ◯ ◿ ⚍ ☵ ☲ ☰ ☷ ◉')) {
          fetch('/api/verify-secret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret: 'yantra' }) // Simplified for demo
          })
          .then(res => res.json())
          .then(data => {
            if (data.authorized) {
               setIsUnlocked(true);
            }
          })
          .catch(err => console.error(err));
        }
        
        return next;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked]);

  const tree = [
    { 
      name: 'root', 
      type: 'folder',
      isOpen: true,
      children: [
        { name: 'nations.ts', type: 'file', icon: FileText },
        { name: 'continents.ts', type: 'file', icon: FileText },
        { name: 'void_keys.ts', type: 'file', icon: Lock, protected: true },
        { name: 'yantra_protocol.md', type: 'file', icon: FileText },
        {
          name: 'zambia',
          type: 'folder',
          isOpen: false,
          children: [
            { name: 'districts.ts', type: 'file', icon: FileText },
            { name: 'copperbelt.ts', type: 'file', icon: FileText },
            { name: 'lusaka.ts', type: 'file', icon: FileText }
          ]
        }
      ]
    }
  ];

  if (!isUnlocked) {
    return null; // completely hidden until the keyword is typed
  }

  const renderNode = (node: any, depth = 0) => {
    return (
      <div key={node.name} style={{ paddingLeft: `${depth * 12}px` }}>
        <div 
          className="flex items-center gap-2 py-1 px-2 hover:bg-zinc-800/50 rounded cursor-pointer text-zinc-400 hover:text-zinc-200 transition-colors"
          onClick={() => {
            if (node.type === 'file') {
              if (node.protected) {
                // Cannot select protected files directly
              } else {
                onNodeSelect(node.name);
              }
            }
          }}
        >
          {node.type === 'folder' ? (
            <>
              <ChevronRight className="w-3 h-3 text-zinc-500" />
              <Folder className="w-3 h-3 text-amber-500/80" />
            </>
          ) : (
            <>
              <span className="w-3" />
              <node.icon className={`w-3 h-3 ${node.protected ? 'text-red-500/80' : 'text-zinc-500'}`} />
            </>
          )}
          <span className={`text-xs ${node.protected ? 'text-red-400/80' : ''}`}>{node.name}</span>
        </div>
        {node.children && (
          <div className="ml-2 border-l border-zinc-800/50">
            {node.children.map((child: any) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-4 bottom-4 w-64 bg-zinc-950/90 border border-zinc-800/80 rounded-lg p-4 font-mono z-50 shadow-2xl backdrop-blur overflow-y-auto hidden md:block"
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-6 flex justify-between items-center border-b border-zinc-800/50 pb-2">
        <span>Earth Directory</span>
        <span className="text-emerald-500/50">V_1.0.0</span>
      </div>
      
      {tree.map(node => renderNode(node))}
      
      <div className="mt-8 text-[9px] text-zinc-600/50 uppercase tracking-widest leading-relaxed">
        <div className="text-red-500/50 mb-1">WARNING</div>
        Void keys have been migrated to secure server environment. 
        Local state access restricted.
      </div>
    </motion.div>
  );
}
