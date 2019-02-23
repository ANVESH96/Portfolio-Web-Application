import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Profileimage from "../components/image"
import { MdLocationOn } from "react-icons/md";

const placeStyle={
      display: 'block',
      justifyContent: 'Center',padding:'0.5rem 0rem 0rem 2.5rem',maxWidth:200,fontFamily: 'Trebuchet MS',fontSize:18}
  const profileImage={display:'block',padding:'2.5rem 1.5rem 1rem 7.5rem',maxWidth:500}
  const nameStyle={display:'block',padding:'1.5rem 0rem 0rem 2.5rem',maxWidth:250,fontFamily: 'Trebuchet MS',fontSize:18}
  const skillsStyle={
      display: 'block',
      justifyContent: 'left',padding:'0.5rem 0rem 0rem 1.8rem',maxWidth:350,fontFamily: 'Trebuchet MS',fontSize:18}

const homePage = () => (
  <Layout>
<nav>
    <SEO title="Home" keywords={[`gatsby`,'UNCC','UNCCHARLOTTE',`react`,'graphql','AnveshReddy Mekala','anveshmekala','Anvesheddy mekala']} />
    <div class="profile-image" style={profileImage}>
    <Profileimage />
    <div class="name" style={nameStyle}>ANVESHREDDY MEKALA</div> 
    <div class="skills" style={skillsStyle}>Graduate Student at UNCC</div>
    <div class="place" style={placeStyle}><MdLocationOn/>CHARLOTTE,NC</div>
    <div><a/></div>
    </div>
</nav> 
  </Layout>
)

export default homePage