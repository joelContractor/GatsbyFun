import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function FrontPageFooterTitle({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"70px", mt:"10px", pb:"0px", borderTop:"1px dashed grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>Contact</h2>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageFooterTitle