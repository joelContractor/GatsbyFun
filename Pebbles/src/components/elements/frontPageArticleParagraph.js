import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledFrontPageArticleParagraphGrid = styled(Grid, {
    name: "StyledFrontPageArticleParagraphGrid",
    slot: "Wrapper",
  })({
    paddingTop:"5px", 
    marginTop:"10px", 
    paddingBottom:"0px",
    fontSize:"1rem",
    fontFamily:`georgia`

  });






function FrontPageArticleParagraph({ dats }) {

    const res =

        <StyledFrontPageArticleParagraphGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <Grid item xs={12} md={8}>
                                
                                <p>{dats}</p>
                  
                        </Grid>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleParagraphGrid>
        
      
        

    return res;
}
export default FrontPageArticleParagraph 