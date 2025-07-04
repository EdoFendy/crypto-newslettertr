export default function CookiesPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies to improve your experience on our website, analyze usage patterns, and personalize content
              recommendations through our AI system.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors use our website</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Marketing cookies: Used to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies through your browser settings. Please note that disabling cookies may
              affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at cookies@cryptohub.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
