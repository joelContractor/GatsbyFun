import React, { useState } from "react"
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
import UserBannerImage from "./elements/userBannerImage";
import UserVideoPortfolio from "./elements/userVideoPortfolio";
import UserContact from "./elements/userContact";
import UserContactLinks from "./elements/userContactLinks";
import FrontPageArticleTitle from "./elements/frontPageArticleTitle";
import FrontPageFooterTitle from "./elements/frontPageFooterTitle";




function GalleryBanner({ data }) {

    const [show, setShow] = useState('none')

    function showInfo(){
        if(show ==='none'){
            setShow('block');
        }else{setShow('none');}
    }

    function presentRace(){
        alert('this actor/director/writer Race');
    }

    function presentAbility(){
        alert('this actor/director/writer Ability');
    }

    function presentAge(){
        alert('this actor/director/writer Age');
    }

    function presentOrientation(){
        alert('this actor/director/writer Orientation');
    }

    function presentGender(){
        alert('this actor/director/writer Gender');
    }

    function presentCulture(){
        alert('this  actor/director/writer Culture');
    }

    function presentReligion(){
        alert('this actor/director/writer Religion');
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

                            <UserBannerImage  dats={ dats } show={show} showInfo={showInfo} presentReligion={presentReligion} presentRace={presentRace} presentAbility={presentAbility} presentAge={presentAge} presentOrientation={presentOrientation} presentGender={presentGender} presentCulture={presentCulture}/>

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

                                {(() => {
                                    if(dats.node.useremail){
                                        return <>
                                            <UserContactLinks dats={dats} />
                                        </>
                                    }
                                })()}
                                
                                {/*<UserImageGallery dats={ dats } />*/}

                            </Grid>  
                                
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </Grid>

    return res;
}
export default GalleryBanner 