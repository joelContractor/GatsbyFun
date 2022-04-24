import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
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
    ".userPhysicalAttributesImage": { willChange:"transform", borderRadius:"5px" },
    ".grey": { color:"rgba(0,0,0,0.6)", fontSize:"0.7rem" },
    ".titleColor": { color:"hsla(0, 0%, 0%, 0.8)", marginBottom:"0" }

  });





function UserPhysicalAttributes({ dats }) {

    const res =

        <StyledUserPhysicalAttributesGrid state={{dats}} container>
            <Grid container direction="row"  spacing={6}>  
                {(() => {
                    if(dats.node.hairColour){
                        return <><Grid item xs={12} className="">
                                <Grid item xs={12} sm={12}><h2 className="titleColor">Physical Attributes</h2></Grid>
                            </Grid>
                        <Grid item xs={12} sm={4}  className="grey">
                                
                                
                                <Grid item xs={6} sm={12}><p>Ethnicity: {dats.node.ethnicity}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Height: {dats.node.height}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Weight: {dats.node.weight}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Eye Colour: {dats.node.eyeColour}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Hair Colour: {dats.node.hairColour}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Hair Length: {dats.node.hairLength}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Tatoos: {dats.node.tatoos}</p></Grid>
                                <Grid item xs={6} sm={12}><p>Visible Piercings: {dats.node.visiblepiercings}</p></Grid>
                            
                        </Grid></>
                    }
                })()}

                {(() => {
                    if(dats.node.physicalattributeimage){
                        return <Grid item xs={12} sm={8}>
                                
                                <GatsbyImage className="userPhysicalAttributesImage" image={getImage(dats.node.physicalattributeimage.gatsbyImageData)} alt={"physical attribute image"}/>
                            
                        </Grid>
                }
                })()}
            </Grid>
        </StyledUserPhysicalAttributesGrid>
        
      
        

    return res;
}
export default UserPhysicalAttributes 