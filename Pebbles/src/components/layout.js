/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grid } from "@material-ui/core";
import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <footer
          style={{
            marginTop: `6rem`,
            background:"rgb(26, 36, 33) none repeat scroll 0% 0%",
            padding: `1.5rem 0 0 0`
          }}
        >
        <div style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1.0875rem 1.45rem`, color:"#adadad", fontSize:"0.8rem"}} >
          <Grid container direction="row" spacing={2} style={{ paddingTop:"60px"}}>

            <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
              <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Participate</h4>
              <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We aim to collate and help highlight diverse talent in the film industry. Be found on this site free! We ONLY feature publicly available contact details used for business (numbers/emails to agents or self-promoting talent). We are not an agency, any contact will be direct from production company to agent/talent.</p>
            </Grid>

            <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
              <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Be Aware</h4>
              <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>Under 18's without representation to handle queries are not permitted to be featured on this site. All data featured is publically available. We do not store any private user details. We do not process any data for any reason. Talent featured can request removal or modification of their profile at any time.</p>
            </Grid>

            <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
              <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Writer?</h4>
              <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We feature articles written by diverse writers, performers and crew from the TV, Film and Theatre industries - You. Get in touch about any issues you'd like to see discussed, or have your say internationally by publishing your very own article on diversecrew.com!</p>
            </Grid>

            <Grid item xs={12} style={{ paddingBottom:"2rem", textAlign:"left", fontSize:"0.7rem", borderBottom:"1px dotted white" }}>
            </Grid>

            <Grid item xs={4} style={{ textAlign:"center", marginTop:"2rem", paddingTop:"4rem", paddingBottom:"4rem"  }}>
              <h5 style={{ color:"white", fontWeight:"normal", fontSize:"0.6rem" }}>Text Us</h5>
              <a aria-label={`Send us a text`} href={`sms:07375510650`}>
                                      
                  <StaticImage
                      src="../images/txr.png"
                      width={55}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Text Us Link"
                      className="contactLinkImage"
                  />
              </a>
            </Grid>

            <Grid item xs={4} style={{ textAlign:"center", marginTop:"2rem", paddingTop:"4rem", paddingBottom:"4rem"  }} >
              <h5 style={{ color:"white", fontWeight:"normal", fontSize:"0.6rem" }}>Email Us</h5>
              <a aria-label={`Email us`} href={`mailto:diversecrew.com@gmail.com?&subject=DiverseCrewEnquiry&body=Hi Diverse Crew, I'd like a free profile`}>
                                      
                  <StaticImage
                      src="../images/emr.png"
                      width={55}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Email Us Link"
                      className="contactLinkImage"
                  />
                  
              </a>
            </Grid>

            <Grid item xs={4} style={{ textAlign:"center", marginTop:"2rem", paddingTop:"4rem", paddingBottom:"4rem" }}>  
              <h5 style={{ color:"white", fontWeight:"normal", fontSize:"0.6rem" }}>Call Us</h5>
              <a aria-label={`Call Us`} href={`tel:07375510650`}>
                                      
                  <StaticImage
                      src="../images/car.png"
                      width={55}
                      quality={95}
                      formats={["AUTO", "WEBP", "AVIF"]}
                      alt="Call Us Link"
                      className="contactLinkImage"
                  />
              </a>

            </Grid>

            <Grid item xs={12} >
              <p style={{ fontWeight:"normal", textAlign:"center", padding:"100px 0px 0px 0px", fontSize:"0.6rem" }}>© {new Date().getFullYear()}, Built By Joel White</p>
            </Grid>

          </Grid>

          
          
        </div>
          
          
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
