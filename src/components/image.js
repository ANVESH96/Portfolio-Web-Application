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
    render={data => <Img fluid={data.profilepic.childImageSharp.fluid} style={{borderRadius:120,maxWidth:250,maxHeight:250}} />}
  />
)
export default Profileimage