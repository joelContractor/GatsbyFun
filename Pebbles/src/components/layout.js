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
        <div style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1.0875rem 1.45rem`, color:"#7e7e7e", fontSize:"0.8rem"}} >
          <Grid container direction="row" spacing={3}>

          <Grid item xs={12} style={{ textAlign:"center", paddingTop:"60px", fontSize:"0.8rem" }}>
              <h4 style={{ width:"80%", margin:"0 auto", paddingBottom:"3rem", fontSize:"0.9rem"}}>Participate:</h4>
              <p style={{ width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We aim to collate and help highlight diverse talent in the film industry. Be found on this site free! We ONLY feature publicly available contact details used for business (numbers/emails to agents or self-promoting talent). We are not an agency, any contact will be direct from production company to agent/talent.</p>
            </Grid>

            <Grid item xs={4} style={{ textAlign:"center" }}>
              <h5>Text Us</h5>
              <a aria-label={`Send us a text`} href={`sms:07402180192`}>
                                      
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

            <Grid item xs={4} style={{ textAlign:"center" }} >
              <h5>Email Us</h5>
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

            <Grid item xs={4} style={{ textAlign:"center" }}>  
              <h5>Call Us</h5>
              <a aria-label={`Call Us`} href={`tel:07402180192`}>
                                      
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
              <p style={{ textAlign:"center", padding:"100px 0px 0px 0px" }}>© {new Date().getFullYear()}, Built By Joel White</p>
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
