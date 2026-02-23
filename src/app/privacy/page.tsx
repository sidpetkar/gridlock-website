export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-light tracking-tight text-black mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate max-w-none text-black/80 font-light leading-relaxed">
        <p className="text-sm text-black/50 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Gridlock. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy will inform you as to how we look after your personal data when you visit our 
            website and use our application (regardless of where you visit it from) and tell you about your 
            privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">2. Data Collection & Google OAuth</h2>
          <p className="mb-4">
            When you sign in to Gridlock using Google Sign-In, we collect and store the following information provided by Google:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Email Address:</strong> Used as your unique identifier and for essential account communications.</li>
            <li><strong>Basic Profile Information:</strong> Such as your name and profile picture, used to personalize your gaming experience and display to friends during multiplayer matches.</li>
            <li><strong>Authentication Tokens:</strong> Used to verify your identity securely across our platforms (iOS, Android, and Web).</li>
          </ul>
          <p className="mb-4">
            We only use this data to provide the cross-platform multiplayer experience, save your progress, and track your game statistics. We do not sell your personal data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">3. Third-Party Services</h2>
          <p className="mb-4">
            Gridlock utilizes several third-party services to function correctly. These services may collect information used to identify you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Supabase:</strong> Used for our backend database and secure authentication storage.</li>
            <li><strong>Google AdMob:</strong> Used to display advertisements in our free-to-play mobile applications.</li>
            <li><strong>Firebase Cloud Messaging:</strong> Used to deliver push notifications for game invites and turn updates.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">4. Data Deletion Rights</h2>
          <p className="mb-4">
            You have the right to request the deletion of your personal data at any time. You can delete your account and all associated data directly within the Gridlock app via the Settings menu, or you can contact us to request manual deletion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-light text-black mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> <a href="mailto:support@gridlock.app" className="text-black underline hover:no-underline">support@gridlock.app</a>
          </p>
        </section>
      </div>
    </div>
  );
}