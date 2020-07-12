/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `Corona Sayaç — Corona virüsü Türkiye güncel verileri ve istatistikleri`,
    description: `Corona Sayaç en doğru ve güncel verileri kullanarak corona virüsü vakalarını ve istatistiklerini güncel olarak takip etmenizi sağlar.`,
    author: `@coronasayac`,
    siteUrl: 'https://coronasayac.com',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coronasayac`,
        short_name: `Coronasayac`,
        start_url: `/`,
        background_color: `#121A23`,
        theme_color: `#FF6B51`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-114823806-5`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
/* eslint-enable @typescript-eslint/camelcase */
