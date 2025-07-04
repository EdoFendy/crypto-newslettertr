import { type NextRequest, NextResponse } from "next/server"
import { getNewsletterById } from "@/lib/newsletter-service"

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const newsletter = await getNewsletterById(params.id)

    if (!newsletter) {
      return NextResponse.json({ error: "Newsletter not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      newsletter,
    })
  } catch (error) {
    console.error("Error fetching newsletter:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
