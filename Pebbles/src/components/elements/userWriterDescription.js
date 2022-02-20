import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserWriterDescriptionGrid = styled(Grid, {
    name: "StyledUserWriterDescriptionGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    paddingRight:"20px", 
    paddingLeft:"20px",
    ".userWriterDescriptionImage": {willChange:"transform", borderRadius:"5px" },
    ".grey": { color:"rgba(0,0,0,0.5)" }

  });





function UserWriterDescription({ dats }) {

    const res =

        <StyledUserWriterDescriptionGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                    {(() => {
                        if(dats.node.writerdescription){
                            return <>
                                <Grid item xs={12}>
                                    
                                    <h2>{dats.node.title}</h2>
                                
                                </Grid>
                                <Grid item xs={12} sm={8} className="grey">

                                    <p>{dats.node.writerdescription}</p>
                                    <p>{dats.node.writerdescriptionCopy1}</p>
                                    <p>{dats.node.writerdescriptionCopy2}</p>
                                    <p>{dats.node.writerdescriptionCopy3}</p>
                                
                                </Grid>
                            </>
                        }
                    })()}
                    
                    {(() => {
                            if(dats.node.writerimage){
                                return <Grid item xs={12} sm={4}>
                                        
                                    <GatsbyImage className="userWriterDescriptionImage" image={getImage(dats.node.writerimage.gatsbyImageData)} alt={"testimage"}/>
                                    
                                </Grid>
                        }
                    })()}
            </Grid> 
        </StyledUserWriterDescriptionGrid>
        
      
        

    return res;
}
export default UserWriterDescription 