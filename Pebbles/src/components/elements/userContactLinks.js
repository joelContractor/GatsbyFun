import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"





function userContactLinks({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mb:"100px", pb:"0px", fontSize:"13px", borderTop:"1px dashed grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>

                            <Grid item xs={6} sm={6}>
                                
                                <h2 style={{fontWeight:"bold"}}>Contact</h2>
                  
                            </Grid>

                            <Grid item xs={2} sm={2} style={{ display: "flex", justifyContent: "flex-end" }}>

                                <a style={{ color:"#639", fontSize:"10px" }} href={"sms:" + `${dats.node.usertel}`}>
                                    Text
                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                    />
                                </a>
                            
                            </Grid>

                            <Grid item xs={2} sm={2} style={{ display: "flex", justifyContent: "flex-end" }}>
                                
                                <a style={{ color:"#639", fontSize:"10px" }} href={"mailto:" + `${dats.node.useremail}` + "?cc=admin@diversepool.com&&subject=Diverse-Pool-Mail&body=Body-goes-here"}>
                                    Email

                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                    />
                                </a>

                            </Grid>

                            <Grid item xs={2} sm={2} style={{ display: "flex", justifyContent: "flex-end" }}>

                                <a style={{ color:"#639", fontSize:"10px" }} href={"tel:" + `${dats.node.usertel}`}>
                                    Call
                                    <StaticImage
                                        src="../images/gatsby-icon.png"
                                        width={25}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="A Gatsby astronaut"
                                        style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                    />
                                </a>

                            </Grid>
                           
                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default userContactLinks