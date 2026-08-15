const fs = require('fs');
const file = 'src/components/TerminalLog.tsx';
let content = fs.readFileSync(file, 'utf-8');

const replacement = `  return (
    <div className="w-full max-w-3xl flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="relative z-10 w-full group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
        <div className="relative flex items-center bg-zinc-950/90 border border-zinc-800 focus-within:border-zinc-600 rounded-lg p-1 overflow-hidden transition-colors">
          <span className="pl-4 pr-2 font-mono text-sm ">{'>'}</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 font-mono text-sm py-3 px-2 placeholder:text-zinc-600 selection:bg-transparent"
            placeholder="What do you want to know..."
            spellCheck={false}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3 bg-zinc-900 rounded hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mr-1 "
          >
            <Send className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
      </form>
    </div>
  );`;

// We use regex to replace everything from "return (" to the end of the file.
content = content.replace(/return \([\s\S]*?\);\n\}/, replacement + '\n}');

fs.writeFileSync(file, content);
