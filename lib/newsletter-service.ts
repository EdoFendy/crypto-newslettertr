import type { Newsletter } from "@/types/newsletter"
import fs from "fs/promises"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const NEWSLETTERS_FILE = path.join(DATA_DIR, "newsletters.json")

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }
}

// Load newsletters from file
async function loadNewsletters(): Promise<Newsletter[]> {
  try {
    await ensureDataDir()
    const data = await fs.readFile(NEWSLETTERS_FILE, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

// Save newsletters to file
async function saveNewsletters(newsletters: Newsletter[]): Promise<void> {
  await ensureDataDir()
  await fs.writeFile(NEWSLETTERS_FILE, JSON.stringify(newsletters, null, 2))
}

export async function getNewsletters(): Promise<Newsletter[]> {
  const newsletters = await loadNewsletters()
  return newsletters.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export async function getNewsletterById(id: string): Promise<Newsletter | null> {
  const newsletters = await loadNewsletters()
  return newsletters.find((newsletter) => newsletter.id === id) || null
}

export async function createNewsletter(data: Omit<Newsletter, "id" | "createdAt">): Promise<Newsletter> {
  const newsletters = await loadNewsletters()

  const newsletter: Newsletter = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }

  newsletters.push(newsletter)
  await saveNewsletters(newsletters)

  return newsletter
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
