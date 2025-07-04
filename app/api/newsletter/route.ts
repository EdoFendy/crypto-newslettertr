import { type NextRequest, NextResponse } from "next/server"
import { createNewsletter } from "@/lib/newsletter-service"
import { processHTMLContent, validateHTML, extractTextFromHTML } from "@/lib/html-sanitizer"
import type { Newsletter } from "@/types/newsletter"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.subtitle || !body.content) {
      return NextResponse.json({ error: "Missing required fields: title, subtitle, content" }, { status: 400 })
    }

    // Validate HTML content
    const htmlValidation = validateHTML(body.content)
    if (!htmlValidation.isValid) {
      return NextResponse.json(
        {
          error: "Invalid HTML content",
          details: htmlValidation.errors,
        },
        { status: 400 },
      )
    }

    // Process and sanitize HTML content
    const processedContent = processHTMLContent(body.content)

    // Extract text preview for search/indexing
    const textPreview = extractTextFromHTML(body.content, 300)

    const newsletterData: Omit<Newsletter, "id" | "createdAt"> = {
      title: body.title,
      subtitle: body.subtitle,
      content: processedContent, // Use processed HTML content
      imageUrl: body.imageUrl || null,
      author: body.author || "Crypto News Team",
      tags: body.tags || ["crypto", "news"],
    }

    const newsletter = await createNewsletter(newsletterData)

    return NextResponse.json(
      {
        success: true,
        newsletter,
        textPreview, // Include text preview in response
        message: "Newsletter created successfully with enhanced HTML formatting",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating newsletter:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { getNewsletters } = await import("@/lib/newsletter-service")
    const newsletters = await getNewsletters()

    // Add text previews to newsletters for better API responses
    const newslettersWithPreviews = newsletters.map((newsletter) => ({
      ...newsletter,
      textPreview: extractTextFromHTML(newsletter.content, 150),
    }))

    return NextResponse.json({
      success: true,
      newsletters: newslettersWithPreviews,
      count: newsletters.length,
    })
  } catch (error) {
    console.error("Error fetching newsletters:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
