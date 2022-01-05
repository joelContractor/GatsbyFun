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
import UserBannerImage from "./elements/userBannerImage";
import UserVideoPortfolio from "./elements/userVideoPortfolio";






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

                            <UserBannerImage  dats={ dats } show={show} showInfo={showInfo} />

                            <Grid item xs={12} style={ { marginTop:`10px`, zIndex:`1`, overflow:`hidden`, height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , position: `relative`, top:show === 'none'? `-4900px`: `0px`, transition: `opacity 1.9s, top 0s, height 0s` }}>                                                             
                                    
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
                                    if(dats.node.videoreelsrc){
                                        return <>
                                            <UserVideoPortfolio dats={ dats } />
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

                            </Grid>  
                                
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </Grid>

    return res;
}
export default GalleryBanner 