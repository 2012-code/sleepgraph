export default function PrivacyPolicy() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-white mb-12">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-[#a3a3a3]">
        <p>Last Updated: May 5, 2026</p>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p>
            NoteGraph ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how 
            we collect, use, and disclose information when you use our Biological Rhythm & Sleep Planner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. IAB TCF v2.3 Disclosure</h2>
          <p>
            We participate in the IAB Europe Transparency & Consent Framework (TCF v2.3) and comply with its 
            Specifications and Policies. NoteGraph uses a certified Consent Management Platform (CMP) to ensure 
            technical signals are sent to advertising partners, including Google (Vendor ID 755).
          </p>
          <p>
            As of March 1, 2026, we utilize the "Disclosed Vendors" segment in our TC strings to provide verifiable 
            proof of vendor disclosure to our users in the EEA, UK, and Switzerland.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Collection</h2>
          <p>
            <strong>Personal Data:</strong> We do not require account creation. The sleep times you enter in the 
            calculator are processed locally in your browser and are not stored on our servers.
          </p>
          <p>
            <strong>Cookies & Advertising:</strong> We use Google AdSense to serve advertisements. Google may use 
            cookies to serve ads based on your prior visits to this or other websites. You may opt out of 
            personalized advertising by visiting Google's Ad Settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Vendors</h2>
          <p>
            Our primary third-party vendor is Google (AdSense). You can view a full list of disclosed vendors 
            and manage your consent settings through the privacy toggle available on our homepage (Consent Management Platform).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Contact</h2>
          <p>
            For any privacy-related questions, please contact us at privacy@notegraph.online.
          </p>
        </section>

        <div className="pt-12">
          <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

