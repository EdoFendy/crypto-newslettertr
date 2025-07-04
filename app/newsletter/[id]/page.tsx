import { notFound } from "next/navigation"
import { getNewsletterById, getNewsletters } from "@/lib/newsletter-service"
import { NewsletterDetail } from "@/components/newsletter-detail"

interface NewsletterPageProps {
  params: {
    id: string
  }
}

export default async function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletter = await getNewsletterById(params.id)
  const relatedNewsletters = await getNewsletters()

  if (!newsletter) {
    notFound()
  }

  // Filter out current newsletter and get 3 related ones
  const related = relatedNewsletters.filter((n) => n.id !== newsletter.id).slice(0, 3)

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <NewsletterDetail newsletter={newsletter} relatedNewsletters={related} />
    </div>
  )
}
