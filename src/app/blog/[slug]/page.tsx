import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ChevronLeft, ThumbsUp, ThumbsDown, Share, Facebook, Twitter, Linkedin } from 'lucide-react'

// This would normally come from Strapi API
const articles = {
  'die-zukunft-des-geldes': {
    title: 'Die Zukunft des Geldes: GNU Taler vs. Bargeld, digitales Fiat, Bitcoin & Lightning',
    author: 'RevampIT Team',
    date: '12. September 2023',
    readTime: '12 min',
    category: 'Open Source',
    content: `
      <p class="mb-4">In einer Welt, in der digitale Zahlungen zur Norm werden und Datenschutzbedenken lauter werden, stellt sich eine zentrale Frage:
      <strong>Was ist die Zukunft des Geldes – und wer kontrolliert sie?</strong></p>

      <p class="mb-6">Von physischem Bargeld bis zu Blockchain-Innovationen gibt es heute fünf Hauptsysteme im Zahlungsverkehr:
      <strong>Bargeld (Fiat)</strong>, <strong>digitales Fiatgeld (Bank/Karte)</strong>, <strong>GNU Taler</strong>, <strong>Bitcoin</strong> und <strong>Bitcoin Lightning</strong>.
      Jedes davon bringt andere Kompromisse mit sich – bei Datenschutz, Freiheit, Skalierbarkeit, Regulierung und Philosophie.</p>

      <h2 class="text-2xl font-bold mb-6 mt-10">⚖️ Vergleichstabelle</h2>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-3 border border-gray-300">Merkmal</th>
              <th class="p-3 border border-gray-300">Bargeld (Fiat)</th>
              <th class="p-3 border border-gray-300">Digitales Fiat (Karte/Bank)</th>
              <th class="p-3 border border-gray-300">GNU Taler</th>
              <th class="p-3 border border-gray-300">Bitcoin</th>
              <th class="p-3 border border-gray-300">Bitcoin Lightning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Typ</td>
              <td class="p-3 border border-gray-300">Physisches Geld</td>
              <td class="p-3 border border-gray-300">Digitale Buchgeldform</td>
              <td class="p-3 border border-gray-300">Zahlungssystem für Fiat/Krypto</td>
              <td class="p-3 border border-gray-300">Kryptowährung</td>
              <td class="p-3 border border-gray-300">Skalierungsschicht für Bitcoin</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Währung</td>
              <td class="p-3 border border-gray-300">Staatlich (CHF, EUR)</td>
              <td class="p-3 border border-gray-300">Staatlich (CHF, EUR)</td>
              <td class="p-3 border border-gray-300">Verwendet bestehende Währungen</td>
              <td class="p-3 border border-gray-300">Eigene Währung (BTC)</td>
              <td class="p-3 border border-gray-300">BTC</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Privatsphäre</td>
              <td class="p-3 border border-gray-300">Vollständig anonym</td>
              <td class="p-3 border border-gray-300">Vollständig nachvollziehbar</td>
              <td class="p-3 border border-gray-300">Zahler anonym, Händler identifizierbar</td>
              <td class="p-3 border border-gray-300">Pseudonym, öffentlich einsehbar</td>
              <td class="p-3 border border-gray-300">Relativ privat (Off-Chain)</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Regulierung</td>
              <td class="p-3 border border-gray-300">Vollständig integriert</td>
              <td class="p-3 border border-gray-300">Vollständig integriert</td>
              <td class="p-3 border border-gray-300">Steuerkonform (Händlerseite)</td>
              <td class="p-3 border border-gray-300">Eher regulierungskritisch</td>
              <td class="p-3 border border-gray-300">Variabel, je nach Node</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Dezentralisierung</td>
              <td class="p-3 border border-gray-300">Zentral durch Staat</td>
              <td class="p-3 border border-gray-300">Zentral durch Banken</td>
              <td class="p-3 border border-gray-300">Zentraler Wechseldienst + Wallets</td>
              <td class="p-3 border border-gray-300">Vollständig dezentralisiert</td>
              <td class="p-3 border border-gray-300">Peer-to-Peer Kanäle</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Geschwindigkeit</td>
              <td class="p-3 border border-gray-300">Sofort</td>
              <td class="p-3 border border-gray-300">Schnell (je nach System)</td>
              <td class="p-3 border border-gray-300">Tausende Transaktionen/Sekunde</td>
              <td class="p-3 border border-gray-300">~7 Transaktionen pro Sekunde</td>
              <td class="p-3 border border-gray-300">Blitzschnell, sehr skalierbar</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Energieverbrauch</td>
              <td class="p-3 border border-gray-300">Keiner</td>
              <td class="p-3 border border-gray-300">Gering</td>
              <td class="p-3 border border-gray-300">Sehr gering (kein Mining)</td>
              <td class="p-3 border border-gray-300">Hoch (Proof-of-Work)</td>
              <td class="p-3 border border-gray-300">Gering (Off-Chain)</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Zensurresistenz</td>
              <td class="p-3 border border-gray-300">Hoch</td>
              <td class="p-3 border border-gray-300">Gering</td>
              <td class="p-3 border border-gray-300">Mittel (je nach Anbieter)</td>
              <td class="p-3 border border-gray-300">Sehr hoch</td>
              <td class="p-3 border border-gray-300">Hoch</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Open Source</td>
              <td class="p-3 border border-gray-300">Nicht anwendbar</td>
              <td class="p-3 border border-gray-300">Nicht anwendbar</td>
              <td class="p-3 border border-gray-300">Ja</td>
              <td class="p-3 border border-gray-300">Ja</td>
              <td class="p-3 border border-gray-300">Ja</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">🪙 Bargeld (Fiat): Die ursprüngliche Privatsphäre</h2>

      <p class="mb-4"><strong>Physisches Bargeld</strong> ist nach wie vor das beste Mittel für <strong>anonyme Zahlungen</strong>. Keine Datenspuren, keine Drittparteien, keine Genehmigungen.
      Es ist die <strong>letzte wirklich private</strong> und <strong>staatlich akzeptierte Zahlungsform</strong>.</p>

      <p class="mb-6">Doch Bargeld wird zurückgedrängt – durch Karten, Mobile Payment und Apps. Es lässt sich <strong>nicht online verwenden</strong> und ist in vielen urbanen Umgebungen <strong>nicht mehr willkommen</strong>.</p>

      <div class="mb-8 pl-4 border-l-4 border-green-600">
        <p class="text-green-700 mb-2">🟢 <em>Vorteile</em>: Anonym, direkt, ohne Infrastruktur</p>
        <p class="text-red-700">🔴 <em>Nachteile</em>: Offline, verlierbar, keine Transparenz für Buchhaltung</p>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">🏦 Digitales Fiatgeld: Bequem, aber überwachbar</h2>

      <p class="mb-6">Digitale Zahlungen mit Karte, Twint, E-Banking oder Apple Pay sind <strong>schnell, bequem und weltweit verbreitet</strong>.
      Doch sie sind auch <strong>komplett überwachbar</strong>. Jede Transaktion ist nachvollziehbar und kann blockiert oder rückgängig gemacht werden – von Banken oder Behörden.</p>

      <div class="mb-8 pl-4 border-l-4 border-green-600">
        <p class="text-green-700 mb-2">🟢 <em>Vorteile</em>: Schnell, etabliert, rückbuchbar</p>
        <p class="text-red-700">🔴 <em>Nachteile</em>: Vollständig nachvollziehbar, zensierbar, abhängig von Drittparteien</p>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">🐧 GNU Taler: Datenschutz für Käufer, Transparenz für Händler</h2>

      <p class="mb-4"><strong>GNU Taler</strong> verfolgt einen neuen Ansatz: Der <strong>Käufer bleibt anonym</strong>, der <strong>Empfänger (z.B. Händler) ist transparent</strong>.
      Dank <strong>Blind Signatures</strong> (nicht Blockchain) ist Taler <strong>energieeffizient</strong> und sehr <strong>schnell</strong>.</p>

      <p class="mb-6">Es ist <strong>kein eigenes Geld</strong>, sondern ein System, um bestehende Währungen (CHF, EUR, BTC) digital mit <strong>Datenschutz</strong> und <strong>Steuerkonformität</strong> zu nutzen. Ideal für <strong>staatlich genehmigte E-Franken oder E-Euro</strong>.</p>

      <div class="mb-8 pl-4 border-l-4 border-green-600">
        <p class="text-green-700 mb-2">🟢 <em>Vorteile</em>: Umweltfreundlich, anonym für Käufer, steuerkonform</p>
        <p class="text-red-700">🔴 <em>Nachteile</em>: Zentralisierte Wechselstellen nötig, keine völlige Zensurresistenz</p>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">₿ Bitcoin: Freiheit ohne Mittelsmänner</h2>

      <p class="mb-6"><strong>Bitcoin</strong> ist <strong>Geld ohne Zentralbank</strong>. Dezentral, zensurresistent und global einsetzbar – aber auch <strong>öffentlich einsehbar</strong> und <strong>technisch limitiert</strong> in Transaktionsanzahl und Geschwindigkeit.
      Ideal als <strong>digitales Gold</strong>: ein Wertaufbewahrungsmittel, nicht primär ein Zahlungsnetzwerk.</p>

      <div class="mb-8 pl-4 border-l-4 border-green-600">
        <p class="text-green-700 mb-2">🟢 <em>Vorteile</em>: Zensurresistent, unabhängig, limitierte Geldmenge</p>
        <p class="text-red-700">🔴 <em>Nachteile</em>: Transparent, langsam, energieintensiv</p>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">⚡ Bitcoin Lightning: Schneller, günstiger, (etwas) privater</h2>

      <p class="mb-6">Das <strong>Lightning Network</strong> bringt <strong>schnelle, günstige Zahlungen</strong> zu Bitcoin.
      Es verarbeitet Transaktionen <strong>off-chain</strong> und skaliert so für Mikrozahlungen, Abo-Dienste oder Alltagstransaktionen.
      Es ist jedoch noch <strong>technisch anspruchsvoll</strong> und nicht so weit verbreitet wie klassische Zahlungsmittel.</p>

      <div class="mb-8 pl-4 border-l-4 border-green-600">
        <p class="text-green-700 mb-2">🟢 <em>Vorteile</em>: Schnell, günstig, effizient</p>
        <p class="text-red-700">🔴 <em>Nachteile</em>: Komplexität, Liquiditätsbedarf, Netzabdeckung</p>
      </div>

      <h2 class="text-2xl font-bold mb-6 mt-10">🌐 Wertevergleich: Welches System steht für was?</h2>

      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-3 border border-gray-300">Wert</th>
              <th class="p-3 border border-gray-300">Bargeld</th>
              <th class="p-3 border border-gray-300">Digitales Fiat</th>
              <th class="p-3 border border-gray-300">GNU Taler</th>
              <th class="p-3 border border-gray-300">Bitcoin</th>
              <th class="p-3 border border-gray-300">Lightning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Staatliche Kontrolle</td>
              <td class="p-3 border border-gray-300">Voll</td>
              <td class="p-3 border border-gray-300">Voll</td>
              <td class="p-3 border border-gray-300">Mittel</td>
              <td class="p-3 border border-gray-300">Keine</td>
              <td class="p-3 border border-gray-300">Gering</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Freiheit des Nutzers</td>
              <td class="p-3 border border-gray-300">Hoch</td>
              <td class="p-3 border border-gray-300">Niedrig</td>
              <td class="p-3 border border-gray-300">Mittel</td>
              <td class="p-3 border border-gray-300">Hoch</td>
              <td class="p-3 border border-gray-300">Hoch</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Privatsphäre</td>
              <td class="p-3 border border-gray-300">Hoch</td>
              <td class="p-3 border border-gray-300">Keine</td>
              <td class="p-3 border border-gray-300">Ausgewogen</td>
              <td class="p-3 border border-gray-300">Gering</td>
              <td class="p-3 border border-gray-300">Mittel</td>
            </tr>
            <tr>
              <td class="p-3 border border-gray-300 font-semibold">Souveränität</td>
              <td class="p-3 border border-gray-300">Keine</td>
              <td class="p-3 border border-gray-300">Keine</td>
              <td class="p-3 border border-gray-300">Eingeschränkt</td>
              <td class="p-3 border border-gray-300">Hoch</td>
              <td class="p-3 border border-gray-300">Hoch</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mb-4">Jedes dieser Systeme steht für eine Weltanschauung:</p>

      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Digitales Fiat</strong> vertraut auf <strong>Banken und Staaten</strong>.</li>
        <li><strong>Bitcoin</strong> vertraut auf <strong>Mathematik, Code und freie Märkte</strong>.</li>
        <li><strong>GNU Taler</strong> baut eine <strong>Brücke zwischen beiden Welten</strong>.</li>
        <li><strong>Bargeld</strong> ist ein <strong>letztes Refugium echter Autonomie</strong>.</li>
      </ul>

      <h2 class="text-2xl font-bold mb-6 mt-10">🔚 Fazit: Vielfalt statt Monopol</h2>

      <p class="mb-4">Es gibt <strong>keine perfekte Lösung</strong> – nur Systeme mit unterschiedlichen Stärken:</p>

      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li>Für <strong>Privatsphäre und Kontrolle</strong>: <strong>Bargeld</strong></li>
        <li>Für <strong>Komfort und Integration</strong>: <strong>Digitales Fiat</strong></li>
        <li>Für <strong>anonyme, steuerkonforme Zahlungen</strong>: <strong>GNU Taler</strong></li>
        <li>Für <strong>globale Freiheit und Zensurresistenz</strong>: <strong>Bitcoin / Lightning</strong></li>
      </ul>

      <p class="mb-8">Am gefährlichsten ist nicht Bitcoin. Am gefährlichsten ist eine Welt, in der es <strong>nur noch ein System gibt</strong>.</p>

      <div class="bg-green-50 p-6 rounded-lg mb-10 border border-green-200">
        <p class="flex items-start">
          <span class="text-2xl mr-2">💡</span>
          <span>Wenn du GNU Taler, Bitcoin Lightning oder datenschutzfreundliche Zahlungslösungen in dein Unternehmen oder Projekt integrieren willst, melde dich bei uns. Wir bauen offene, ethische Infrastrukturen für eine freie digitale Zukunft.</span>
        </p>
      </div>
    `,
    likes: 42,
    dislikes: 3,
    comments: [
      {
        id: 1,
        author: 'Michael S.',
        date: '12. September 2023',
        content: 'Sehr informative Übersicht über die verschiedenen Zahlungssysteme! Ich finde es besonders interessant, wie GNU Taler versucht, die Vorteile von traditionellen und Krypto-Systemen zu kombinieren.',
        likes: 8,
      },
      {
        id: 2,
        author: 'Julia K.',
        date: '13. September 2023',
        content: 'Danke für den Artikel. Ich habe bisher nicht viel über GNU Taler gehört. Gibt es bereits konkrete Implementierungen dieser Technologie in der Schweiz?',
        likes: 3,
      },
      {
        id: 3,
        author: 'Thomas W.',
        date: '14. September 2023',
        content: 'Ich bin skeptisch gegenüber dem hohen Energieverbrauch von Bitcoin. Wie steht ihr zum ökologischen Fußabdruck dieser Technologie?',
        likes: 5,
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: 'Artikel nicht gefunden - RevampIT',
      description: 'Der gesuchte Artikel konnte nicht gefunden werden.'
    }
  }
  
  return {
    title: `${article.title} - RevampIT Blog`,
    description: article.content.substring(0, 160).replace(/<[^>]*>/g, '') + '...',
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const article = articles[slug as keyof typeof articles]
  
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Artikel nicht gefunden</h1>
        <p className="mb-8">Der gesuchte Artikel konnte nicht gefunden werden.</p>
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Zurück zur Blog-Übersicht
        </Link>
      </div>
    )
  }
  
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Zurück zur Blog-Übersicht
        </Link>
        
        <div className="mb-6">
          <span className="inline-block bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime} Lesezeit</span>
            </div>
          </div>
        </div>
        
        <div className="h-80 bg-gray-200 rounded-xl mb-8 relative">
          {/* Image placeholder - would use real image in production */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Bild: Verschiedene Zahlungssysteme im Vergleich
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="max-w-4xl mx-auto mb-10">
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
      
      {/* Interaction Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-between items-center py-4 border-t border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
            <ThumbsUp className="h-5 w-5" />
            <span>{article.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
            <ThumbsDown className="h-5 w-5" />
            <span>{article.dislikes}</span>
          </button>
        </div>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Teilen:</span>
          <button className="text-gray-600 hover:text-blue-600 transition-colors">
            <Facebook className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-blue-400 transition-colors">
            <Twitter className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-blue-700 transition-colors">
            <Linkedin className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6">Kommentare ({article.comments.length})</h3>
        
        {/* Comment Form */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h4 className="text-lg font-medium mb-4">Hinterlassen Sie einen Kommentar</h4>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-Mail (wird nicht veröffentlicht)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Ihr Kommentar"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            ></textarea>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Kommentar absenden
          </button>
        </div>
        
        {/* Comments List */}
        <div className="space-y-6">
          {article.comments.map(comment => (
            <div key={comment.id} className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{comment.author}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700 mb-3">{comment.content}</p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{comment.likes}</span>
                </button>
                <button className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                  Antworten
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Related Posts - would be dynamic in production */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Das könnte Sie auch interessieren</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mb-2">
                  {i === 1 ? 'Open Source' : i === 2 ? 'Nachhaltigkeit' : 'Digitale Inklusion'}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {i === 1 ? 'Open-Source-Alternativen zu proprietärer Software' : 
                   i === 2 ? 'Nachhaltige IT-Lösungen für KMUs' : 
                   'Digitale Bildung für alle: Unser Engagement'}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{`202${i}-0${i}-0${i+1}`}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{`${i+5} min`}</span>
                </div>
                <Link 
                  href="#"
                  className="inline-flex items-center font-medium text-green-600 hover:text-green-700 transition-colors text-sm"
                >
                  Weiterlesen
                  <ChevronLeft className="ml-1 h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 