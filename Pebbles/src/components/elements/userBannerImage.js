import React from "react"
import { getImage, StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import { styled } from "@mui/system";

const StyledUserBannerImageGrid = styled(Grid, {
    name: "StyledUserBannerImageGrid",
    slot: "Wrapper",
  })({
    ".userBannerImage": { padding: `60vh 10px 10px 10px` },
    ".diversityLogoArea": { position: `relative`, bottom: `13px`, textAlign: `left`, marginTop:`0px`, background: `rgba(255, 255, 255, 0.8)`, borderRadius: `50px`, border: `0px solid #d3d3d3`, width:`auto`, marginLeft: `10px` },
    ".diversityLogos": { padding: `0px 0px`, display: "inline-flex", flexDirection:`row`, justifyContent: "space-around", width: "fit-content" },
    ".bannerButton": { fontSize:"14px", textTransform: `none`, backgroundColor:`rgba(255, 255, 255, 0.8)`, width:`100%`, borderRadius: `8px`, color: `hsla(0, 0%, 0%, 0.7)`, fontWeight: `normal`, height: `50px`, padding: `4px 20px 4px 20px`, fontFamily: 'Georgia', position: `relative`, bottom: `22px`},
    ".bannerButton:hover": { color: "black", backgroundColor:`rgba(255, 255, 255, 0.9)`},
    ".bannerButtonHousing": { padding:"10px" },
    ".diversityLogoPadding": { padding:"0px 0px 30px 0px" }
  });



function UserBannerImage({ dats, show, showInfo, presentRace, presentAbility, presentAge, presentOrientation, presentGender, presentCulture, presentReligion}) {


    
    
    const res =

        <StyledUserBannerImageGrid state={{dats}} container>
            <Grid item xs={12}>
                <BackgroundImage
                    Tag="section"
                    width="100%"
                    
                    // Spread bgImage into BackgroundImage:
                    {...convertToBgImage(getImage(dats.node.spectacleurl.gatsbyImageData))}
                    preserveStackingContext
                >   
                
                   <Grid container className="userBannerImage">
                         <Grid item xs={12} sm={4} className="diversityLogoPadding">
                    
                            <div className="">
                                
                                {(() => {

                                    if(dats.node.racial){
                                        return <div role="button" tabIndex={0} className="diversityLogoArea diversityLogos" onClick={presentRace} onKeyDown={presentRace}>
                                            
                                            <StaticImage
                                            src="../images/race.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Racial Diversity Icon"
                                            style={{ marginBottom: `0px` }} 
                                            />

                                        </div>
                                        
                                    }

                                })()}

                                {(() => {

                                    if(dats.node.religious){
                                        return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-1} onClick={presentReligion} onKeyDown={presentReligion}>
                                            
                                            <StaticImage
                                            src="../images/religion.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Religious Diversity Icon"
                                            style={{ marginBottom: `0px` }} 
                                            />

                                        </div>
                                        
                                    }

                                })()}

                                {(() => {

                                if(dats.node.cultural){
                                    return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-2} onClick={presentCulture} onKeyDown={presentCulture}>
                                        
                                        <StaticImage
                                        src="../images/culture.png"
                                        width={50}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Cultural Diversity Icon"
                                        style={{ marginBottom: `0px` }} 
                                        />

                                    </div>
                                }

                                })()}

                                {(() => {

                                    if(dats.node.ability){
                                        return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-3} onClick={presentAbility} onKeyDown={presentAbility}>
                                            
                                            <StaticImage
                                            src="../images/ability.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt=" Diverse Ability Icon"
                                            style={{ marginBottom: `0px` }} 
                                            />

                                        </div>
                                    }

                                })()}

                                {(() => {

                                    if(dats.node.age){
                                        return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-4} onClick={presentAge} onKeyDown={presentAge}>
                                            
                                            <StaticImage
                                            src="../images/age.png"
                                            width={50}
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt=" Age Diversity Icon"
                                            style={{ marginBottom: `0px` }} 
                                            />

                                        </div>
                                    }

                                })()}

                                {(() => {

                                if(dats.node.orientation){
                                    return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-5} onClick={presentOrientation} onKeyDown={presentOrientation}>
                                        
                                        <StaticImage
                                        src="../images/orientation.png"
                                        width={50}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt=" Diversity Sexual Orientation Icon"
                                        style={{ marginBottom: `0px` }} 
                                        />

                                    </div>
                                }

                                })()}

                                {(() => {

                                if(dats.node.diverseGender){
                                    return <div className="diversityLogoArea diversityLogos" role="button" tabIndex={-6} onClick={presentGender} onKeyDown={presentGender}>
                                        
                                        <StaticImage
                                        src="../images/gender.png"
                                        width={50}
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt=" Diverse Gendre Icon"
                                        style={{ marginBottom: `0px` }} 
                                        />

                                    </div>
                                }

                                })()}

                            
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={8} className="bannerButtonHousing">

                            <Button className="bannerButton" onClick={showInfo}>
                                {show === 'none'? `More `: `Less `} {dats.node.title}
                            </Button>
                        </Grid>
                            </Grid>
                </BackgroundImage>
            </Grid>
        </StyledUserBannerImageGrid>
        
      
        

    return res;
}
export default UserBannerImage