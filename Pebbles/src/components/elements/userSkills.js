import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledUserSkillsGrid = styled(Grid, {
    name: "StyledUserSkillsGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"50px",
    borderTop:"1px dotted grey",
    ".userSkillsImage": { borderRadius:"5px", willChange:"transform" },
    ".grey": { color:"rgba(0,0,0,0.5)" }

  });





function UserSkills({ dats }) {
    const matches = useMediaQuery('(max-width:600px)');
    var space = 6;
    if(matches){space = 2}

    const res =

        <StyledUserSkillsGrid state={{dats}} container> 
                {(() => {
                    if(dats.node.skill){

                        return <Grid container direction="row" spacing={space}> 
                                {(() => {
                                    if(dats.node.skillimage){
                                        return <Grid item xs={6} sm={8}>
                                                
                                                <GatsbyImage className="userSkillsImage" image={getImage(dats.node.skillimage.gatsbyImageData)} alt={"testimage"}/>
                                            
                                        </Grid>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.skill){
                                        return <Grid item xs={6} sm={4}>
                                            
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