import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function FrontPageArticleAboutAuthorParagraph({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"30px", mt:"20px", mb:"30px", pb:"10px", borderTop:"1px dashed grey", borderBottom:"1px dashed grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats){
                        return <Grid item xs={12}>
                                
                                <p><span style={{fontWeight:"bold"}}>The Author: </span> {dats}</p>
                  
                        </Grid>
                    }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default FrontPageArticleAboutAuthorParagraph 