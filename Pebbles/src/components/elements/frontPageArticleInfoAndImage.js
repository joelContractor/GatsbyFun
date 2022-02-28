import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { styled } from "@mui/system";

const StyledFrontPageArticleInfoAndImageGrid = styled(Grid, {
    name: "StyledFrontPageArticleInfoAndImageGrid",
    slot: "Wrapper",
  })({
    marginTop:"20px", 
    marginBottom:"20px",
    ".frontPageArticleInfoAndImageImage": { borderRadius:"5px" },
    ".frontPageArticleInfoAndImageInfo": { display: "flex", alignItems: "center" }

  });




function FrontPageArticleInfoAndImage({ dats, text }) {

    const res =

        <StyledFrontPageArticleInfoAndImageGrid state={{dats, text}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} sm={8} md={4} >
                                
                                <GatsbyImage className="frontPageArticleInfoAndImageImage" image={getImage(dats)} alt={"article alt info taken from server"}/>
                  
                            </Grid>

                            <Grid item xs={12} sm={8} md={4} className="frontPageArticleInfoAndImageInfo">
                                
                                <p>{text}</p>
                  
                            </Grid>
                            
                        </>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleInfoAndImageGrid>
        
      
        

    return res;
}
export default FrontPageArticleInfoAndImage