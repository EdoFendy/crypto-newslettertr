import { Brain, Filter, Zap, Target, BarChart3, Shield } from "lucide-react"

export function AIFeatures() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">World's First AI-Powered Crypto Newsletter</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Intelligent News Filtering
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Powered by Advanced AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proprietary AI system processes over 10,000 crypto news sources daily, using advanced natural language
            processing and sentiment analysis to deliver only the most relevant and impactful insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <Filter className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Smart Content Filtering</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced algorithms filter out spam, duplicate content, and low-quality sources, ensuring you receive only
              premium insights.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sentiment Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time sentiment analysis of market trends, social media buzz, and expert opinions to gauge market mood
              accurately.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Curation</h3>
            <p className="text-gray-600 leading-relaxed">
              Machine learning adapts to your reading preferences, delivering increasingly relevant content over time.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Real-time Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              Lightning-fast AI processing ensures breaking news and market movements reach you within minutes of
              happening.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Deep Learning Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Neural networks identify hidden patterns and correlations in market data that human analysts might miss.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fact Verification</h3>
            <p className="text-gray-600 leading-relaxed">
              AI-powered fact-checking cross-references multiple sources to ensure accuracy and combat misinformation.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Revolutionary AI Technology</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future of crypto intelligence. Our AI doesn't just collect news – it understands context,
            predicts trends, and delivers actionable insights that give you a competitive edge.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="opacity-90">Sources Analyzed Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.7%</div>
              <div className="opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{"<"}5min</div>
              <div className="opacity-90">Breaking News Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
