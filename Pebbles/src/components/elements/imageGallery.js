import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserImageGallery({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"50px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"gay/lesbian"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"gay/lesbian"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"ability challenged"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"fluid gender"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"female"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"black"}/>
                        
                        </Grid>
                    }
                })()}
            </Grid>
            
        </Grid>
        
      
        

    return res;
}
export default UserImageGallery 