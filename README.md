# Crypto Newsletter Hub

Un sito web moderno per newsletter di criptovalute con API integrate per l'automazione tramite n8n e supporto completo per contenuti HTML formattati.

## 🚀 Caratteristiche

- **Design moderno** con tema crypto e gradients
- **API REST** per pubblicazione automatica delle newsletter
- **Supporto HTML completo** con sanitizzazione e styling avanzato
- **Gestione immagini** opzionale per ogni newsletter
- **Responsive design** ottimizzato per tutti i dispositivi
- **Storage su file system** (facilmente estendibile a database)
- **Integrazione n8n** per automazione completa

## 📋 Prerequisiti

- Node.js 18+ 
- npm o yarn
- Git

## 🛠️ Installazione

### 1. Clona il repository
\`\`\`bash
git clone <your-repo-url>
cd crypto-newsletter
\`\`\`

### 2. Installa le dipendenze
\`\`\`bash
npm install
# oppure
yarn install
\`\`\`

### 3. Avvia il server di sviluppo
\`\`\`bash
npm run dev
# oppure
yarn dev
\`\`\`

### 4. Apri il browser
Vai su [http://localhost:3000](http://localhost:3000)

## 🔧 Configurazione

### Struttura del progetto
\`\`\`
crypto-newsletter/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── newsletter/        # Pagine newsletter
│   └── page.tsx          # Homepage
├── components/            # Componenti React
├── lib/                  # Utilities e servizi
│   ├── html-sanitizer.ts # Sanitizzazione HTML
│   └── newsletter-service.ts
├── types/                # TypeScript types
├── data/                 # Storage file JSON (creato automaticamente)
└── public/               # Asset statici
\`\`\`

## 📡 API Endpoints

### POST /api/newsletter
Crea una nuova newsletter con supporto HTML completo

**Body richiesto:**
\`\`\`json
{
  "title": "Titolo della newsletter",
  "subtitle": "Sottotitolo descrittivo",
  "content": "<h2>Contenuto HTML</h2><p>Supporta <strong>formattazione</strong> completa!</p><ul><li>Liste</li><li>Link</li><li>Immagini</li></ul>",
  "imageUrl": "https://example.com/image.jpg", // opzionale
  "author": "Nome autore", // opzionale, default: "Crypto News Team"
  "tags": ["crypto", "bitcoin", "news"] // opzionale, default: ["crypto", "news"]
}
\`\`\`

**Supporto HTML:**
- **Headings**: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- **Paragrafi**: `<p>`, `<br>`
- **Formattazione**: `<strong>`, `<b>`, `<em>`, `<i>`, `<u>`
- **Liste**: `<ul>`, `<ol>`, `<li>`
- **Link**: `<a href="...">`
- **Immagini**: `<img src="..." alt="...">`
- **Citazioni**: `<blockquote>`
- **Codice**: `<code>`, `<pre>`
- **Tabelle**: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- **Separatori**: `<hr>`

**Esempio di contenuto HTML:**
\`\`\`html
<h2>Bitcoin raggiunge nuovi massimi storici</h2>
<p>Il prezzo del <strong>Bitcoin</strong> ha superato i <em>$50,000</em> per la prima volta nella storia.</p>

<h3>Fattori chiave del rialzo:</h3>
<ul>
  <li>Adozione istituzionale crescente</li>
  <li>Politiche monetarie espansive</li>
  <li>Interesse retail in aumento</li>
</ul>

<blockquote>
"Questo è solo l'inizio di una nuova era per Bitcoin" - Analista Crypto
</blockquote>

<p>Per maggiori informazioni, visita <a href="https://bitcoin.org">bitcoin.org</a></p>

<hr>

<h3>Tabella prezzi:</h3>
<table>
  <thead>
    <tr>
      <th>Crypto</th>
      <th>Prezzo</th>
      <th>Variazione 24h</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bitcoin</td>
      <td>$50,000</td>
      <td>+5.2%</td>
    </tr>
    <tr>
      <td>Ethereum</td>
      <td>$3,200</td>
      <td>+3.8%</td>
    </tr>
  </tbody>
</table>
\`\`\`

**Risposta di successo:**
\`\`\`json
{
  "success": true,
  "newsletter": {
    "id": "generated-id",
    "title": "Titolo della newsletter",
    "subtitle": "Sottotitolo descrittivo",
    "content": "Contenuto HTML processato e sanitizzato...",
    "imageUrl": "https://example.com/image.jpg",
    "author": "Nome autore",
    "tags": ["crypto", "bitcoin", "news"],
    "createdAt": "2024-01-01T12:00:00.000Z"
  },
  "message": "Newsletter created successfully with HTML formatting"
}
\`\`\`

### GET /api/newsletter
Ottieni tutte le newsletter

**Risposta:**
\`\`\`json
{
  "success": true,
  "newsletters": [...],
  "count": 5
}
\`\`\`

### GET /api/newsletter/[id]
Ottieni una newsletter specifica

**Risposta:**
\`\`\`json
{
  "success": true,
  "newsletter": {...}
}
\`\`\`

## 🎨 Styling HTML

Il sistema applica automaticamente stili responsive e professionali a tutti gli elementi HTML:

- **Headings** con dimensioni e spaziature appropriate
- **Paragrafi** con line-height ottimizzato per la lettura
- **Liste** con indentazione e spacing corretti
- **Blockquotes** con bordo colorato e background
- **Codice** con syntax highlighting
- **Tabelle** con bordi e alternanza colori
- **Link** con hover effects
- **Immagini** responsive con ombre

## 🔒 Sicurezza HTML

Il sistema include sanitizzazione automatica che:
- Rimuove script e contenuti pericolosi
- Filtra attributi non sicuri
- Mantiene solo tag HTML sicuri
- Previene attacchi XSS

## 🤖 Integrazione con n8n

### Configurazione n8n

1. **HTTP Request Node** per inviare dati al tuo sito:
   - Method: POST
   - URL: `http://localhost:3000/api/newsletter` (o il tuo dominio in produzione)
   - Headers: `Content-Type: application/json`

