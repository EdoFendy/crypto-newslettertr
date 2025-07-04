export default function DisclaimerPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Investment Risk Warning</h2>
            <p className="text-gray-600 mb-6">
              Cryptocurrency investments are subject to high market risk. Please make your investments cautiously.
              CryptoHub will not be liable for any investment losses.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Financial Advice</h2>
            <p className="text-gray-600 mb-6">
              The information provided on this website does not constitute investment advice, financial advice, trading
              advice, or any other sort of advice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Generated Content</h2>
            <p className="text-gray-600 mb-6">
              Our content is curated using AI technology. While we strive for accuracy, AI-generated summaries and
              insights should be verified independently.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Volatility</h2>
            <p className="text-gray-600 mb-6">
              Cryptocurrency markets are highly volatile and unpredictable. Past performance is not indicative of future
              results.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Do Your Own Research</h2>
            <p className="text-gray-600">
              Always conduct your own research and consult with qualified financial advisors before making any
              investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
