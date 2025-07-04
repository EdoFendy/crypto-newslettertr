"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Newsletter } from "@/types/newsletter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { extractTextFromHTML } from "@/lib/html-sanitizer"
import { getRelativeTime } from "@/lib/time-utils"
import { Calendar, User, Clock, ArrowRight, Eye, MessageCircle } from "lucide-react"

interface NewsletterCardProps {
  newsletter: Newsletter
}

export function NewsletterCard({ newsletter }: NewsletterCardProps) {
  const [relativeTime, setRelativeTime] = useState("")

  useEffect(() => {
    // Update relative time immediately
    setRelativeTime(getRelativeTime(newsletter.createdAt))

    // Update every minute
    const interval = setInterval(() => {
      setRelativeTime(getRelativeTime(newsletter.createdAt))
    }, 60000)

    return () => clearInterval(interval)
  }, [newsletter.createdAt])

  // Extract plain text preview from HTML content
  const textPreview = extractTextFromHTML(newsletter.content, 120)
  const readingTime = Math.ceil(extractTextFromHTML(newsletter.content).length / 1000)

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={newsletter.imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={newsletter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Time Badge Overlay */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
          {relativeTime}
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge className="bg-blue-600 text-white border-0 hover:bg-blue-700">{newsletter.tags[0] || "News"}</Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {newsletter.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {newsletter.title}
        </h3>

        {/* Subtitle */}
        <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">{newsletter.subtitle}</p>

        {/* Content Preview */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">{textPreview}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{newsletter.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readingTime} min read</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 500) + 100}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 20) + 5}</span>
            </div>
          </div>
        </div>

        {/* Date and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(newsletter.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="font-medium text-blue-600">{relativeTime}</span>
          </div>

          <Link href={`/newsletter/${newsletter.id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 h-auto group/btn"
            >
              <span className="text-xs font-medium mr-1">Read More</span>
              <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
