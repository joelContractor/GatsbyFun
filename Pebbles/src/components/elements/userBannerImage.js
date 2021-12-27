import React, { useState } from "react"
import { getImage, StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'




function UserBannerImage({ dats }) {


    const [show, setShow] = useState('none')

    function showInfo(){
        if(show ==='none'){
            setShow('block');
        }else{setShow('none');}
    }
    
    const res =

        <Grid state={{dats}} container xs={12} sx={{pt:"50px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
            <Grid item xs={12}>
                <BackgroundImage
                    Tag="section"
                    width="100%"
                    
                    // Spread bgImage into BackgroundImage:
                    {...convertToBgImage(getImage(dats.node.spectacleurl.gatsbyImageData))}
                    preserveStackingContext
                >   
                
                    <Grid container xs={12}>
                        <Grid item xs={8} >
                            <p style={ { color: `#151515`, fontSize: `2.0rem`, textAlign: `center`, padding: `50vh 10px 10px 10px` } }></p>
                            <p style={ { color: `#151515`, fontSize: `1.2rem`, textAlign: `center`, padding: `10px`} }></p>
                    
                            <div style={ { position: `relative`, bottom: `20px`, textAlign: `left`, marginTop:`10px`, padding: `10px`, background: `rgba(255, 255, 255, 0.5)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`max-content`, marginLeft: `10px`} }>
                                
                                {(() => {

                                    if(dats.node.racialdiversity && dats.node.racialdiversity === "yes"){
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

                                {(() => {

                                    switch (dats.node.title) {
                                        case "red":   return "#FF0000";
                                        case "Two Tone Glasses": return <div style={ { paddingRight: `0px`, display:`inline` } }>                                      
                                                            <StaticImage
                                                            src="../images/diverseGenderIcon.png"
                                                            width={25}
                                                            quality={95}
                                                            formats={["AUTO", "WEBP", "AVIF"]}
                                                            alt="A Gatsby astronaut"
                                                            style={{ marginBottom: `0px` }} 
                                                            />

                                                        </div>;
                                        case "Green Glasses":  return <div style={ { paddingRight: `0px`, display:`inline` } }>                                   
                                                            <StaticImage
                                                            src="../images/diverseGenderIcon.png"
                                                            width={25}
                                                            quality={95}
                                                            formats={["AUTO", "WEBP", "AVIF"]}
                                                            alt="A Gatsby astronaut"
                                                            style={{ marginBottom: `0px` }} 
                                                            />

                                                        </div>;
                                        default: return <div style={ { paddingRight: `0px`, display:`inline` } }>                                   
                                                            <StaticImage
                                                            src="../images/diverseGenderIcon.png"
                                                            width={25}
                                                            quality={95}
                                                            formats={["AUTO", "WEBP", "AVIF"]}
                                                            alt="A Gatsby astronaut"
                                                            style={{ marginBottom: `0px` }} 
                                                            />

                                                        </div>;
                                    }

                                })()}
                            
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                        <p style={ { fontSize: `2.0rem`, padding: `50vh 10px 10px 10px` } }></p>
                        <p style={ { fontSize: `1.2rem`, padding: `10px`} }></p>
                            <button style={ { float:`right`, position: `relative`, bottom: `20px`, borderRadius: `50px`, color: `black`, fontWeight: `italic`, border: `1px solid #d3d3d3`, height: `50px`, padding: `5px 20px 5px 20px`, background: `rgba(255, 255, 255, 0.5)`, marginRight: `10px` } } onClick={showInfo}>
                                {show === 'none'? `More`: `Less`} about  <span style={ { color: `black`, fontWeight: `bold` } }>{dats.node.title}</span>
                            </button>
                        </Grid> 
                    </Grid>
                </BackgroundImage>
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserBannerImage