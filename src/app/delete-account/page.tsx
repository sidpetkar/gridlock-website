export default function DeleteAccount() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
      <h1 className="text-4xl font-light tracking-tight text-black mb-12">
        Delete Your Account
      </h1>
      
      <div className="prose prose-slate max-w-none text-black/80 font-light leading-relaxed">
        
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-black mb-4">Delete from within the app</h2>
          <p className="mb-4">If you have Gridlock installed, you can delete your account directly:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Open Gridlock</li>
            <li>Go to Settings (gear icon on the home screen)</li>
            <li>Scroll down to the Account section</li>
            <li>Tap 'Delete Account'</li>
            <li>Confirm the deletion in the dialog</li>
          </ol>
          <p className="font-medium text-black">
            This will permanently delete your account and all associated data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-medium text-black mb-4">Request deletion via email</h2>
          <p>
            If you no longer have access to the app, you can request account deletion by emailing us at <strong>siddhantpetkar@gmail.com</strong> with the subject line <em>'Delete My Account'</em>. Please include the email address associated with your Gridlock account. We will process your request within 30 days.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-medium text-black mb-4">What data is deleted?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Profile information (name, email, profile picture)</li>
            <li>Game history and match results</li>
            <li>Statistics and leaderboard rankings</li>
            <li>All multiplayer room data</li>
          </ul>
          <div className="bg-black/5 p-6 rounded-2xl border border-black/10">
            <p className="m-0">
              <strong>Note:</strong> Account deletion is permanent and cannot be undone. Anonymous/guest accounts do not store personal data and do not require deletion.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}