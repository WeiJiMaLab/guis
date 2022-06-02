module.exports = {
  siteMetadata: {
    title: `GUIS site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
      
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
                blocks: {
                    snippet: {
                      classes: "snippet"
                    },
                    danger: {
                      classes: "danger",
                    },
                },
            },
          }
        ],
      },
    },
  ],
  pathPrefix: "/guis-site",
}
