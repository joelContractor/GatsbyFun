import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserWritersProcessGrid = styled(Grid, {
    name: "StyledUserWritersProcessGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    ".bold": { fontWeight:"bold" }

  });





function UserWritersProcess({ dats }) {

    const res =

        <StyledUserWritersProcessGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.writerprocessone){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>Writer's Process</h2>
                            
                            </Grid>
                            <Grid item xs={12} sm={8}>

                                <p>{dats.node.writerprocessone}</p>
                                <p>{dats.node.writerprocesstwo}</p>
                                <p>{dats.node.writerprocessthree}</p>
                                <p>{dats.node.writerprocessfour}</p>
                            
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.writersixpageprice){
                        return <Grid container direction='row' item xs={12} sm={4} spacing={0}>
                            
                            <Grid item xs={4} sm={12}>
                                <p className="bold">6 Pages</p>
                                <p>{dats.node.writersixpageprice}</p>
                            </Grid>

                            <Grid item xs={4} sm={12}>
                                <p className="bold">12 Pages</p>
                                <p>{dats.node.writertwelvepageprice}</p>
                            </Grid>

                            <Grid item xs={4} sm={12}>
                                <p className="bold">More</p>
                                <p>Contact to discuss.</p>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
            </Grid> 

        </StyledUserWritersProcessGrid>
        
      
        

    return res;
}
export default UserWritersProcess 