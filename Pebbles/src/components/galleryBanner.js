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
import UserContactLinks from "./elements/userContactLinks";
import SiteGallerySlider from "../components/siteGallerySlider";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledGalleryBannerGrid = styled(Grid, {
    name: "StyledGalleryBannerGrid",
    slot: "Wrapper",
  })({
    fontSize:`0.8rem`,
    fontFamily:`Arial`, 
    marginBottom:"50px",
    background:"white",
    borderRadius:"20px",
    ".bannerData": { paddingRight:"20px", paddingLeft:"20px", marginTop:`0px`, zIndex:`1`, overflow:`hidden`, position: `relative`, transition: `opacity 1.9s, top 0s, height 0s`},
    ".swiper-button-prev": { color:"white", opacity:"0.2" },
    ".swiper-button-next": { color:"white", opacity:"0.2" },
    ".swiper-pagination-bullet": { padding:"6px" }

  });



function GalleryBanner({ data }) {

    const matchesOver = useMediaQuery('(min-width:600px)');
    const matchesUnder = useMediaQuery('(max-width:600px)');
    const [show, setShow] = useState('none')

    function showInfo(){
        if(show ==='none'){
            setShow('block');
        }else{setShow('none');}
    }

    function presentRace(){
        alert('One of many examples of \'Racially Diverse\' talent in the Film, Theatre and TV industries.');
    }

    function presentAbility(){
        alert('Another artist proving that \'Ability Diversity\' is beneficial to Film, TV and Theatre.');
    }

    function presentAge(){
        alert('The experience required to make thoughtful, relatable art is gained over time. This artist proves that \'Age Diversity\' aids all aspects of Film, TV and Theatre..');
    }

    function presentOrientation(){
        alert('An example from the plethora of artsists of \'Diverse Sexual Orientation\' in Film, TV and Theatre.');
    }

    function presentGender(){
        alert('One of many gendre diverse artists. Increase awareness and understanding of \'Gender Diversity\' in Film, TV and Theatre.');
    }

    function presentCulture(){
        alert('A shining example from the plethora of \'Culturally Diverse\' talent in Film, TV and Theatre.');
    }

    function presentReligion(){
        alert('An example from the plethora of \'Religiously Diverse\' talent in Film, TV and Theatre.');
    }
      

    const res =

        <StyledGalleryBannerGrid container >
        
            <Grid item xs={12}>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ borderRadius:"20px", fontFamily: "Arial" }}
                >

                    {data.map((dats) => (
                        <SwiperSlide key={dats.node.title} >

                            <UserBannerImage  dats={ dats } show={show} showInfo={showInfo} presentReligion={presentReligion} presentRace={presentRace} presentAbility={presentAbility} presentAge={presentAge} presentOrientation={presentOrientation} presentGender={presentGender} presentCulture={presentCulture}/>

                            <Grid className="bannerData" item xs={12} style={ { fontSize:"0.8rem", fontFamily: "Arial", height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , top:show === 'none'? `-4900px`: `0px` }}>                                                             

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
                                    if(dats.node.videoreelsrc){
                                        return <>
                                            <UserVideoPortfolio dats={ dats } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.userhistorytitle1){
                                        return <>
                                            { matchesOver && <UserWorkHistory dats={ dats } /> }              
                                            { matchesUnder && <SiteGallerySlider dats={ dats } /> }
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
                                    if(dats.node.useremail || dats.node.usertel){
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
        </StyledGalleryBannerGrid>

    return res;
}
export default GalleryBanner 