"use client"

import { Button } from "@/components/ui/button"
import { SubscriptionModal } from "@/components/subscription-modal"
import { Sparkles, ArrowRight } from "lucide-react"

export function NewsletterCTA() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Intelligence</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Ahead of the Crypto Market</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of investors who rely on our AI-curated insights to make smarter crypto decisions. Get
              started with our premium newsletter today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SubscriptionModal
                planType="premium"
                trigger={
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg"
                  >
                    Start Premium Trial
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                }
              />
              <SubscriptionModal
                planType="free"
                trigger={
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold rounded-xl"
                  >
                    Try Free Version
                  </Button>
                }
              />
            </div>

            <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime • 7-day free trial for Premium</p>
          </div>
        </div>
      </div>
    </section>
  )
}
