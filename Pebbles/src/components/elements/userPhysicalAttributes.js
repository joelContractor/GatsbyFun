import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserPhysicalAttributesGrid = styled(Grid, {
    name: "StyledUserPhysicalAttributesGrid",
    slot: "Wrapper",
  })({
    paddingTop:"50px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    ".userPhysicalAttributesImage": { willChange:"transform", borderRadius:"5px" },
    ".grey": { color:"rgba(0,0,0,0.6)", fontSize:"0.7rem" },
    ".titleColor": { color:"hsla(0, 0%, 0%, 0.8)", marginBottom:"0" },
    ".subHeadedVal": { fontSize:"0.6rem", color:"hsla(0, 0%, 0%, 0.9)" }

  });





function UserPhysicalAttributes({ dats }) {

    const res =

        <StyledUserPhysicalAttributesGrid state={{dats}} >
            <Grid container direction="row"  spacing={4}>  
                {(() => {
                    if(dats.node.hairColour){
                        return <><Grid item xs={12} className="" >
                                <Grid item xs={12} sm={12}><h2 className="titleColor">Physical Attributes</h2></Grid>
                            </Grid>
                        <Grid item xs={12} sm={4} container className="grey">
                                
                                
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Ethnicity:</span> {dats.node.ethnicity}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Height:</span> {dats.node.height}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Weight:</span> {dats.node.weight}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Eye Colour:</span> {dats.node.eyeColour}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Tatoos:</span> {dats.node.tatoos}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Visible Piercings:</span> {dats.node.visiblepiercings}</p></Grid>
                                <Grid item xs={6} sm={12}><p><span className="subHeadedVal">Hair Length:</span> {dats.node.hairLength}</p></Grid>
                                <Grid item xs={12} sm={12}><p><span className="subHeadedVal">Hair Colour:</span> {dats.node.hairColour}</p></Grid>
                            
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