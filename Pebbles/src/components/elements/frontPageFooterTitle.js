import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledFrontPageFooterTitleGrid = styled(Grid, {
    name: "StyledFrontPageFooterTitleGrid",
    slot: "Wrapper",
  })({
    paddingTop:"70px", 
    marginTop:"10px", 
    paddingBottom:"0px", 
    borderTop:"1px dashed grey",

  });





function FrontPageFooterTitle({ dats }) {

    const res =

        <StyledFrontPageFooterTitleGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>Contact</h2>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </StyledFrontPageFooterTitleGrid>
        
      
        

    return res;
}
export default FrontPageFooterTitle