"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { X, Mail, Check, Clock, Crown } from "lucide-react"

interface SubscriptionModalProps {
  planType: "free" | "premium"
  trigger: React.ReactNode
}

export function SubscriptionModal({ planType, trigger }: SubscriptionModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsProcessing(true)

    // Simulate API call for free subscription
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSuccess(true)
    setIsProcessing(false)

    toast({
      title: "Welcome to CryptoHub!",
      description: "You've successfully signed up for our newsletter.",
    })
  }

  const resetModal = () => {
    setIsOpen(false)
    setEmail("")
    setIsProcessing(false)
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <>
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Aboard! 🎉</h3>
                <p className="text-gray-600 mb-6">
                  You've successfully joined our newsletter at{" "}
                  <span className="font-semibold text-blue-600">{email}</span>
                </p>
                <div className="bg-green-50 rounded-xl p-4 mb-6">
                  <p className="text-green-700 font-medium">📧 First newsletter arriving within 24 hours!</p>
                </div>
                <Button
                  onClick={resetModal}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={resetModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6">
                {planType === "premium" ? (
                  <Crown className="h-8 w-8 text-white" />
                ) : (
                  <Mail className="h-8 w-8 text-white" />
                )}
              </div>

              {planType === "premium" ? (
                // Premium Coming Soon
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Coming Soon! 🚀</h3>
                  <p className="text-gray-600 mb-8">
                    We're working hard to bring you premium features. For now, enjoy our free newsletter!
                  </p>

                  <div className="bg-orange-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                      <span className="font-semibold text-orange-700">Coming Soon</span>
                    </div>
                    <div className="space-y-2 text-sm text-orange-600">
                      <p>• AI-powered content curation</p>
                      <p>• Daily premium insights</p>
                      <p>• Advanced market analysis</p>
                      <p>• Real-time alerts</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-6">
                    Join our free newsletter now and be the first to know when premium launches!
                  </p>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-center"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Join Free Newsletter"}
                    </Button>
                  </form>
                </div>
              ) : (
                // Free Plan
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Join Our Free Newsletter</h3>
                  <p className="text-gray-600 mb-8">Get weekly crypto insights delivered to your inbox</p>

                  <div className="bg-blue-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700">Free Newsletter Access</span>
                      <span className="text-2xl font-bold text-blue-600">Free</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>✓ Weekly newsletter digest</p>
                      <p>✓ Market insights & analysis</p>
                      <p>✓ Community access</p>
                    </div>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-center"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Get Started Free"}
                    </Button>
                  </form>
                </div>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
