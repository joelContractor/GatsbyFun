import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserWritersProcess({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
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
                                <h2>6 Pages</h2>
                                <p>{dats.node.writersixpageprice}</p>
                            </Grid>

                            <Grid item xs={4} sm={12}>
                                <h2>12 Pages</h2>
                                <p>{dats.node.writertwelvepageprice}</p>
                            </Grid>

                            <Grid item xs={4} sm={12}>
                                <h2>More</h2>
                                <p>Contact to discuss.</p>
                            </Grid>
                        
                        </Grid>
                    }
                })()}
            </Grid> 

        </Grid>
        
      
        

    return res;
}
export default UserWritersProcess 