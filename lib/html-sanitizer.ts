// Simple HTML sanitizer for security
export function sanitizeHTML(html: string): string {
  // Allow common HTML tags and attributes
  const allowedTags = [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "del",
    "ins",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ul",
    "ol",
    "li",
    "a",
    "img",
    "blockquote",
    "cite",
    "code",
    "pre",
    "kbd",
    "samp",
    "span",
    "div",
    "section",
    "article",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "tr",
    "th",
    "td",
    "hr",
    "mark",
    "small",
    "sub",
    "sup",
    "figure",
    "figcaption",
  ]

  const allowedAttributes = [
    "href",
    "src",
    "alt",
    "title",
    "target",
    "class",
    "id",
    "width",
    "height",
    "style",
    "data-*",
  ]

  // Basic sanitization - remove script tags and dangerous attributes
  const sanitized = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/vbscript:/gi, "")
    .replace(/data:(?!image)/gi, "") // Allow data: for images only

  return sanitized
}

// Enhanced HTML processor for better formatting and styling
export function processHTMLContent(html: string): string {
  const sanitized = sanitizeHTML(html)

  // Add comprehensive classes to HTML elements for consistent styling
  return (
    sanitized
      // Headers
      .replace(/<h1([^>]*)>/gi, '<h1$1 class="html-h1 text-4xl font-bold text-gray-900 mb-6 mt-8 leading-tight">')
      .replace(/<h2([^>]*)>/gi, '<h2$1 class="html-h2 text-3xl font-bold text-gray-800 mb-5 mt-7 leading-tight">')
      .replace(/<h3([^>]*)>/gi, '<h3$1 class="html-h3 text-2xl font-semibold text-gray-800 mb-4 mt-6 leading-tight">')
      .replace(/<h4([^>]*)>/gi, '<h4$1 class="html-h4 text-xl font-semibold text-gray-700 mb-3 mt-5 leading-tight">')
      .replace(/<h5([^>]*)>/gi, '<h5$1 class="html-h5 text-lg font-semibold text-gray-700 mb-3 mt-4 leading-tight">')
      .replace(/<h6([^>]*)>/gi, '<h6$1 class="html-h6 text-base font-semibold text-gray-600 mb-2 mt-3 leading-tight">')

      // Paragraphs and text
      .replace(/<p([^>]*)>/gi, '<p$1 class="html-p text-gray-700 mb-4 leading-relaxed text-base">')
      .replace(/<strong([^>]*)>/gi, '<strong$1 class="html-strong font-bold text-gray-900">')
      .replace(/<b([^>]*)>/gi, '<b$1 class="html-b font-bold text-gray-900">')
      .replace(/<em([^>]*)>/gi, '<em$1 class="html-em italic text-gray-800">')
      .replace(/<i([^>]*)>/gi, '<i$1 class="html-i italic text-gray-800">')
      .replace(/<u([^>]*)>/gi, '<u$1 class="html-u underline decoration-blue-500">')
      .replace(/<s([^>]*)>/gi, '<s$1 class="html-s line-through text-gray-500">')
      .replace(/<del([^>]*)>/gi, '<del$1 class="html-del line-through text-red-600 bg-red-50 px-1 rounded">')
      .replace(/<ins([^>]*)>/gi, '<ins$1 class="html-ins underline text-green-600 bg-green-50 px-1 rounded">')
      .replace(/<mark([^>]*)>/gi, '<mark$1 class="html-mark bg-yellow-200 text-yellow-900 px-1 rounded">')
      .replace(/<small([^>]*)>/gi, '<small$1 class="html-small text-sm text-gray-600">')

      // Lists
      .replace(/<ul([^>]*)>/gi, '<ul$1 class="html-ul list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">')
      .replace(/<ol([^>]*)>/gi, '<ol$1 class="html-ol list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">')
      .replace(/<li([^>]*)>/gi, '<li$1 class="html-li leading-relaxed">')

      // Links and media
      .replace(
        /<a([^>]*)>/gi,
        '<a$1 class="html-link text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors font-medium">',
      )
      .replace(/<img([^>]*)>/gi, '<img$1 class="html-img rounded-lg shadow-md max-w-full h-auto my-6 mx-auto block">')

      // Blockquotes
      .replace(
        /<blockquote([^>]*)>/gi,
        '<blockquote$1 class="html-blockquote border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50 rounded-r-lg italic text-gray-700 relative">',
      )
      .replace(/<cite([^>]*)>/gi, '<cite$1 class="html-cite text-sm text-gray-500 not-italic block mt-2">')

      // Code
      .replace(
        /<code([^>]*)>/gi,
        '<code$1 class="html-code bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono border">',
      )
      .replace(
        /<pre([^>]*)>/gi,
        '<pre$1 class="html-pre bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono border shadow-inner">',
      )
      .replace(
        /<kbd([^>]*)>/gi,
        '<kbd$1 class="html-kbd bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-mono border border-gray-300 shadow-sm">',
      )
      .replace(
        /<samp([^>]*)>/gi,
        '<samp$1 class="html-samp bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-mono">',
      )

      // Tables
      .replace(
        /<table([^>]*)>/gi,
        '<table$1 class="html-table w-full border-collapse border border-gray-300 my-6 rounded-lg overflow-hidden shadow-sm">',
      )
      .replace(/<thead([^>]*)>/gi, '<thead$1 class="html-thead bg-gray-100">')
      .replace(/<tbody([^>]*)>/gi, '<tbody$1 class="html-tbody">')
      .replace(/<tr([^>]*)>/gi, '<tr$1 class="html-tr border-b border-gray-200 hover:bg-gray-50 transition-colors">')
      .replace(
        /<th([^>]*)>/gi,
        '<th$1 class="html-th border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800 bg-gray-50">',
      )
      .replace(/<td([^>]*)>/gi, '<td$1 class="html-td border border-gray-300 px-4 py-3 text-gray-700">')

      // Dividers and misc
      .replace(
        /<hr([^>]*)>/gi,
        '<hr$1 class="html-hr border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8">',
      )
      .replace(/<div([^>]*)>/gi, '<div$1 class="html-div">')
      .replace(/<span([^>]*)>/gi, '<span$1 class="html-span">')
      .replace(/<sub([^>]*)>/gi, '<sub$1 class="html-sub text-xs align-sub">')
      .replace(/<sup([^>]*)>/gi, '<sup$1 class="html-sup text-xs align-super">')

      // Figures
      .replace(/<figure([^>]*)>/gi, '<figure$1 class="html-figure my-8 text-center">')
      .replace(/<figcaption([^>]*)>/gi, '<figcaption$1 class="html-figcaption text-sm text-gray-600 mt-2 italic">')
  )
}

// Function to extract plain text from HTML for previews
export function extractTextFromHTML(html: string, maxLength = 150): string {
  const text = html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
    .replace(/&amp;/g, "&") // Replace &amp; with &
    .replace(/&lt;/g, "<") // Replace &lt; with <
    .replace(/&gt;/g, ">") // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .trim()

  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
}

// Function to validate HTML structure
export function validateHTML(html: string): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check for unclosed tags (basic validation)
  const openTags = html.match(/<[^/][^>]*>/g) || []
  const closeTags = html.match(/<\/[^>]*>/g) || []

  if (openTags.length !== closeTags.length) {
    errors.push("Mismatched HTML tags detected")
  }

  // Check for dangerous content
  if (html.includes("<script")) {
    errors.push("Script tags are not allowed")
  }

  if (html.match(/on\w+=/)) {
    errors.push("Event handlers are not allowed")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
