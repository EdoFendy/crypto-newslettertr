import { NewsletterCard } from "@/components/newsletter-card"
import { Hero } from "@/components/hero"
import { AIFeatures } from "@/components/ai-features"
import { EmailSubscription } from "@/components/email-subscription"
import { getNewsletters } from "@/lib/newsletter-service"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default async function HomePage() {
  const allNewsletters = await getNewsletters()
  // Show only the latest 6 newsletters on homepage
  const latestNewsletters = allNewsletters.slice(0, 6)

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full"></div>
        <div className="floating-shape-delayed absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full"></div>
        <div className="floating-shape absolute bottom-40 left-1/4 w-12 h-12 bg-indigo-200/30 rounded-full"></div>
        <div className="floating-shape-delayed absolute top-1/3 right-1/3 w-8 h-8 bg-cyan-200/30 rounded-full"></div>
        <div className="floating-shape absolute bottom-20 right-10 w-24 h-24 bg-blue-100/40 rounded-full"></div>
      </div>

      <Hero />
      <AIFeatures />

      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Latest AI-Curated Insights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our advanced AI system analyzes thousands of crypto sources daily, filtering out noise and delivering only
            the most relevant, high-quality insights to your inbox.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {latestNewsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>

        {latestNewsletters.length === 0 && (
          <div className="text-center py-16 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">AI is preparing your first insights</h3>
            <p className="text-gray-500">Our intelligent system is analyzing the latest crypto trends for you!</p>
          </div>
        )}

        {/* Show "View All" button if there are more than 6 newsletters */}
        {allNewsletters.length > 6 && (
          <div className="text-center">
            <Link href="/newsletters">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-50 hover:border-blue-300 text-blue-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                View All Newsletters
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </section>

      <EmailSubscription />
    </div>
  )
}
