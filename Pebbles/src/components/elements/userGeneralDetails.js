import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserGeneralDetails({ dats }) {
    let AgeLabel = 'Age'
    let Age = ''

    const res =

        <Grid state={{dats}} container  sx={{pt:"40px", mt:"10px"}}>
            <Grid container direction="row" spacing={6} >   
                {(() => {
                    if(dats.node.actoragerange || dats.node.agenonactor){

                        if(dats.node.actoragerange !== null && dats.node.actoragerange !== 'null'){
                            Age = `${dats.node.actoragerange}`
                            AgeLabel = 'Age Range'
                        }else{
                            AgeLabel = 'Age'
                            Age = `${dats.node.agenonactor}`
                        }

                        return <Grid item xs={4} sm={3} md={2}>                               
                                    <h2>{AgeLabel}</h2>
                                    <p>{Age}</p>                          
                            </Grid>

                    }
                })()}

                {(() => {
                    if(dats.node.gender){
                        return <Grid item xs={4} sm={3} md={2}>                       
                            <h2>Gender</h2>
                            <p>{dats.node.gender}</p>                    
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.location){
                        return <Grid item xs={4} sm={3} md={2}>                           
                            <h2>Location</h2>
                            <p>{dats.node.location}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.unionaffiliation){
                        return <Grid item xs={4} sm={3} md={2}>
                            <h2>Union</h2>
                            <p>{dats.node.unionaffiliation}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.driver){
                        return <Grid item xs={4} sm={3} md={2}>
                            <h2>Driver</h2>
                            <p>{dats.node.driver}</p>
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.passport){
                        return <Grid item xs={4} sm={3} md={2}>
                            <h2>Passport</h2>
                            <p>{dats.node.passport}</p>
                        </Grid>
                    }
                })()}
            </Grid>

        </Grid>
        
      
        

    return res;
}
export default UserGeneralDetails 