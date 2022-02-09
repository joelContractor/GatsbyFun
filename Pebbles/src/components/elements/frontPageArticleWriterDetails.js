import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"





function FrontPageArticleWriterDetails({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"0px", mt:"0px", pb:"0px", fontSize:"11px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={6} sm={6}>
                                
                                <p><span style={{fontWeight:"bold"}}>Written By:</span> Joanne Callsburg</p>
                  
                            </Grid>

                            <Grid item xs={2} sm={2} style={{ display: "flex", justifyContent: "flex-end" }}>

                                <a style={{ fontSize:"10px" }} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" >
                                    Tweet
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
                                
                                <a style={{ fontSize:"10px" }} href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank" rel="noreferrer">
                                    Share
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

                                <a style={{ fontSize:"10px" }} href="https://www.linkedin.com/sharing/share-offsite/?url={url}" target="_blank" rel="noreferrer">
                                    LinkedIn
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
export default FrontPageArticleWriterDetails