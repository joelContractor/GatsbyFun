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
    fontSize:"0.8rem",
    fontFamily:`georgia`,
    ".title": { fontWeight:"bold", fontFamily:`Arial` },
    ".shareLinks": {  display:"flex", justifyContent: "center", fontSize:"0.8rem", color:"cornflowerblue"},
    p: {  marginTop:"10px" }

  });




function FrontPageArticleWriterDetails({ dats, title }) {

    const res =

        <StyledFrontPageArticleWriterDetailsGrid state={{dats, title}}>
            <Grid container direction="row" spacing={6} >
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} sm={6}>
                                
                                <p><span className="title">Written by:</span> {dats}</p>
                  
                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinks">
                                <a className="twitter-share-button" aria-label={`Tweet this article, ${title}, written by ${dats}, on Twitter`} href="https://twitter.com/intent/tweet/?text=Groundbreaking articles from and about diverse talent in the TV, Theatre or Film Industry, all hosted on the HUB for diverse actors, writers, directors and agencies:&url=https://www.diversecrew.com/" target="_blank" rel="noreferrer" data-size="large" data-show-count="false" >
                                  
                                    <StaticImage
                                            src="../images/twt.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                </a>
                            
                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinks">
                                
                                <a aria-label={`Share this article, ${title}, written by ${dats}, on Facebook`}href="https://www.facebook.com/sharer/sharer.php?u=https://www.diversecrew.com/" target="_blank" rel="noreferrer">
                                   
                                    <StaticImage
                                            src="../images/fbk.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="A Gatsby astronaut"
                                            style={{ marginBottom: `0px`, marginLeft: `3px` }} 
                                            />
                                    </a>

                            </Grid>

                            <Grid item xs={4} sm={2} md={2} className="shareLinks">
                                
                                <a aria-label={`Post this article, ${title}, written by ${dats}, on LinkedIn`} href="https://www.linkedin.com/shareArticle?url=https://www.diversecrew.com/&title=Diverse-Crew" target="_blank" rel="noreferrer">
                                    
                                    <StaticImage
                                            src="../images/li.png"
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
        </StyledFrontPageArticleWriterDetailsGrid>
        
      
        

    return res;
}
export default FrontPageArticleWriterDetails