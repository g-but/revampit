/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://revampit.ch',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
} 