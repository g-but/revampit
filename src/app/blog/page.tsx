import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

export const metadata = {
  title: 'Blog - RevampIT',
  description: 'Stay updated with our latest insights on sustainable technology, open source solutions, and digital inclusion.',
}

const featuredPost = {
  id: 'die-zukunft-des-geldes',
  title: 'Die Zukunft des Geldes: GNU Taler vs. Bargeld, digitales Fiat, Bitcoin & Lightning',
  excerpt: 'In einer Welt, in der digitale Zahlungen zur Norm werden und Datenschutzbedenken lauter werden, stellt sich eine zentrale Frage: Was ist die Zukunft des Geldes – und wer kontrolliert sie?',
  author: 'RevampIT Team',
  date: '2023-09-12',
  readTime: '12 min',
  category: 'Open Source',
  image: '/images/blog/crypto-comparison.jpg',
}

const recentPosts = [
  {
    id: 'nachhaltige-it-infrastruktur',
    title: 'Nachhaltige IT-Infrastruktur für kleine Unternehmen',
    excerpt: 'Wie kleine Unternehmen ihre IT-Infrastruktur nachhaltig gestalten können, ohne die Kosten zu erhöhen.',
    author: 'RevampIT Team',
    date: '2023-08-22',
    readTime: '8 min',
    category: 'Nachhaltigkeit',
    image: '/images/blog/placeholder.jpg',
  },
  {
    id: 'linux-im-unternehmen',
    title: 'Linux im Unternehmen: Ein praktischer Leitfaden',
    excerpt: 'Wie Unternehmen von Open-Source-Betriebssystemen profitieren können – mit praktischen Umsetzungstipps.',
    author: 'RevampIT Team',
    date: '2023-07-15',
    readTime: '10 min',
    category: 'Open Source',
    image: '/images/blog/placeholder.jpg',
  },
  {
    id: 'hardware-recycling',
    title: 'Hardware-Recycling: Mehr als nur Entsorgung',
    excerpt: 'Warum Recycling von Hardware ein wichtiger Bestandteil der Kreislaufwirtschaft ist und wie Sie dazu beitragen können.',
    author: 'RevampIT Team',
    date: '2023-06-28',
    readTime: '7 min',
    category: 'Nachhaltigkeit',
    image: '/images/blog/placeholder.jpg',
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      {/* Blog Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">RevampIT Blog</h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights zum nachhaltigen Umgang mit Technologie, Open-Source-Lösungen und digitaler Inklusion.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Suchen Sie nach Artikeln..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
          <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent">
            <option value="">Alle Kategorien</option>
            <option value="open-source">Open Source</option>
            <option value="nachhaltigkeit">Nachhaltigkeit</option>
            <option value="digital-inklusion">Digitale Inklusion</option>
            <option value="tutorials">Tutorials</option>
          </select>
        </div>
      </div>

      {/* Featured Post */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Neuester Artikel</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0 h-64 md:h-auto md:w-1/2 relative">
              <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
              <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {featuredPost.category}
              </div>
              <div className="h-full w-full bg-gray-200"></div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{featuredPost.readTime}</span>
              </div>
              <Link href={`/blog/${featuredPost.id}`} className="block">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                  {featuredPost.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <Link 
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center font-medium text-green-600 hover:text-green-700 transition-colors"
              >
                Weiterlesen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weitere Artikel</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </div>
                <div className="h-full w-full bg-gray-200"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`} className="block">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center font-medium text-green-600 hover:text-green-700 transition-colors text-sm"
                >
                  Weiterlesen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Bleiben Sie auf dem Laufenden</h2>
        <p className="text-gray-600 text-center mb-6">
          Abonnieren Sie unseren Newsletter, um die neuesten Artikel und Updates direkt in Ihren Posteingang zu erhalten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Abonnieren
          </button>
        </div>
      </div>
    </div>
  )
} 