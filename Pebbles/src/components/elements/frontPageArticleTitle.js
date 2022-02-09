import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function FrontPageArticleTitle({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"50px", pb:"0px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>{dats}</h2>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleTitle