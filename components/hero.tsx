import { TrendingUp, Zap, Globe, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-lg">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-blue-700">Premium Crypto Intelligence</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
          Crypto Newsletter
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
            Hub
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Your premium source for cryptocurrency news, market analysis, and blockchain insights. Join thousands of
          investors who trust our expert analysis to make informed decisions.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center space-x-3 text-gray-700 bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Real-time Updates</div>
              <div className="text-sm text-gray-500">Live market data</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-700 bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Global Coverage</div>
              <div className="text-sm text-gray-500">Worldwide insights</div>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-700 bg-white/60 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/30">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Expert Analysis</div>
              <div className="text-sm text-gray-500">Professional insights</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Reading Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  )
}
