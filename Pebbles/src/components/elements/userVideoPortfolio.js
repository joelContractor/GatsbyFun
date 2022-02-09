import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserVideoPortfolio({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"100px", borderTop:"1px dotted grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.videoreelsrc){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>My Reel</h2>
                                <p>{dats.node.videoreeldescription}</p>
                            
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.videoreelsrc){
                        return <Grid xs={12} style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} >
                            <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', paddingLeft: '2.7rem' }} src={dats.node.videoreelsrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
                            </iframe>      
                        </Grid>
                    }
                })()}
            </Grid> 

        </Grid>
        
      
        

    return res;
}
export default UserVideoPortfolio