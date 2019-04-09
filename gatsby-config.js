module.exports = {
  siteMetadata: {
    title: `ANVESHREDDY MEKALA`,
    Interests : 'Interests',
    description: `  My Current research focus on Understanding Human cognition in Community Platforms and map the ideas to the evolution of products.`,
    mentoredby:'Mentored by Stephen Macneil who was instrumental in shaping my career path towards analytical research and stack development. He taught me strategies to be followed and adopted while designing applications and maintaining them. ',
    author: `AnveshReddy Mekala`,
    designedby:'Build By AnveshReddy Mekala with Gatsby & GraphQl',
    introduction: 'Full stack developer with professional experience in Javascript frameworks (ReactJS, NodeJS, Redux, ImmutableJS, Redux & ExpressJs) and engineering techniques such as containerization , Continuous Integration and Deployment.',
    quoteline: "'I am not a phot freak and i am not proud of it :p '",
    canvasproject_heading: "Understand Human Cognition and Crowd Innovation in crowd sourcing platforms.",
    canvasproject_intro : "We chose Canvas Community platform and scrapped their web data using crawler build on NodeJS .Later, we analyzed the data for  sentiment, topic modeling, idea-score and its correlation with the data to genrate topics.As the part of this project, we chose to build a dashboard using D3JS & Redux where the analytics results can be seen and compared.",
    canvasproject_crawler: "Building Intelligent Crawler",
    canvasproject_crawler_description:" Designed a fault tolerant Intelligent web crawler which scrapesover 40k records from web using CherioJs.",
    portfolio_intro:'Design and Built my own portfolio website using React Static site generator Gatsby v2.0',
    portfolio_heading:' Portfolio Website using Gtasbyv2.0 , Graph QL and React-Bootsrap'
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
