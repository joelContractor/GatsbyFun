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
          maxWidth: 800,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
      </div>

      <div style={{ marginTop: `3rem`, background:"rgb(26, 36, 33) none repeat scroll 0% 0%", padding: `1.5rem 0 2rem 0`, width: '100%' }} >
        
        <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1.0875rem 1.45rem`, color:"#adadad", fontSize:"0.8rem"}} >
            <Grid container direction="row" spacing={2} style={{ paddingTop:"60px"}}>

              <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
                <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Choose</h4>
                <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>Casting Agents, Producers, Independent Film Makers - use the Call, Emal, or Text buttons on the diverse talent's profile to contact their industry representation. Please be mindfull of time when calling, emailing is often the preffered method. As per the industry, the more established agents may not accept unsolicited requests. </p>
              </Grid>

              <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
                <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Participate</h4>
                <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We aim to collate and help highlight diverse talent in the film industry. Get in touch to be found on this site free! We ONLY feature publicly available contact details used for business (numbers/emails to agents or self-promoting talent). We are not an agency, any contact will be direct from production company to agent/talent.</p>
              </Grid>

              <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
                <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Writer?</h4>
                <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We feature articles written by diverse writers, performers and crew from the TV, Film and Theatre industries. Our articles are read by artists and interested parties internationally. Get in touch about any issues you'd like to see discussed, or have your say by publishing your very own article on diversecrew.com!</p>
              </Grid>

              <Grid item xs={12} md={6} style={{ textAlign:"left", fontSize:"0.7rem" }}>
                <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Get In Touch</h4>
                <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>We are on social media, find and join us using the Facebook, Twitter or LinkedIn buttons, or contact us between 11am and 5pm [Monday - Friday] using the Text, Email or Call buttons. Any emails or texts received outside of our business hours will be followed up upon on the next business day.</p>
              </Grid>

              <Grid item xs={12} style={{ paddingBottom:"0rem", textAlign:"left", fontSize:"0.7rem", borderBottom:"0px dotted white", marginLeft:"105px", marginRight:"95px"  }}>
              </Grid>

              

            </Grid>

        </div>

      </div>

      <div style={{ marginTop: `0rem`, background:"#f1f1f1", padding: `0rem 0 0 0`, width: '100%' }} >
        
        <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0 1.0875rem 0rem`, color:"#adadad", fontSize:"0.8rem"}} >
            <Grid container direction="row" spacing={2} style={{ paddingTop:"2rem"}}>



              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4.5rem"  }}>
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Follow</h5>
                <a aria-label={`Follow Us`} href={`https://twitter.com/Diverse_Crew`} target="_blank" rel="noreferrer">
                                        
                    <StaticImage
                        src="../images/twt.png"
                        width={55}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Text Us Link"
                        className="contactLinkImage"
                    />
                </a>
              </Grid>

              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4rem"  }} >
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Friend</h5>
                <a aria-label={`Befriend Us`} href={`https://www.facebook.com/profile.php?id=100079784120636`} target="_blank" rel="noreferrer">
                                        
                    <StaticImage
                        src="../images/fbk.png"
                        width={55}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Email Us Link"
                        className="contactLinkImage"
                    />
                    
                </a>
              </Grid>

              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4rem" }}>  
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Link</h5>
                <a aria-label={`Link Us`} href={`https://www.linkedin.com/company/81362179/admin/`} target="_blank" rel="noreferrer">
                                        
                    <StaticImage
                        src="../images/li.png"
                        width={55}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Call Us Link"
                        className="contactLinkImage"
                    />
                </a>

              </Grid>

              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4rem"  }}>
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Text</h5>
                <a aria-label={`Send us a text`} href={`sms:07376219008`}>
                                        
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

              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4rem"  }} >
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Email</h5>
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

              <Grid item xs={2} style={{ textAlign:"center", marginTop:"0rem", paddingTop:"2rem", paddingBottom:"4rem" }}>  
                <h5 style={{ textShadow: '1px 1px 2px white', color:"hsla(0, 0%, 0%, 0.8)", fontWeight:"normal", fontSize:"0.7rem" }}>Call</h5>
                <a aria-label={`Call Us`} href={`tel:07376219008`}>
                                        
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

            </Grid>

          
          
        </div>

      </div>

      <footer
          style={{
            marginTop: `0rem`,
            background: 'rgb(26, 36, 33) none repeat scroll 0% 0%',
            padding: `1.5rem 0 0 0`
          }}
        >
        <div style={{ margin: `0 auto`, maxWidth: 3800, padding: `0 1.0875rem 1.45rem`, color:"#adadad", fontSize:"0.8rem"}} >
          <Grid container direction="row" spacing={1} style={{ paddingTop:"2rem", maxWidth:"800px", margin:"0 auto" }}>

            <Grid item xs={12} style={{ textAlign:"left", fontSize:"0.7rem"}}>
              <h4 style={{ color:"white", fontWeight:"normal", width:"90%", margin:"0 auto", paddingBottom:"2rem", fontSize:"0.8rem"}}>Be Aware</h4>
              <p style={{ fontFamily:"Arial", width:"90%", margin:"0 auto", paddingBottom:"2rem"}}>Under 18's without representation to handle queries are not permitted to be featured on this site. All data featured is publically available. We do not store any private user details. We do not process any data for any reason. Talent featured can request removal or modification of their profile at any time.</p>
            </Grid>

            <Grid item xs={12} >
              <p style={{ fontWeight:"normal", textAlign:"center", padding:"1rem 0px 0px 0px", fontSize:"0.5rem", marginBottom:"0px" }}>© {new Date().getFullYear()}, Built By Joel White</p>
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
