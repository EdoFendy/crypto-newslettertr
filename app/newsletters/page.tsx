import { NewsletterCard } from "@/components/newsletter-card"
import { getNewsletters } from "@/lib/newsletter-service"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default async function NewslettersPage() {
  const newsletters = await getNewsletters()

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">All Crypto News</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of AI-curated cryptocurrency insights and market analysis
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search newsletters..."
                className="pl-10 bg-white border-gray-200 focus:border-blue-400"
              />
            </div>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Newsletter Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>

        {newsletters.length === 0 && (
          <div className="text-center py-16 bg-white/50 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No newsletters found</h3>
            <p className="text-gray-500">Our AI is working on curating the latest crypto insights for you!</p>
          </div>
        )}
      </div>
    </div>
  )
}
