import { notFound } from "next/navigation"
import { getNewsletterById, getNewsletters } from "@/lib/newsletter-service"
import { NewsletterDetail } from "@/components/newsletter-detail"
import type { Metadata } from "next"

interface NewsletterPageProps {
  params: {
    id: string
  }
}

export default async function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletter = await getNewsletterById(params.id)
  const relatedNewsletters = await getNewsletters()

  if (!newsletter) {
    return notFound()
  }

  // Filter out current newsletter and get 3 related ones
  const related = relatedNewsletters.filter((n) => n.id !== newsletter.id).slice(0, 3)

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <NewsletterDetail newsletter={newsletter} relatedNewsletters={related} />
    </div>
  )
}

export async function generateMetadata({ params }: NewsletterPageProps): Promise<Metadata> {
  const newsletter = await getNewsletterById(params.id)
  if (!newsletter) {
    return {
      title: "Newsletter not found | Crypto Newsletter Hub",
      robots: { index: false, follow: false },
    }
  }
  return {
    title: `${newsletter.title} | Crypto Newsletter Hub`,
    description: newsletter.subtitle,
    openGraph: {
      title: newsletter.title,
      description: newsletter.subtitle,
      url: `https://cryptonewsai.site/newsletter/${newsletter.id}`,
      type: "article",
      article: {
        publishedTime: newsletter.createdAt,
        authors: [newsletter.author],
        tags: newsletter.tags,
      },
      images: [
        {
          url: newsletter.imageUrl || "https://cryptonewsai.site/placeholder-logo.png",
          width: 800,
          height: 600,
          alt: newsletter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: newsletter.title,
      description: newsletter.subtitle,
      images: [newsletter.imageUrl || "https://cryptonewsai.site/placeholder-logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
