import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserWorkHistory({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", pb:"50px", mt:"10px", borderTop:"1px dotted grey"}}>
             <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.userhistorytitle1){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle1}</h2>
                            <p>{dats.node.userhistorydescription1}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear1}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype1}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle2){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle2}</h2>
                            <p>{dats.node.userhistorydescription2}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear2}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype2}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle3){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle3}</h2>
                            <p>{dats.node.userhistorydescription3}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear3}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype3}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.userhistorytitle4){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle4}</h2>
                            <p>{dats.node.userhistorydescription4}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear4}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype4}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle5){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle5}</h2>
                            <p>{dats.node.userhistorydescription5}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear5}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype5}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle6){
                        return <Grid item xs={6} sm={4}>
                            
                            <h2>{dats.node.userhistorytitle6}</h2>
                            <p>{dats.node.userhistorydescription6}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Year:</p></Grid>
                                <Grid item xs={2}><p>{dats.node.userhistoryyear6}</p></Grid>
                                <Grid item xs={2}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                <Grid item xs={6}><p>{dats.node.userhistorytype6}</p></Grid>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserWorkHistory 