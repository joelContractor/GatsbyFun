import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image"





function FrontPageArticleImage({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"20px", mt:"10px", pb:"40px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} sm={8}>
                                
                                <GatsbyImage style={{ borderRadius:"5px" }} image={getImage(dats)} alt={"article alt info taken from server"}/>
                  
                            </Grid>

                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleImage