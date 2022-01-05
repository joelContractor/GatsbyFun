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
                        return <Grid item xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle1}</h2>
                            <p>{dats.node.userhistorydescription1}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear1}</span></p></Grid>
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype1}</span></p></Grid>    
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle2){
                        return <Grid item  xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle2}</h2>
                            <p>{dats.node.userhistorydescription2}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear2}</span></p></Grid>  
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype2}</span></p></Grid> 
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle3){
                        return <Grid item xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle3}</h2>
                            <p>{dats.node.userhistorydescription3}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear3}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype3}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.userhistorytitle4){
                        return <Grid item xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle4}</h2>
                            <p>{dats.node.userhistorydescription4}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear4}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype4}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle5){
                        return <Grid item xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle5}</h2>
                            <p>{dats.node.userhistorydescription5}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear5}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype5}</span></p></Grid>    
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle6){
                        return <Grid item xs={12} sm={6} lg={4}>
                            
                            <h2>{dats.node.userhistorytitle6}</h2>
                            <p>{dats.node.userhistorydescription6}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p style={{fontWeight:"bold"}}>Year: <span style={{fontWeight:"normal"}}>{dats.node.userhistoryyear6}</span></p></Grid>
                                <Grid item xs={9} sm={6}><p style={{fontWeight:"bold"}}>Type: <span style={{fontWeight:"normal"}}>{dats.node.userhistorytype6}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserWorkHistory 