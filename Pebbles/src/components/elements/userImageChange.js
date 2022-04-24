import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledUserImageChangesGrid = styled(Grid, {
    name: "StyledUserImageChangesGrid",
    slot: "Wrapper",
  })({
    paddingTop:"50px", 
    marginTop:"10px", 
    borderTop:"1px dotted grey",
    ".grey": { color:"rgba(0,0,0,0.6)", fontSize:"0.8rem", marginTop:"-0.3rem" },
    ".optionHeading": { fontSize:"0.8rem" }

  });





function UserImageChanges({ dats }) {
    const matches = useMediaQuery('(max-width:600px)');
    var space = 6;
    if(matches){space = 1}
    const res =

        <StyledUserImageChangesGrid state={{dats}} container>
           
                
            {(() => {
                if(dats.node.canwearcontacts){

                    return <Grid container direction="row" spacing={space}> 
                            {(() => {
                                if(dats.node.canCutHair){
                                    return <Grid item xs={12} md={4} container direction="row">
                                            <Grid item xs={6} md={12}>
                                                <h2 className="optionHeading">Can Cut Hair?</h2>
                                            </Grid>
                                            <Grid item xs={6} md={12}>
                                                <p className="grey">{dats.node.canCutHair}</p>
                                            </Grid>
                                           
                                        
                                    </Grid>
                                }
                            })()}

                            {(() => {
                                if(dats.node.canColourHair){
                                    return <Grid item xs={12} md={4} container direction="row">
                                        <Grid item xs={6} md={12}>
                                            <h2 className="optionHeading">Can Colour Hair?</h2>
                                        </Grid>
                                        <Grid item xs={6} md={12}>
                                            <p className="grey">{dats.node.canColourHair}</p>
                                        </Grid>
                                    
                                    
                                </Grid>
                                    
                            
                                }
                            })()}
                            
                            {(() => {
                                if(dats.node.canwearcontacts){
                                    return <Grid item xs={12} md={4} container direction="row">
                                    <Grid item xs={6} md={12}>
                                        <h2 className="optionHeading">Can Wear Contacts?</h2>
                                    </Grid>
                                    <Grid item xs={6} md={12}>
                                        <p className="grey">{dats.node.canwearcontacts}</p>
                                    </Grid>
                                
                                
                            </Grid>

                                }
                            })()}

                        </Grid>
                    

                }
            })()}
            
        </StyledUserImageChangesGrid>
       
        
      
        

    return res;
}
export default UserImageChanges 