import { Brain, Zap, Shield, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">About Our AI Technology</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Crypto Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing how crypto enthusiasts stay informed with the world's first AI-powered newsletter that
            intelligently filters and curates cryptocurrency news from over 10,000 sources daily.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 mb-16 border border-white/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In the fast-paced world of cryptocurrency, information overload is real. Every day, thousands of
                articles, tweets, and reports flood the crypto space, making it impossible for investors to stay truly
                informed.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                That's why we created CryptoHub - to cut through the noise and deliver only the most relevant,
                high-quality insights that matter to your investment decisions.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How Our AI Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Data Collection</h3>
              <p className="text-gray-600">
                Our AI continuously monitors over 10,000 crypto news sources, social media platforms, and expert
                publications in real-time.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Advanced natural language processing and sentiment analysis algorithms filter out noise and identify
                truly impactful content.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Delivery</h3>
              <p className="text-gray-600">
                Personalized content curation ensures you receive only the most relevant insights tailored to your
                interests and investment goals.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">Sources Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.7%</div>
              <div className="opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="opacity-90">Active Subscribers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{"<"}5min</div>
              <div className="opacity-90">Breaking News Delivery</div>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Transparency</h3>
            <p className="text-gray-600">
              We believe in complete transparency about our AI processes and data sources. No black boxes, just clear,
              explainable intelligence.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
            <p className="text-gray-600">
              Our technology serves the crypto community. Every feature we build is designed to empower better
              investment decisions.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
            <p className="text-gray-600">
              We're committed to continuous improvement, constantly refining our AI to provide the most accurate and
              valuable insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
