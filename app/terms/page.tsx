export default function TermsPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using CryptoHub, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily access CryptoHub for personal, non-commercial transitory viewing
              only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The information provided by CryptoHub is for informational purposes only and should not be considered as
              financial advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall CryptoHub or its suppliers be liable for any damages arising out of the use or inability
              to use the materials on CryptoHub.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@cryptohub.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
