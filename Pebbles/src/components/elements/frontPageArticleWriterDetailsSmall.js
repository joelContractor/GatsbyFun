import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image"
import { styled } from "@mui/system";

const StyledFrontPageArticleWriterDetailsSmallGrid = styled(Grid, {
    name: "StyledFrontPageArticleWriterDetailsSmallGrid",
    slot: "Wrapper",
  })({
    paddingTop:"0px", 
    marginTop:"0px",
    paddingbottom:"0px", 
    fontSize:"11px",
    ".title": { fontWeight:"bold" },
    ".shareLinksSmall": {  display:"flex", justifyContent: "flex-start", fontSize:"10px", color:"cornflowerblue", paddingTop:'0px', marginBottom:"10px"},
 

  });




function FrontPageArticleWriterDetailsSmall({ dats, title }) {

    const res =

        <StyledFrontPageArticleWriterDetailsSmallGrid state={{dats, title}}>
            <Grid container direction="row" spacing={6} >
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} sm={6}>
                                
                                <p><span className="title">Written By:</span> {dats}</p>
                  
                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinksSmall">

                                <a aria-label={`Tweet this article, ${title}, written by ${dats}, on Twitter`} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" >
                                  
                                    <StaticImage
                                            src="../images/tweetround.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                </a>
                            
                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinksSmall">
                                
                                <a aria-label={`Share this article, ${title}, written by ${dats}, on Facebook`}href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank" rel="noreferrer">
                                   
                                    <StaticImage
                                            src="../images/fb.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                    </a>

                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinksSmall">

                                <a aria-label={`Post this article, ${title}, written by ${dats}, on LinkedIn`} href="https://www.linkedin.com/sharing/share-offsite/?url={url}" target="_blank" rel="noreferrer">
                                    
                                    <StaticImage
                                            src="../images/linked.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="LinkedIn share link"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                    </a>

                            </Grid>
                           
                        </>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleWriterDetailsSmallGrid>
        
      
        

    return res;
}
export default FrontPageArticleWriterDetailsSmall