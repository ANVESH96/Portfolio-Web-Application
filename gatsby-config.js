module.exports = {
  siteMetadata: {
    title: `ANVESHREDDY MEKALA`,
    description: `Hii. I am AnveshReddy Mekala , a computer science student from UNC CHARLOTTE `,
    author: `AnveshReddy Mekala`,
    designedby:'Designed By AnveshReddy Mekala with Gatsby',
    introduction: 'I love to build E2E systems with Fullstack technologies like ReactJS, Express JS and Nodejs with Firebase or Mongodb as model.'
  },
  plugins: [
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/page-icon.png`, 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
