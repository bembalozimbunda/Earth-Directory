const fs = require('fs');
let content = fs.readFileSync('src/components/LivingCalculator.tsx', 'utf-8');

// We will replace the whole return statement and data processing logic to make it richer
const fullComponent = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Activity, Cpu, Database, Network, Users, Map, Star } from 'lucide-react';
import { ProvinceDetailed, District } from '../data/zambiaDistricts';

export function LivingCalculator({ province }: { province: ProvinceDetailed }) {
  const [calculating, setCalculating] = useState(false);
  const [results, setResults] = useState<{
    totalPop: number;
    avgEfficiency: number;
    resourceNodes: number;
    dataPointsProcessed: number;
    topResource: string;
    topDistrict: string;
  } | null>(null);

  useEffect(() => {
    // Reset when province changes
    setResults(null);
    setCalculating(true);

    // Simulate "living calculation" across departments
    const timeout = setTimeout(() => {
      const totalPop = province.districts.reduce((acc, d) => acc + d.population, 0);
      const avgEfficiency = province.districts.reduce((acc, d) => acc + d.efficiency, 0) / province.districts.length;
      
      const resources: Record<string, number> = {};
      let topDistrict = province.districts[0];
      
      province.districts.forEach(d => {
        resources[d.resource] = (resources[d.resource] || 0) + 1;
        if (d.population > topDistrict.population) {
          topDistrict = d;
        }
      });
      
      let topResource = Object.keys(resources).reduce((a, b) => resources[a] > resources[b] ? a : b);

      setResults({
        totalPop,
        avgEfficiency,
        resourceNodes: province.districts.length,
        dataPointsProcessed: Math.floor(Math.random() * 50000) + 50000,
        topResource,
        topDistrict: topDistrict.name
      });
      setCalculating(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [province]);

  return (
    <div className="bg-zinc-950/80 p-5 rounded-lg border border-zinc-800/50 mt-6 relative overflow-hidden flex flex-col min-h-[300px]">
      {/* Background Matrix/Calc Effect */}
      <div className="absolute inset-0 opacity-[0.03] flex flex-wrap gap-2 p-2 overflow-hidden pointer-events-none">
        {Array.from({ length: 100 }).map((_, i) => (
          <span key={i} className="text-[10px] font-mono text-emerald-500">
            {Math.random().toString(36).substring(2, 8).toUpperCase()}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6 relative z-10 border-b border-zinc-800/50 pb-3">
        <Calculator className={\`w-6 h-6 \${province.color}\`} />
        <h3 className={\`text-lg font-mono tracking-[0.2em] uppercase \${province.color}\`}>
          Living Calculator: Departmental Sync
        </h3>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {calculating ? (
            <motion.div
              key="calculating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <Cpu className={\`w-12 h-12 \${province.color} animate-pulse mb-4\`} />
              <span className="text-zinc-400 font-mono text-sm uppercase tracking-widest animate-pulse">
                Engaging all departments... Synchronizing data...
              </span>
              <div className="w-full max-w-md h-1.5 bg-zinc-900 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  className={\`h-full \${province.bg}\`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "linear" }}
                />
              </div>
            </motion.div>
          ) : results ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Total Population</span>
                </div>
                <div className="text-2xl font-mono text-zinc-200 mt-auto">
                  {results.totalPop.toLocaleString()}
                </div>
              </div>
              
              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Avg Efficiency</span>
                </div>
                <div className="text-2xl font-mono text-zinc-200 mt-auto">
                  {results.avgEfficiency.toFixed(1)}%
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Network className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Active Nodes</span>
                </div>
                <div className="text-2xl font-mono text-zinc-200 mt-auto">
                  {results.resourceNodes}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Star className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Primary Resource</span>
                </div>
                <div className="text-sm font-mono text-zinc-300 mt-auto truncate" title={results.topResource}>
                  {results.topResource}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Map className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Alpha District</span>
                </div>
                <div className="text-xl font-mono text-zinc-200 mt-auto truncate">
                  {results.topDistrict}
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded-md border border-zinc-800/50 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-500">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">Data Streams</span>
                </div>
                <div className="text-2xl font-mono text-emerald-400 mt-auto">
                  {results.dataPointsProcessed.toLocaleString()}
                </div>
              </div>

            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/LivingCalculator.tsx', fullComponent);

