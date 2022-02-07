import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function FrontPageArticleWriterDetails({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"0px", mt:"0px", pb:"0px", fontSize:"11px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={6} sm={3}>
                                
                                <p>Written By: Joanne Callsburg</p>
                  
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                
                                <p>Date: 20th Jan 2022</p>
                  
                            </Grid>
                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleWriterDetails