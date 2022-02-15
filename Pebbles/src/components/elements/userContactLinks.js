import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    ".title": { fontWeight:"bold" },
    ".contactLinks": { color:"#639", fontSize:"10px", width:"100%", textAlign:"right"},
    ".contactLinkContainer": { display: "flex", justifyContent: "flex-end" },
    ".contactLinkImage": { marginBottom: `0px`, marginLeft: `3px` },

  });




function userContactLinks({ dats }) {

    const res =

        <StyledUserContactLinksGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>

                            <Grid item xs={6} sm={6}>
                                
                                <h2 className="title">Contact</h2>
                  
                            </Grid>

                            <Grid item xs={2} sm={2} className="contactLinkContainer">

                                <a className="contactLinks" href={`sms:${dats.node.usertel}`}>
                                    Texts
                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        className="contactLinkImage"
                                    />
                                </a>
                            
                            </Grid>

                            <Grid item xs={2} sm={2} className="contactLinkContainer">
                                
                                <a className="contactLinks" href={`mailto:${dats.node.useremail}?cc=admin@diversepool.com&&subject=Diverse-Pool-Mail&body=Body-goes-here`}>
                                    Email
                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        className="contactLinkImage"
                                    />
                                </a>

                            </Grid>

                            <Grid item xs={2} sm={2} className="contactLinkContainer">

                                <a className="contactLinks" href={`tel:${dats.node.usertel}`}>
                                    Call
                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
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