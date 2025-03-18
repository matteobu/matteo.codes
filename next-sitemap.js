/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://matteo.codes',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/server-sitemap.xml'],
};
