export default function Contact() {
  return (
    <main className="min-h-screen bg-[#161616] text-[#d4d4d4] font-sans">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-12">Contact Us</h1>
        
        <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-12 text-center">
          <p className="text-xl text-[#a3a3a3] mb-8">
            Have questions about your sleep mapping or want to collaborate on the NoteGraph project?
          </p>
          
          <div className="space-y-4">
            <p className="text-[#a3a3a3]">Reach out to our research team at:</p>
            <a href="mailto:hello@notegraph.online" className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              hello@notegraph.online
            </a>
          </div>

          <p className="mt-12 text-sm text-[#737373]">
            We aim to respond to all inquiries within 48 biological hours.
          </p>
          
          <div className="pt-16">
            <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
