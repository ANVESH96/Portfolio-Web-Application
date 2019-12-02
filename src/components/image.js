import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Profileimage = () => (
  <StaticQuery
    query={graphql`
      query {
        profilepic: file(relativePath: { eq: "profile-pic.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.profilepic.childImageSharp.fluid} style={{borderRadius:100,maxWidth:150,maxHeight:150}} /> }
  />
)
export default Profileimage