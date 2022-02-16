import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserImageChangesGrid = styled(Grid, {
    name: "StyledUserImageChangesGrid",
    slot: "Wrapper",
  })({
    paddingTop:"50px", 
    marginTop:"10px", 
    borderTop:"1px dotted grey"

  });





function UserImageChanges({ dats }) {

    const res =

        <StyledUserImageChangesGrid state={{dats}} container>
           
                
            {(() => {
                if(dats.node.canwearcontacts){

                    return <Grid container direction="row" spacing={6}> 
                            {(() => {
                                if(dats.node.canCutHair){
                                    return <Grid item xs={4}>
                                            
                                            <h2>Can Cut Hair?</h2>
                                            <p>{dats.node.canCutHair}</p>
                                        
                                    </Grid>
                                }
                            })()}

                            {(() => {
                                if(dats.node.canColourHair){
                                    return <Grid item xs={4}>
                                            
                                            <h2>Can Colour Hair?</h2>
                                            <p>{dats.node.canColourHair}</p>
                                        
                                    </Grid>
                                }
                            })()}
                            
                            {(() => {
                                if(dats.node.canwearcontacts){
                                    return <Grid item xs={4}>
                                            
                                            <h2>Can Wear Contacts?</h2>
                                            <p>{dats.node.canwearcontacts}</p>
                                        
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