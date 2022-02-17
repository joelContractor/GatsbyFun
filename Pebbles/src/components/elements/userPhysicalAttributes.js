import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserPhysicalAttributesGrid = styled(Grid, {
    name: "StyledUserPhysicalAttributesGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    ".userPhysicalAttributesImage": { borderRadius:"5px" },
    ".grey": { color:"rgba(0,0,0,0.5)" },
    ".titleColor": { color:"hsla(0, 0%, 0%, 0.8)" }

  });





function UserPhysicalAttributes({ dats }) {

    const res =

        <StyledUserPhysicalAttributesGrid state={{dats}} container>
            <Grid container direction="row"  spacing={6}>  
                {(() => {
                    if(dats.node.hairColour){
                        return <Grid item xs={6} sm={4} className="grey">
                                
                                <h2 className="titleColor">Physical Attributes</h2>
                                <p>Ethnicity: {dats.node.ethnicity}</p>
                                <p>Height: {dats.node.height}</p>
                                <p>Weight: {dats.node.weight}</p>
                                <p>Eye Colour: {dats.node.eyeColour}</p>
                                <p>Hair Colour: {dats.node.hairColour}</p>
                                <p>Hair Length: {dats.node.hairLength}</p>
                                <p>Tatoos: {dats.node.tatoos}</p>
                                <p>Visible Piercings: {dats.node.visiblepiercings}</p>
                            
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.physicalattributeimage){
                        return <Grid item xs={6} sm={8}>
                                
                                <GatsbyImage className="userPhysicalAttributesImage" image={getImage(dats.node.physicalattributeimage.gatsbyImageData)} alt={"physical attribute image"}/>
                            
                        </Grid>
                }
                })()}
            </Grid>
        </StyledUserPhysicalAttributesGrid>
        
      
        

    return res;
}
export default UserPhysicalAttributes 