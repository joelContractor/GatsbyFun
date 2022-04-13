import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledFrontPageArticleParagraphTeaserGrid = styled(Grid, {
    name: "StyledFrontPageArticleParagraphGrid",
    slot: "Wrapper",
  })({
    paddingTop:"5px", 
    marginTop:"10px", 
    paddingBottom:"0px",
    fontSize:"1rem",
    fontFamily:`georgia`

  });






function FrontPageArticleParagraphTeaser({ dats }) {

    const res =

        <StyledFrontPageArticleParagraphTeaserGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <Grid item xs={12} sm={8}>
                                
                                <p>{dats}</p>
                  
                        </Grid>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleParagraphTeaserGrid>
        
      
        

    return res;
}
export default FrontPageArticleParagraphTeaser 