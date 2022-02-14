import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserImageGalleryGrid = styled(Grid, {
    name: "StyledUserImageGalleryGrid",
    slot: "Wrapper",
  })({
    paddingTop:"50px", 
    marginTop:"10px", 
    paddingBottom:"50px", 
    borderTop:"1px dotted grey"

  });





function UserImageGallery({ dats }) {

    const res =

        <StyledUserImageGalleryGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"gay/lesbian"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"gay/lesbian"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"ability challenged"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"fluid gender"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"female"}/>
                        
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.spectacleurl){
                        return <Grid item xs={6} sm={4} md={2}>
                            
                            <GatsbyImage image={getImage(dats.node.spectacleurl.gatsbyImageData)} alt={"black"}/>
                        
                        </Grid>
                    }
                })()}
            </Grid>
            
        </StyledUserImageGalleryGrid>
        
      
        

    return res;
}
export default UserImageGallery 