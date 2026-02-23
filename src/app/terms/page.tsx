export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-light tracking-tight text-black mb-8">
        Terms of Service
      </h1>
      
      <div className="prose prose-slate max-w-none text-black/80 font-light leading-relaxed">
        <p className="text-sm text-black/50 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using Gridlock (the "Service"), whether via our website, mobile applications, or any other platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">2. Account Registration and Google OAuth</h2>
          <p className="mb-4">
            To use certain features of the Service (such as cross-platform syncing and multiplayer), you must register for an account using Google Sign-In. By using Google Sign-In, you authorize us to access certain Google profile information as detailed in our Privacy Policy.
          </p>
          <p className="mb-4">
            You are responsible for safeguarding the password or credentials you use to access Google, and for any activities or actions under your account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">3. Acceptable Use</h2>
          <p className="mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Cheat, exploit bugs, or use unauthorized third-party software to gain an unfair advantage.</li>
            <li>Harass, abuse, or harm other players through in-game interactions.</li>
            <li>Attempt to reverse engineer, decompile, or hack any part of the Service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, gameplay mechanics, and functionality are and will remain the exclusive property of Gridlock and its licensors. The Service is protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">5. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">6. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:support@gridlock.app" className="text-black underline hover:no-underline">support@gridlock.app</a>
          </p>
        </section>
      </div>
    </div>
  );
}