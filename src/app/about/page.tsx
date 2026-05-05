export default function About() {
  return (
    <main className="min-h-screen bg-[#161616] text-[#d4d4d4] font-sans">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-12">About NoteGraph</h1>
        
        <div className="prose prose-invert max-w-none space-y-8 text-lg text-[#a3a3a3] leading-relaxed">
          <p>
            NoteGraph is more than just a tool; it is a <strong>digital lab</strong> designed for the modern knowledge worker. 
            We believe that productivity is not a constant state, but a variable that can be mapped, analyzed, and optimized.
          </p>
          
          <p>
            Our mission began with a simple observation: the world's most productive individuals don't work harder—they work 
            in alignment with their biological hardware. By treating personal metrics—starting with sleep—as nodes in a larger 
            productivity graph, we empower you to see the connections between your lifestyle choices and your creative output.
          </p>

          <section className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">The Digital Lab Framework</h2>
            <ul className="space-y-4">
              <li><strong className="text-purple-400">Biological Foundation:</strong> We start with sleep, the primary driver of cognitive bandwidth.</li>
              <li><strong className="text-purple-400">Metric Mapping:</strong> Tracking the relationship between sleep cycles, deep work sessions, and metabolic health.</li>
              <li><strong className="text-purple-400">Graph Theory for Life:</strong> Visualizing your productivity as an interconnected web of habits rather than a linear checklist.</li>
            </ul>
          </section>

          <p>
            The Biological Rhythm & Sleep Planner is the first module in the NoteGraph ecosystem. It provides the empirical 
            data you need to stop guessing and start performing.
          </p>

          <div className="pt-12">
            <a href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              ← Back to Calculator
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
