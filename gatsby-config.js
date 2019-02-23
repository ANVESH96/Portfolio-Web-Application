module.exports = {
  siteMetadata: {
    title: `ANVESHREDDY MEKALA`,
    Interests : 'My areas of Interest:',
    description: `Hii. I am AnveshReddy Mekala , a computer science student from UNC CHARLOTTE `,
    mentoredby:'My mentor Stephen Macneil was instrumental in shaping my career path and my advisor is Dr.Julio Bahamoon',
    author: `AnveshReddy Mekala`,
    designedby:'Designed By AnveshReddy Mekala with Gatsby',
    introduction: 'I build E2E systems by integrating Full stack technologies ( ReactJs, Nodejs with Expressjs and Redux ) with containerization software like docker and design interactive dashboards which display knowledge discovery in the data. Alongside application development, Statistical analysis, Data visualization (D3JS &Tablaeu) and Big-data analytics with Python, PySpark and Hadoop are my major area of interest which can bring great dynamics to the team. ',
    
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
