import React from "react"
import { StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserAvailableProject({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.availableprojectbriefdescription){
                        return <Grid item xs={8}>
                                
                                <h2>Available Script </h2>
                                <p>{dats.node.availableprojectbriefdescription}</p>
                                <Grid item xs={12} container direction="row" spacing={0}>
                                    
                                    <Grid item xs={2} sm={1}><p style={{fontWeight:"bold"}}>Paid:</p></Grid>
                                    <Grid item xs={10} sm={3}><p>{dats.node.availablescriptcost}</p></Grid>
                                    <Grid item xs={2} sm={1}><p style={{fontWeight:"bold"}}>Type:</p></Grid>
                                    <Grid item xs={10} sm={3}><p>{dats.node.availablescripttype}</p></Grid>
                                    
                                </Grid>
                            
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.availableprojectbriefdescription){
                        return <Grid item xs={4}>
                                
                            <StaticImage
                                src="../images/diverseGenderIcon.png"
                                width={200}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="A Gatsby astronaut"
                            />
                            
                        </Grid>
                }
                })()}
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserAvailableProject 