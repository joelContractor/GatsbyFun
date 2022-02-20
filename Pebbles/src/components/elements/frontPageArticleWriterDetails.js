import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
    ".shareLinks": { display: "flex", justifyContent: "flex-end", fontSize:"10px" }

  });




function FrontPageArticleWriterDetails({ dats }) {

    const res =

        <StyledFrontPageArticleWriterDetailsGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={6} sm={6}>
                                
                                <p><span className="title">Written By:</span> {dats.node.articleauthor}</p>
                  
                            </Grid>

                            <Grid item xs={2} sm={2} className="shareLinks">

                                <a ariaLabel={`Tweet this article, ${dats.node.title}, written by ${dats.node.articleauthor}, on Twitter`} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" >
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

                            <Grid item xs={2} sm={2} className="shareLinks">
                                
                                <a ariaLabel={`Share this article, ${dats.node.title}, written by ${dats.node.articleauthor}, on Facebook`}href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank" rel="noreferrer">
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

                            <Grid item xs={2} sm={2} className="shareLinks">

                                <a ariaLabel={`Post this article, ${dats.node.title}, written by ${dats.node.articleauthor}, on LinkedIn`} href="https://www.linkedin.com/sharing/share-offsite/?url={url}" target="_blank" rel="noreferrer">
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
        </StyledFrontPageArticleWriterDetailsGrid>
        
      
        

    return res;
}
export default FrontPageArticleWriterDetails