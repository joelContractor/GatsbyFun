import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function FrontPageArticleParagraph({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"5px", mt:"10px", pb:"0px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <Grid item xs={8}>
                                
                                <p>{dats}</p>
                  
                        </Grid>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleParagraph 