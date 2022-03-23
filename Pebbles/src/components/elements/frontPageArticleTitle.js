import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledFrontPageArticleTitleGrid = styled(Grid, {
    name: "StyledFrontPageArticleTitleGrid",
    slot: "Wrapper",
  })({
    paddingTop:"50px", 
    paddingBottom:"0px", 
    width:"100%",
    "h2": { fontSize:"1.2rem" }

  });





function FrontPageArticleTitle({ dats }) {

    const res =

        <StyledFrontPageArticleTitleGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>{dats}</h2>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </StyledFrontPageArticleTitleGrid>
        
      
        

    return res;
}
export default FrontPageArticleTitle