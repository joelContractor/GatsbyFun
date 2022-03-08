import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserGeneralDetailsGrid = styled(Grid, {
    name: "StyledUserGeneralDetailsGrid",
    slot: "Wrapper",
  })({
    paddingTop:"40px",
    ".grey": { color:"rgba(0,0,0,0.5)" }

  });





function UserGeneralDetails({ dats }) {
    let AgeLabel = 'Age'
    let Age = ''

    const res =

        <StyledUserGeneralDetailsGrid state={{dats}} container>
            <Grid container direction="row" spacing={6} >   
                {(() => {
                    if(dats.node.actoragerange || dats.node.agenonactor){

                        if(dats.node.actoragerange !== null && dats.node.actoragerange !== ''){
                            Age = `${dats.node.actoragerange}`
                            AgeLabel = 'Age Range'
                        }else{
                            AgeLabel = 'Age'
                            Age = `${dats.node.agenonactor}`
                        }

                        return <Grid item xs={6} sm={4} md={2}>                               
                                    <h2>{AgeLabel}</h2>
                                    <p className="grey">{Age}</p>                           
                            </Grid>

                    }
                })()}

                {(() => {
                    if(dats.node.gender){
                        return <Grid item xs={6} sm={4} md={2}>                       
                            <h2>Gender</h2>
                            <p className="grey">{dats.node.gender}</p>                    
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.location){
                        return <Grid item xs={6} sm={4} md={2}>                           
                            <h2>Location</h2>
                            <p className="grey">{dats.node.location}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.unionaffiliation){
                        return <Grid item xs={6} sm={4} md={2}>
                            <h2>Union</h2>
                            <p className="grey">{dats.node.unionaffiliation}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.driver){
                        return <Grid item xs={6} sm={4} md={2}>
                            <h2>Driver</h2>
                            <p className="grey">{dats.node.driver}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.passport){
                        return <Grid item xs={6} sm={4} md={2}>
                            <h2>Passport</h2>
                            <p className="grey">{dats.node.passport}</p>
                        </Grid>
                    }
                })()}
            </Grid>

        </StyledUserGeneralDetailsGrid>
        
      
        

    return res;
}
export default UserGeneralDetails 