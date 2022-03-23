import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"
import { styled } from "@mui/system";

const StyledFrontPageArticleWriterDetailsGrid = styled(Grid, {
    name: "StyledFrontPageArticleWriterDetailsGrid",
    slot: "Wrapper",
  })({
    paddingTop:"0px", 
    marginTop:"0px",
    paddingbottom:"0px", 
    fontSize:"11px",
    ".title": { fontWeight:"bold" },
    ".shareLinks": {  display:"flex", justifyContent: "center", fontSize:"10px", color:"cornflowerblue" },
 

  });




function FrontPageArticleWriterDetails({ dats, title }) {

    const res =

        <StyledFrontPageArticleWriterDetailsGrid state={{dats, title}} container>
            <Grid container direction="row" spacing={6} >
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={6} sm={6}>
                                
                                <p><span className="title">Written By:</span> {dats}</p>
                  
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} className="shareLinks">

                                <a aria-label={`Tweet this article, ${title}, written by ${dats}, on Twitter`} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" >
                                  
                                    <StaticImage
                                            src="../images/tweetround.png"
                                            width={35}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                </a>
                            
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} className="shareLinks">
                                
                                <a aria-label={`Share this article, ${title}, written by ${dats}, on Facebook`}href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank" rel="noreferrer">
                                   
                                    <StaticImage
                                            src="../images/fb.png"
                                            width={35}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                    </a>

                            </Grid>

                            <Grid item xs={2} sm={2} md={2} className="shareLinks">

                                <a aria-label={`Post this article, ${title}, written by ${dats}, on LinkedIn`} href="https://www.linkedin.com/sharing/share-offsite/?url={url}" target="_blank" rel="noreferrer">
                                    
                                    <StaticImage
                                            src="../images/linked.png"
                                            width={35}
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
        </StyledFrontPageArticleWriterDetailsGrid>
        
      
        

    return res;
}
export default FrontPageArticleWriterDetails