import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserPhysicalAttributes({ dats }) {

    const res =

        <Grid state={{dats}} container  sx={{pt:"100px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
            <Grid container direction="row"  spacing={6}>  
                {(() => {
                    if(dats.node.hairColour){
                        return <Grid item xs={6} sm={4}>
                                
                                <h2>Physical Attributes</h2>
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
                                
                                <GatsbyImage image={getImage(dats.node.physicalattributeimage.gatsbyImageData)} alt={"physical attribute image"}/>
                            
                        </Grid>
                }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserPhysicalAttributes 