import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"
import { styled } from "@mui/system";

const StyledUserContactLinksGrid = styled(Grid, {
    name: "StyledUserContactLinksGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginBottom:"100px", 
    paddingBottom:"0px", 
    fontSize:"13px", 
    borderTop:"1px dashed grey",
    ".title": { fontWeight:"bold", paddingTop:"4px" },
    ".contactLinks": { color:"#639", fontSize:"10px"},
    ".contactLinkContainer": { display: "flex", justifyContent: "flex-start" },
    ".contactLinkImage": { marginBottom: `0px`, marginLeft: `3px` },
    ".contactTitle": { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }

  });




function userContactLinks({ dats }) {

    const res =

        <StyledUserContactLinksGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>

                            <Grid item xs={12} sm={6} className="contactTitle">
                                
                                <h2 className="title">Contact</h2>
                  
                            </Grid>

                            <Grid item xs={4} sm={2} className="contactLinkContainer">

                                <a aria-label={`Send a text to ${dats.node.title}`} className="contactLinks" href={`sms:0${dats.node.usertel}`}>
                                    
                                    <StaticImage
                                        src="../images/tx.png"
                                        width={55}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        className="contactLinkImage"
                                    />
                                </a>
                            
                            </Grid>

                            <Grid item xs={4} sm={2} className="contactLinkContainer">
                                
                                <a aria-label={`Send an email to ${dats.node.title}`} className="contactLinks" href={`mailto:${dats.node.useremail}?cc=admin@diversepool.com&&subject=Diverse-Pool-Mail&body=Body-goes-here`}>
                                    
                                    <StaticImage
                                        src="../images/ma.png"
                                        width={55}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        className="contactLinkImage"
                                    />
                                </a>

                            </Grid>

                            <Grid item xs={4} sm={2} className="contactLinkContainer">

                                <a aria-label={`Call ${dats.node.title}`} className="contactLinks" href={`tel:0${dats.node.usertel}`}>
                                    
                                    <StaticImage
                                        src="../images/ca.png"
                                        width={55}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        className="contactLinkImage"
                                    />
                                </a>

                            </Grid>
                           
                        </>
                    }
                })()}
            </Grid>
        </StyledUserContactLinksGrid>
        
      
        

    return res;
}
export default userContactLinks