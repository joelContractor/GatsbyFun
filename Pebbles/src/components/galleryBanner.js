import React, { useState } from "react"
import { getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import UserGeneralDetails from "../components/elements/userGeneralDetails"
import UserPhysicalAttributes from "../components/elements/userPhysicalAttributes"
import UserImageChanges from "../components/elements/userImageChange"
import UserSkills from "../components/elements/userSkills"
import UserWriterDescription from "../components/elements/userWriterDescription"
import UserAvailableProject from "../components/elements/userAvailableProject"
import UserWritersProcess from "../components/elements/userWritersProcess"
import UserWorkHistory from "../components/elements/userWorkHistory"
import UserImageGallery from "../components/elements/imageGallery"
import UserDiversityLogos from "../components/elements/userDiversityLogos"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import Button from '@mui/material/Button';
import UserBannerImage from "./elements/userBannerImage";





function GalleryBanner({ data }) {

    const [show, setShow] = useState('none')

    function showInfo(){
        if(show ==='none'){
            setShow('block');
        }else{setShow('none');}
    }

    const res =

        <Grid container style={ {fontSize:`14px`, fontFamily:`Arial`, marginBottom:"50px"} }>
        
            <Grid item xs={12}>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >

                    {data.map((dats) => (
                        <SwiperSlide>
                                    
                            <Grid item xs={12} state={dats}>
                                <BackgroundImage
                                    Tag="section"
                                    width="100%"                                                               
                                    {...convertToBgImage(getImage(dats.node.spectacleurl.gatsbyImageData))} // Spread bgImage into BackgroundImage:
                                    preserveStackingContext
                                >   
                                    <Grid item xs={12} sx={{pb:"50vh"}}></Grid>

                                    <Grid container xs={12}>
                                        <UserDiversityLogos  dats={ dats } />
                                        
                                        <Grid item xs={4}>                                       
                                            <Button style={ { fontSize:"12px",float:`right`, position: `relative`, bottom: `12px`, borderRadius: `50px`, color: `black`, fontWeight: `italic`, border: `1px solid #d3d3d3`, height: `50px`, padding: `5px 20px 5px 20px`, background: `rgba(255, 255, 255, 0.5)`, marginRight: `10px` } } onClick={showInfo}>
                                                {show === 'none'? `More`: `Less`} about {dats.node.title}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </BackgroundImage>
                            </Grid>
                            
                            
                            {/*<UserBannerImage  dats={ dats } />*/}
                            <Grid item xs={12} style={ { marginTop:`10px`, zIndex:`1`, overflow:`hidden`, width:`100%`, height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , position: `relative`, top:show === 'none'? `-4900px`: `0px`, transition: `opacity 1.9s, top 0s, height 0s` }}>                                                             
                                    
                                <UserGeneralDetails  dats={ dats } />
                                

                                {(() => {
                                    if(dats.node.hairColour){
                                        return <>
                                            <UserPhysicalAttributes dats={ dats } />
                                            <UserImageChanges dats={ dats } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.skill){
                                        return <>
                                            <UserSkills dats={ dats } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.writerdescription){
                                        return <>
                                            <UserWriterDescription dats={dats} />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.writerprocessone){
                                        return <>
                                            <UserWritersProcess dats={dats} />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.userhistorytitle1){
                                        return <>
                                            <UserWorkHistory dats={ dats } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.availableprojectbriefdescription){
                                        return <>
                                            <UserAvailableProject dats={dats} />
                                        </>
                                    }
                                })()}

                                
                                <UserImageGallery dats={ dats } />

                                <Grid xs={12} >
                                    <h4>My Reel</h4>
                                    <p>Description of contents of reel in short</p>
                                </Grid>
                                <Grid xs={12} >
                                    <iframe width="100%" height="350rem" src="https://www.youtube.com/embed/kiyi-C7NQrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                    </iframe>      
                                </Grid>
                                

                            </Grid>  
                                
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </Grid>

    return res;
}
export default GalleryBanner 