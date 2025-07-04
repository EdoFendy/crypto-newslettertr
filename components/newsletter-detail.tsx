"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Newsletter } from "@/types/newsletter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { NewsletterCard } from "@/components/newsletter-card"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { processHTMLContent, extractTextFromHTML } from "@/lib/html-sanitizer"
import { getRelativeTime, formatPublishTime } from "@/lib/time-utils"
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  BookmarkPlus,
  MessageCircle,
  ThumbsUp,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Clock,
  Eye,
} from "lucide-react"

interface NewsletterDetailProps {
  newsletter: Newsletter
  relatedNewsletters: Newsletter[]
}

export function NewsletterDetail({ newsletter, relatedNewsletters }: NewsletterDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 50)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [relativeTime, setRelativeTime] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Update relative time immediately
    setRelativeTime(getRelativeTime(newsletter.createdAt))

    // Update every minute
    const interval = setInterval(() => {
      setRelativeTime(getRelativeTime(newsletter.createdAt))
    }, 60000)

    return () => clearInterval(interval)
  }, [newsletter.createdAt])

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked ? "Newsletter removed from your saved items" : "Newsletter saved for later reading",
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
    toast({
      title: isLiked ? "Like removed" : "Thanks for the like!",
      description: isLiked ? "Your like has been removed" : "Your feedback helps us improve our AI curation",
    })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = newsletter.title
    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case "copy":
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Newsletter link has been copied to your clipboard",
        })
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }
    setShowShareMenu(false)
  }

  const readingTime = Math.ceil(extractTextFromHTML(newsletter.content).length / 1000) // More accurate reading time

  // Process HTML content for safe rendering
  const processedContent = processHTMLContent(newsletter.content)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Navigation */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-white/50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Newsletter
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl mb-12">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {newsletter.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 transition-colors px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">{newsletter.title}</h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{newsletter.subtitle}</p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{newsletter.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span title={formatPublishTime(newsletter.createdAt)}>
                  {new Date(newsletter.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-blue-600 font-medium">{relativeTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>{Math.floor(Math.random() * 1000) + 200} views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className={`border-gray-300 hover:bg-gray-50 ${
                  isLiked ? "bg-red-50 border-red-200 text-red-600" : "text-gray-600"
                }`}
              >
                <ThumbsUp className={`h-4 w-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {likes}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleBookmark}
                className={`border-gray-300 hover:bg-gray-50 ${
                  isBookmarked ? "bg-blue-50 border-blue-200 text-blue-600" : "text-gray-600"
                }`}
              >
                <BookmarkPlus className={`h-4 w-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                {isBookmarked ? "Saved" : "Save"}
              </Button>

              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>

                {showShareMenu && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-2 z-10 min-w-[200px]">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-blue-400" />
                      <span>Share on Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      <span>Share on Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      <span>Share on LinkedIn</span>
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center space-x-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Copy className="h-4 w-4 text-gray-600" />
                      <span>Copy Link</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {newsletter.imageUrl && (
          <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={newsletter.imageUrl || "/placeholder.svg"}
              alt={newsletter.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Article Content with Enhanced HTML Support */}
        <div className="newsletter-content prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedContent }} />
        </div>

        {/* AI Badge */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">🤖</span>
            </div>
            <span className="font-semibold text-gray-800">AI-Curated Content</span>
          </div>
          <p className="text-gray-600 text-sm">
            This article was intelligently selected and summarized by our advanced AI system from over 10,000 crypto
            sources, ensuring you receive only the most relevant and impactful insights.
          </p>
        </div>
      </article>

      {/* Newsletter CTA */}
      <NewsletterCTA />

      {/* Related Articles */}
      {relatedNewsletters.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Related Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedNewsletters.map((related) => (
              <NewsletterCard key={related.id} newsletter={related} />
            ))}
          </div>
        </section>
      )}

      {/* Comments Section */}
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <MessageCircle className="h-6 w-6 text-gray-600" />
          <h3 className="text-2xl font-bold text-gray-800">Discussion</h3>
        </div>
        <div className="text-center py-12 text-gray-500">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg mb-2">Join the conversation</p>
          <p className="text-sm">Comments and discussions coming soon!</p>
        </div>
      </section>
    </div>
  )
}
