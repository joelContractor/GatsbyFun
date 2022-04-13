import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledFrontPageArticleGrid = styled(Grid, {
    name: "StyledFrontPageArticleGrid",
    slot: "Wrapper",
  })({
    fontFamily:`georgia`,
    paddingTop:"30px", 
    marginTop:"20px", 
    marginBottom:"30px", 
    paddingBottom:"10px", 
    borderTop:"1px dashed grey", 
    borderBottom:"1px dashed grey",
    fontSize:"0.8rem",
    ".title": { fontWeight:"bold", fontFamily:`Arial`, fontSize:"0.8rem" }

  });





function FrontPageArticleAboutAuthorParagraph({ dats }) {

    const res =

        <StyledFrontPageArticleGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <Grid item xs={10} sm={8}>
                                
                                <p><span className="title">The Author: </span> {dats}</p>
                  
                        </Grid>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleGrid>
        
      
        

    return res;
}
export default FrontPageArticleAboutAuthorParagraph 