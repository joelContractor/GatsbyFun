import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { styled } from "@mui/system";

const StyledFrontPageArticleImageGrid = styled(Grid, {
    name: "StyledFrontPageArticleImageGrid",
    slot: "Wrapper",
  })({
    paddingTop:"20px", 
    marginTop:"10px", 
    paddingBottom:"40px",
    ".frontPageArticleImage": { borderRadius:"5px" }

  });




function FrontPageArticleImage({ dats }) {

    const res =

        <StyledFrontPageArticleImageGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} md={8}>
                                
                                <GatsbyImage className="frontPageArticleImage" image={getImage(dats)} alt={"article alt info taken from server"}/>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleImageGrid>
        
      
        

    return res;
}
export default FrontPageArticleImage