import React from "react"
import { getImage, StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'




function UserBannerImage({ dats, show, showInfo, presentRace, presentAbility, presentAge, presentOrientation, presentGender, presentCulture, presentReligion}) {


    
    
    const res =

        <Grid state={{dats}} container xs={12} sx={{}}>
            <Grid item xs={12}>
                <BackgroundImage
                    Tag="section"
                    width="100%"
                    
                    // Spread bgImage into BackgroundImage:
                    {...convertToBgImage(getImage(dats.node.spectacleurl.gatsbyImageData))}
                    preserveStackingContext
                >   
                
                    <Grid container xs={12} style={{ padding: `64vh 10px 10px 10px` }}>
                        <Grid item xs={4} sm={4} >
                    
                            <div style={ { position: `relative`, bottom: `20px`, textAlign: `left`, marginTop:`10px`, padding: `10px 5px 10px 5px`, background: `rgba(255, 255, 255, 0.7)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`fit-content`, marginLeft: `10px`} }>
                                
                                {(() => {

                                    if(dats.node.racial){
                                        return <div role="button" tabIndex={0} style={ { padding: `5px`, display:`inline` } } onClick={presentRace} onKeyDown={presentRace}>
                                            
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

                                    if(dats.node.religious){
                                        return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-1} onClick={presentReligion} onKeyDown={presentReligion}>
                                            
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

                                if(dats.node.cultural){
                                    return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-2} onClick={presentCulture} onKeyDown={presentCulture}>
                                        
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

                                    if(dats.node.ability){
                                        return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-3} onClick={presentAbility} onKeyDown={presentAbility}>
                                            
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

                                    if(dats.node.age){
                                        return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-4} onClick={presentAge} onKeyDown={presentAge}>
                                            
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

                                if(dats.node.orientation){
                                    return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-5} onClick={presentOrientation} onKeyDown={presentOrientation}>
                                        
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

                                if(dats.node.diverseGender){
                                    return <div style={ { padding: `5px`, display:`inline` } } role="button" tabIndex={-6} onClick={presentGender} onKeyDown={presentGender}>
                                        
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
                        <Grid item xs={12} sm={8} sx={{padding:`10px`}}>

                            <Button style={ { textShadow:"1px 1px #f1f1f1", fontSize:"16px", textTransform: `none`, backgroundColor:`rgba(255, 255, 255, 0.7)`, width:`100%`, position: `relative`, bottom: `22px`, borderRadius: `50px`, color: `black`, fontWeight: `normal`, border: `1px solid #d3d3d3`, height: `50px`, padding: `4px 20px 4px 20px`, fontFamily: 'georgia, serif' } } onClick={showInfo}>
                                {show === 'none'? `More `: `Less `} about {dats.node.title}
                            </Button>
                        </Grid> 
                    </Grid>
                </BackgroundImage>
            </Grid>
        </Grid>
        
      
        

    return res;
}
export default UserBannerImage