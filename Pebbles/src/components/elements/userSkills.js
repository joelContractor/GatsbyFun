import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserSkills({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}> 
                {(() => {
                    if(dats.node.skill){

                        return <Grid container direction="row" spacing={6}> 
                                {(() => {
                                    if(dats.node.skillimage){
                                        return <Grid item xs={6} sm={8}>
                                                
                                                <GatsbyImage image={getImage(dats.node.skillimage.gatsbyImageData)} alt={"testimage"}/>
                                            
                                        </Grid>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.skill){
                                        return <Grid item xs={6} sm={4}>
                                            
                                            <h2>Skills </h2>
                                            <p>{dats.node.skill}</p>

                                            {(() => {
                                                if(dats.node.skill2){
                                                    return <>
                                                        <p>{dats.node.skill2}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill3){
                                                    return <>
                                                        <p>{dats.node.skill3}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill4){
                                                    return <>
                                                        <p>{dats.node.skill4}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill5){
                                                    return <>
                                                        <p>{dats.node.skill5}</p>
                                                    </>
                                                }
                                            })()}

                                            {(() => {
                                                if(dats.node.skill6){
                                                    return <>
                                                        <p>{dats.node.skill6}</p>
                                                    </>
                                                }
                                            })()}
                                        
                                        </Grid>
                                    }
                                })()}
                            </Grid>                                
                    }
                })()}
            
        </Grid>
        
      
        

    return res;
}
export default UserSkills 