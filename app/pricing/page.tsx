import { SubscriptionModal } from "@/components/subscription-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Crown, Mail } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free newsletter and upgrade when you're ready for premium insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Plan */}
          <Card className="relative bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-2xl transition-all duration-500">
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 mx-auto">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Free Newsletter</CardTitle>
              <div className="text-4xl font-bold text-blue-600 mt-4">Free</div>
              <p className="text-gray-600 mt-2">Perfect to get started</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Weekly newsletter digest</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Basic market insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Community access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>

              <SubscriptionModal
                planType="free"
                trigger={
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl">
                    Get Started Free
                  </Button>
                }
              />
            </CardContent>
          </Card>

          {/* Premium Plan - Coming Soon */}
          <Card className="relative bg-white/80 backdrop-blur-sm border border-orange-200 hover:shadow-2xl transition-all duration-500">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
              Coming Soon
            </Badge>
            <CardHeader className="text-center pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 mx-auto">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Premium</CardTitle>
              <div className="text-4xl font-bold text-orange-600 mt-4">
                $0.50<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mt-2">Advanced insights & features</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Daily AI-curated insights</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Advanced market analysis</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Real-time price alerts</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span>Exclusive content</span>
                </li>
              </ul>

              <SubscriptionModal
                planType="premium"
                trigger={
                  <Button
                    className="w-full h-12 bg-orange-100 text-orange-600 border border-orange-200 hover:bg-orange-200 font-semibold rounded-xl cursor-pointer"
                    variant="outline"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/50">
              <CardHeader>
                <CardTitle className="text-lg">Is the free plan really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Our free plan is completely free with no hidden costs. You'll receive weekly crypto insights and
                  have access to our community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-white/50">
              <CardHeader>
                <CardTitle className="text-lg">When will the premium plan be available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're working hard to launch our premium features. Join our free newsletter to be the first to know
                  when premium becomes available!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-white/50">
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can unsubscribe from our newsletter at any time with a single click. When premium launches, you'll
                  be able to cancel your subscription anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
