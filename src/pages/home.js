import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Profileimage from "../components/image"
const homePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <nav style={{padding :'1rem 5rem'}} ><Profileimage /></nav>
  </Layout>
)

export default homePage