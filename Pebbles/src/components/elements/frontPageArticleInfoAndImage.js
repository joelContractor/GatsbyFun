import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image"





function FrontPageArticleInfoAndImage({ dats, text }) {

    const res =

        <Grid state={{dats, text}} container sx={{pt:"20px", mt:"10px", pb:"40px"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <>
                            <Grid item xs={12} md={6} >
                                
                                <GatsbyImage style={{ borderRadius:"5px" }} image={getImage(dats)} alt={"article alt info taken from server"}/>
                  
                            </Grid>

                            <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center" }} >
                                
                                <p>{text}</p>
                  
                            </Grid>
                            
                        </>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleInfoAndImage