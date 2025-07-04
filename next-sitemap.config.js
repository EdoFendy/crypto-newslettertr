/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cryptonewsai.site',
  generateRobotsTxt: true,
  changefreq: 'hourly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: '.next',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://cryptonewsai.site/sitemap.xml',
    ],
  },
}; 