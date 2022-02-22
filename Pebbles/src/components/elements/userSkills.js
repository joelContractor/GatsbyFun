import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserSkillsGrid = styled(Grid, {
    name: "StyledUserSkillsGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    paddingRight:"20px", 
    paddingLeft:"20px",
    ".userSkillsImage": { borderRadius:"5px", willChange:"transform" },
    ".grey": { color:"rgba(0,0,0,0.5)" }

  });





function UserSkills({ dats }) {

    const res =

        <StyledUserSkillsGrid state={{dats}} container> 
                {(() => {
                    if(dats.node.skill){

                        return <Grid container direction="row" spacing={6}> 
                                {(() => {
                                    if(dats.node.skillimage){
                                        return <Grid item xs={8} sm={8}>
                                                
                                                <GatsbyImage className="userSkillsImage" image={getImage(dats.node.skillimage.gatsbyImageData)} alt={"testimage"}/>
                                            
                                        </Grid>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.skill){
                                        return <Grid item xs={4} sm={4}>
                                            
                                            <h2>Skills </h2>
                                            <p className="grey">{dats.node.skill}</p>

                                            {(() => {
                                                if(dats.node.skill2){
                                                    return <>
                                                        <p className="grey">{dats.node.skill2}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill3){
                                                    return <>
                                                        <p className="grey">{dats.node.skill3}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill4){
                                                    return <>
                                                        <p className="grey">{dats.node.skill4}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill5){
                                                    return <>
                                                        <p className="grey">{dats.node.skill5}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill6){
                                                    return <>
                                                        <p className="grey">{dats.node.skill6}</p>
                                                    </>
                                                }
                                            })()}
                                        
                                        </Grid>
                                    }
                                })()}
                            </Grid>                                
                    }
                })()}
            
        </StyledUserSkillsGrid>
        
      
        

    return res;
}
export default UserSkills 