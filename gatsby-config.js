module.exports = {
  siteMetadata: {
    title: `ANVESHREDDY MEKALA`,
    Interests : 'INTERESTS',
    description: `My current research focus on Understanding Human cognition in Community Platforms and map the ideas to the evolution of products.`,
    mentoredby:'My mentor Stephen Macneil was instrumental in shaping my career path towards analytical research and stack development. He teaches me strategies to be followed and adopted while designing applications and maintaining them. ',
    author: `AnveshReddy Mekala`,
    designedby:'Designed By AnveshReddy Mekala with Gatsby',
    introduction: 'I love to build E2E systems by integrating Full stack technologies with data Analytics and understand cognition.Deploying Applications and continous integration with containerization softwares like Docker helps me in  reducing depolyment and maintaenance time by more than 50%. With Stack development being my major interest, data analysis and Big-data technologies are always part of my projects.',
    quoteline: "'I am not a phot freak and i am not proud of it :p '",
    
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