2. **Body esempio per n8n con HTML:**
\`\`\`json
{
  "title": "{{ $json.title }}",
  "subtitle": "{{ $json.subtitle }}",
  "content": "<h2>{{ $json.mainHeading }}</h2><p>{{ $json.content }}</p><ul><li>{{ $json.point1 }}</li><li>{{ $json.point2 }}</li></ul>",
  "imageUrl": "{{ $json.imageUrl }}",
  "author": "{{ $json.author }}",
  "tags": {{ $json.tags }}
}
\`\`\`

### Workflow n8n suggerito:
1. **Trigger** (Webhook, Schedule, etc.)
2. **Data processing** (formattazione contenuto HTML)
3. **HTML Builder** (costruzione markup)
4. **HTTP Request** al tuo API endpoint
5. **Error handling** per gestire eventuali errori

## 🧪 Test delle API

### Con curl (contenuto HTML):
\`\`\`bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Bitcoin Analysis",
    "subtitle": "Comprehensive market analysis",
    "content": "<h2>Market Overview</h2><p>Bitcoin shows <strong>strong bullish signals</strong> with:</p><ul><li>Increased institutional adoption</li><li>Technical breakout patterns</li><li>Growing retail interest</li></ul><blockquote>The trend is your friend until it ends</blockquote><p>For more details, visit <a href=\"https://bitcoin.org\">bitcoin.org</a></p>",
    "imageUrl": "https://example.com/bitcoin-chart.jpg",
    "author": "Crypto Analyst",
    "tags": ["bitcoin", "analysis", "market"]
  }'
\`\`\`

## 🚀 Deploy in produzione

### Vercel (Raccomandato)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Altri provider
- Assicurati che la cartella `data/` sia scrivibile
- Configura le variabili d'ambiente se necessario
- Considera l'uso di un database per la produzione

## 🔄 Estensioni future

- **Database integration** (PostgreSQL, MongoDB)
- **Rich text editor** per admin panel
- **Email notifications** per nuove newsletter
- **RSS feed** per sottoscrizioni
- **Analytics** e metriche di lettura
- **Markdown support** oltre all'HTML

## 🐛 Troubleshooting

### Contenuto HTML non visualizzato correttamente
- Verifica che l'HTML sia valido
- Controlla la console per errori di sanitizzazione
- Assicurati di usare tag supportati

### Styling non applicato
- Verifica che le classi CSS siano caricate
- Controlla che il contenuto sia processato correttamente
- Testa su diversi dispositivi

### Errore di sicurezza HTML
- Il sistema rimuove automaticamente contenuti pericolosi
- Usa solo tag HTML sicuri e supportati
- Evita JavaScript inline e attributi pericolosi

## 📞 Supporto

Per problemi o domande:
1. Controlla i log della console
2. Verifica la documentazione API
3. Testa con curl o Postman
4. Controlla la struttura dei dati JSON e HTML

## 📄 Licenza

MIT License - vedi file LICENSE per dettagli.
