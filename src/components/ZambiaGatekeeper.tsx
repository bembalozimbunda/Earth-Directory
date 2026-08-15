import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';
import { ZambiaVision } from './ZambiaVision';

const TARGET_WORD = 'warmablon';
const UNIQUE_LETTERS = ['w', 'a', 'r', 'm', 'b', 'l', 'o', 'n']; // 8 unique
const RANDOM_LETTERS = ['c', 'e', 'g', 'h', 'i', 's', 't']; // 7 random
const ALL_LETTERS = [...UNIQUE_LETTERS, ...RANDOM_LETTERS];

const shuffle = (arr: string[]) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export function ZambiaGatekeeper() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [keyboard, setKeyboard] = useState<string[]>([]);
  const [errorFlash, setErrorFlash] = useState(false);

  useEffect(() => {
    setKeyboard(shuffle(ALL_LETTERS));
  }, []);

  const handleKeyPress = (letter: string) => {
    const newInput = input + letter;
    if (TARGET_WORD === newInput) {
      setInput(newInput);
      setTimeout(() => setUnlocked(true), 500);
    } else if (TARGET_WORD.startsWith(newInput)) {
      setInput(newInput);
    } else {
      // Wrong key
      setInput(newInput);
      setErrorFlash(true);
      setTimeout(() => {
        setInput('');
        setErrorFlash(false);
      }, 400);
    }
  };

  const handleClear = () => {
    setInput('');
  };

  if (unlocked) {
    return <ZambiaVision />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-zinc-950/80 p-6 rounded-lg border border-zinc-800/50 overflow-hidden relative z-10 min-h-[500px]">
      <motion.div 
        animate={errorFlash ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center w-full max-w-md gap-6"
      >
        <ShieldAlert className="w-12 h-12 text-red-500/80 mb-2" />
        <h3 className="text-red-500 font-mono text-sm tracking-[0.3em] uppercase text-center">
          Zambia Root Node Locked
        </h3>
        <p className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase text-center leading-relaxed">
          Authentication required. Enter the access key to explore, research, and become aware.
        </p>

        <div className={`w-full bg-black border ${errorFlash ? 'border-red-500' : 'border-zinc-800'} rounded p-4 flex justify-center items-center h-16 shadow-[inset_0_0_15px_rgba(0,0,0,1)] transition-colors`}>
          <div className={`font-mono text-2xl tracking-[0.4em] ${errorFlash ? 'text-red-600' : 'text-red-500'}`}>
            {input.padEnd(TARGET_WORD.length, '·')}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 w-full">
          {keyboard.map((letter, i) => (
            <button
              key={i}
              onClick={() => handleKeyPress(letter)}
              className="h-12 bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:bg-zinc-800 hover:text-white text-zinc-400 font-mono text-xl rounded transition-all active:scale-95 flex items-center justify-center uppercase shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
            >
              {letter}
            </button>
          ))}
        </div>
        
        <button
          onClick={handleClear}
          className="w-full py-3 mt-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 font-mono text-xs uppercase tracking-widest rounded transition-all active:scale-95 shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
        >
          Clear
        </button>
      </motion.div>
    </div>
  );
}
