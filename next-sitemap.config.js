/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lostyo.com", 
  generateRobotsTxt: true, 
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/not-found"], 
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/private"] },
    ],
    additionalSitemaps: [
      "https://lostyo.com/server-sitemap.xml", 
    ],
  },
};
