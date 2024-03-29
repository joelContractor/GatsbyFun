import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";


const StyledUserWorkHistoryGrid = styled(Grid, {
    name: "StyledUserWorkHistoryGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"100px",
    borderTop:"1px dotted grey",
    ".normal": { fontWeight:"normal", fontSize:"0.6rem" },
    ".bold": { fontWeight:"bold" },
    ".grey": { color:"rgba(0,0,0,0.6)", fontSize:"0.7rem" },
    h3: {fontSize:"0.9rem", fontFamily: 'Arial'}

  });





function UserWorkHistory({ dats }) {
    

    const res =

        <StyledUserWorkHistoryGrid state={{dats}} container>
             <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.userhistorytitle1){
                        return <>
                            <Grid item xs={12}>
                                <h2>History</h2>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                            
                                <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle1}</h3>
                                <p className="normal grey">{dats.node.userhistorydescription1}</p>
                                <Grid item xs={12} container direction="row">
                                    <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear1}</span></p></Grid>
                                    <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype1}</span></p></Grid>    
                                </Grid>
                            
                            </Grid>
                        </>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle2){
                        return <Grid item  xs={12} sm={6} md={4}>
                            
                            <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle2}</h3>
                            <p className="normal grey">{dats.node.userhistorydescription2}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear2}</span></p></Grid>  
                                <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype2}</span></p></Grid> 
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle3){
                        return <Grid item xs={12} sm={6} md={4}>
                            
                            <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle3}</h3>
                            <p className="normal grey">{dats.node.userhistorydescription3}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear3}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype3}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.userhistorytitle4){
                        return <Grid item xs={12} sm={6} md={4}>
                            
                            <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle4}</h3>
                            <p className="normal grey">{dats.node.userhistorydescription4}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear4}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype4}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle5){
                        return <Grid item xs={12} sm={6} md={4}>
                            
                            <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle5}</h3>
                            <p className="normal grey">{dats.node.userhistorydescription5}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear5}</span></p></Grid>   
                                <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype5}</span></p></Grid>    
                            </Grid>
                        
                        </Grid>
                    }
                })()}
                
                {(() => {
                    if(dats.node.userhistorytitle6){
                        return <Grid item xs={12} sm={6} md={4}>
                            
                            <h3 style={{fontWeight:"normal"}}>{dats.node.userhistorytitle6}</h3>
                            <p className="normal grey">{dats.node.userhistorydescription6}</p>
                            <Grid item xs={12} container direction="row">
                                <Grid item xs={3} sm={6}><p className="normal">Year: <span className="normal">{dats.node.userhistoryyear6}</span></p></Grid>
                                <Grid item xs={9} sm={6}><p className="normal">Type: <span className="normal">{dats.node.userhistorytype6}</span></p></Grid>   
                            </Grid>
                        
                        </Grid>
                    }
                })()}
            </Grid>
        </StyledUserWorkHistoryGrid>
        

    return res;
}
export default UserWorkHistory 