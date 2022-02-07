import React from "react"
import { StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserDiversityLogos({ dats }) {

    const res =
 
        <Grid item xs={8} >
   
    
            <div style={ { position: `relative`, bottom: `20px`, textAlign: `left`, marginTop:`10px`, padding: `10px`, background: `rgba(255, 255, 255, 0.5)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`max-content`, marginLeft: `10px`} }>
                
                {(() => {

                    if(dats.node.racial === true){
                        return <div style={ { paddingRight: `5px`, display:`inline` } }>
                            
                            <StaticImage
                            src="../images/GenderDIcon.png"
                            width={25}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                            style={{ marginBottom: `0px` }} 
                            />

                        </div>                       
                    }

                })()}

                {(() => {

                    if(dats.node.religiousdiversity && dats.node.religiousdiversity === "yes"){
                        return <div style={ { paddingRight: `5px`, display:`inline` } }>
                            
                            <StaticImage
                            src="../images/diverseRelIcon.png"
                            width={25}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                            style={{ marginBottom: `0px` }} 
                            />
                        </div>
                        
                    }

                })()}

                {(() => {

                if(dats.node.culturaldiversity && dats.node.culturaldiversity === "yes"){
                    return <div style={ { paddingRight: `5px`, display:`inline` } }>
                        
                        <StaticImage
                        src="../images/diverseRaceIcon.png"
                        width={25}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby icon"
                        style={{ marginBottom: `0px` }} 
                        />
                    </div>
                }

                })()}

                {(() => {

                    if(dats.node.disability && dats.node.disability === "yes"){
                        return <div style={ { paddingRight: `5px`, display:`inline` } }>
                            
                            <StaticImage
                            src="../images/gatsby-icon.png"
                            width={25}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby icon"
                            style={{ marginBottom: `0px` }} 
                            />
                        </div>
                    }

                })()}

                {(() => {

                    if(dats.node.agediversity && dats.node.agediversity === "yes"){
                        return <div style={ { paddingRight: `5px`, display:`inline` } }>
                            
                            <StaticImage
                            src="../images/diverseAgeIcon.png"
                            width={25}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                            style={{ marginBottom: `0px` }} 
                            />
                        </div>
                    }

                })()}

                {(() => {

                if(dats.node.sexualorientation && dats.node.sexualorientation === "yes"){
                    return <div style={ { paddingRight: `5px`, display:`inline` } }>
                        
                        <StaticImage
                        src="../images/gatsby-icon.png"
                        width={25}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby icon"
                        style={{ marginBottom: `0px` }} 
                        />
                    </div>
                }

                })()}

                {(() => {

                if(dats.node.sexGenderdiversity && dats.node.sexGenderdiversity === "yes"){
                    return <div style={ { paddingRight: `5px`, display:`inline` } }>
                        
                        <StaticImage
                        src="../images/diverseGenderIcon.png"
                        width={25}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `0px` }} 
                        />
                    </div>
                }

                })()}

                
            
            </div>
        </Grid>
     
        
      
        

    return res;
}
export default UserDiversityLogos