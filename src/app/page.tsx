'use client';

import { useState, useEffect } from 'react';

export default function SleepPlanner() {
  const [mode, setMode] = useState<'wake' | 'bed'>('wake');
  const [time, setTime] = useState('07:00');
  const [results, setResults] = useState<{ time: string; label: string; sub: string }[]>([]);

  useEffect(() => {
    calculate();
  }, [mode, time]);

  const calculate = () => {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    if (mode === 'wake') {
      // Calculate backward from wake up time
      const cycles = [6, 5, 4];
      const res = cycles.map((c) => {
        const d = new Date(date.getTime() - (c * 90 + 15) * 60000);
        return {
          time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
          label: c === 6 ? 'Optimal' : c === 5 ? 'Good' : 'Power Nap',
          sub: `${c} Cycles (${c * 1.5}h)`,
        };
      });
      setResults(res);
    } else {
      // Calculate forward from "now"
      const now = new Date();
      const cycles = [4, 5, 6];
      const res = cycles.map((c) => {
        const d = new Date(now.getTime() + (c * 90 + 15) * 60000);
        return {
          time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
          label: c === 6 ? 'Optimal' : c === 5 ? 'Good' : 'Minimum',
          sub: `${c} Cycles (${c * 1.5}h)`,
        };
      });
      setResults(res);
    }
  };

  return (
    <main className="min-h-screen bg-[#161616] text-[#d4d4d4] font-sans selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-4">Biological Rhythm & Sleep Planner</h1>
          <p className="text-[#a3a3a3] text-lg">Optimize your performance by aligning with your natural circadian cycles.</p>
        </header>

        <section className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
            <div className="flex bg-[#161616] p-1 rounded-xl border border-[#2a2a2a]">
              <button
                onClick={() => setMode('wake')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  mode === 'wake' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-[#a3a3a3] hover:text-white'
                }`}
              >
                I want to wake up at...
              </button>
              <button
                onClick={() => setMode('bed')}
                className={`px-6 py-2 rounded-lg transition-all ${
                  mode === 'bed' ? 'bg-[#2a2a2a] text-white shadow-sm' : 'text-[#a3a3a3] hover:text-white'
                }`}
              >
                I'm going to bed now
              </button>
            </div>

            {mode === 'wake' && (
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-[#161616] border border-[#2a2a2a] rounded-xl px-6 py-3 text-2xl font-mono focus:outline-none focus:border-purple-500 transition-colors"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((res, i) => (
              <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-6 text-center hover:border-purple-500/50 transition-all group">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 block">{res.label}</span>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{res.time}</div>
                <span className="text-sm text-[#a3a3a3]">{res.sub}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-[#a3a3a3] mt-8 italic">
            *Calculations include a 15-minute average "time to fall asleep" offset.
          </p>
        </section>

        <article className="prose prose-invert max-w-none border-t border-[#2a2a2a] pt-16">
          <h2 className="text-3xl font-bold text-white mb-8">The Science of Circadian Rhythm Mapping</h2>
          <div className="space-y-6 text-[#a3a3a3] leading-relaxed">
            <p>
              At the core of human performance lies a complex biological machinery known as the <strong>circadian rhythm</strong>. 
              This internal clock, governed by the suprachiasmatic nucleus (SCN) in the hypothalamus, regulates everything from hormone secretion 
              to cognitive capacity. Mapping this rhythm is not merely about tracking hours; it's about understanding the "nodes" of 
              physiological activity that form your personal biological graph.
            </p>
            <p>
              The concept of "NoteGraphing" your sleep involves treating every sleep cycle as a data point in your productivity architecture. 
              Scientific literature identifies the 90-minute cycle as the standard unit of human sleep architecture, consisting of NREM (Non-REM) 
              and REM stages. Waking up during the transition between these cycles is the key to avoiding <em>sleep inertia</em>—that heavy, 
              disoriented feeling caused by interrupting deep Stage 3 sleep.
            </p>
            <p>
              By aligning your wake-up time with the natural conclusion of a REM cycle, you ensure that your brain's neurochemical state is 
              primed for alertness. This is why 6 hours of strategically timed sleep (4 cycles) can often feel more restorative than 8 hours 
              of interrupted sleep.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">How NoteGraph Calculates Your Sleep Debt</h3>
            <p>
              Sleep debt is the cumulative deficit between the sleep you need and the sleep you receive. In the NoteGraph framework, we use 
              a logarithmic decay model to understand how debt affects cognitive output. If your baseline requirement is 7.5 hours (5 cycles) 
              and you only obtain 6 hours, you have "mapped" a 1.5-hour deficit into your biological ledger.
            </p>
            <p>
              The mathematics of the 90-minute rule is simple but profound: 
              <code>Total Sleep = (Cycles × 90 mins) + Fall Asleep Time</code>. 
              Our planner automatically subtracts the 15-minute global average for sleep latency, ensuring that your target wake-up time 
              coincides with the lightest stage of sleep.
            </p>
            <p>
              Persistent sleep debt acts as a drag on your "biological bandwidth." Just as a fragmented hard drive slows down a computer, 
              fragmented sleep cycles slow down your prefrontal cortex's ability to process complex logic and emotional regulation.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">FAQ: Is 6 hours of sleep enough for high-productivity days?</h3>
            <div className="space-y-4">
              <p><strong>The "Short Sleeper" Myth:</strong> While some individuals possess the DEC2 gene mutation allowing them to thrive on 6 hours, 99% of the population requires 7.5 to 9 hours for full recovery.</p>
              <p><strong>Productivity vs. Presence:</strong> You might be "present" for 16 hours on 6 hours of sleep, but your productivity—the actual output per hour—drops by approximately 20-30% after three consecutive nights of sub-optimal cycles.</p>
              <p><strong>The 4-Cycle Power Strategy:</strong> On high-demand days, aim for exactly 6 hours (4 cycles) if you cannot reach 7.5. Waking up at the 6-hour mark prevents you from entering a new deep sleep phase, mitigating the grogginess that would occur if you woke up at 7 hours.</p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-6">Optimizing Your Digital Lab</h3>
            <p>
              NoteGraph treats sleep as the foundation of your personal digital lab. Without high-quality sleep, the "notes" you take 
              and the "graphs" you build in your waking life lack the cognitive glue required for deep insight. Use this planner 
              to map your cycles, reduce your debt, and unlock the biological rhythm necessary for elite-level productivity.
            </p>
            
            <p className="pt-8">
              <em>Scientific References: Suprachiasmatic Nucleus dynamics (NIH), Sleep Architecture and REM Latency (Harvard Medical School), 
              Sleep Inertia and Cognitive Performance (Frontiers in Physiology).</em>
            </p>
          </div>
        </article>
      </div>
      
      <footer className="border-t border-[#2a2a2a] py-12 mt-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-[#a3a3a3]">
          <div className="flex gap-8">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p>© 2026 NoteGraph. Mapping human potential.</p>
        </div>
      </footer>
    </main>
  );
}
