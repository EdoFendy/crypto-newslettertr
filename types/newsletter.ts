export interface Newsletter {
  id: string
  title: string
  subtitle: string
  content: string
  imageUrl?: string | null
  author: string
  tags: string[]
  createdAt: string
}
