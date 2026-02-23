export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-light tracking-tight text-black mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate max-w-none text-black/80 font-light leading-relaxed">
        <p className="text-sm text-black/50 mb-12">
          <strong>Last updated: February 2026</strong>
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">1. Information We Collect</h2>
          <p className="mb-4">When you use Gridlock, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account information (name, email, profile picture) provided through Google, Facebook, or email sign-up.</li>
            <li>Game data including scores, match history, and gameplay statistics.</li>
            <li>Device information such as device type and operating system.</li>
            <li>Anonymous usage analytics to improve the App.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain the game service.</li>
            <li>Enable multiplayer features and matchmaking.</li>
            <li>Save your game progress and statistics.</li>
            <li>Improve the App experience.</li>
            <li>Communicate important updates about the service.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">3. Data Storage and Security</h2>
          <p>
            Your data is stored securely using Supabase, a trusted cloud infrastructure provider. We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction. However, no method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">4. Third-Party Services</h2>
          <p className="mb-4">We use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Google Sign-In</strong> — for secure authentication.</li>
            <li><strong>Facebook Login</strong> — for secure authentication.</li>
            <li><strong>Supabase</strong> — for database storage and real-time multiplayer features.</li>
            <li><strong>Google AdMob (Mobile App only)</strong> — for serving advertisements.</li>
            <li><strong>Firebase Cloud Messaging</strong> — for push notifications.</li>
          </ul>
          <p>
            These services have their own privacy policies. We encourage you to review them. <strong>We do not sell your personal data to third parties.</strong>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">5. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your account and data.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Export your data in a portable format.</li>
          </ul>
          <p>
            To exercise these rights, contact us at <strong>support@gridlock.app</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">7. Children's Privacy</h2>
          <p>
            Gridlock is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us and we will delete it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">8. Cookies, Tracking & Advertising</h2>
          <p>
            On the web version, we use local storage only for maintaining your authentication session. The mobile app version uses Google AdMob, which may collect and use advertising identifiers and device information to serve personalized ads in accordance with Google's privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">9. Push Notifications</h2>
          <p>
            With your permission, we may send push notifications to your device to update you on game invites or multiplayer matches. We use Firebase Cloud Messaging, which collects a device token to route these notifications to you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">10. International Data Transfers</h2>
          <p>
            Your data may be processed in countries other than your own. By using the App, you consent to the transfer of your data to these countries, which may have different data protection laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes through the App or by email. Continued use after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-medium text-black mb-4">12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, contact us at <strong>siddhantpetkar@gmail.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}