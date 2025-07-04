"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PaymentModal } from "@/components/payment-modal"
import { Mail, Star, Shield, Zap } from "lucide-react"

export function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowPaymentModal(true)
    }
  }

  return (
    <>
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-2xl"></div>

            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Premium Newsletter</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get exclusive crypto insights, market analysis, and trading signals delivered to your inbox. Join over
                10,000+ investors who trust our premium content.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Premium Content</div>
                    <div className="text-sm text-gray-500">Exclusive insights</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Secure & Private</div>
                    <div className="text-sm text-gray-500">Your data protected</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Daily Updates</div>
                    <div className="text-sm text-gray-500">Fresh content daily</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg border-2 border-blue-200 focus:border-blue-400 rounded-xl bg-white/80 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe Now
              </Button>
            </form>

            <p className="text-center text-gray-500 mt-6 relative z-10">
              Premium access for just <span className="font-semibold text-blue-600">$0.50</span> • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} email={email} />
    </>
  )
}
