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
    fontSize:`12px`,
    fontFamily:`Arial`, 
    marginBottom:"50px",
    background:"white",
    borderRadius:"20px",
   
    ".bannerData": { paddingRight:"20px", paddingLeft:"20px", marginTop:`0px`, zIndex:`1`, overflow:`hidden`, position: `relative`, transition: `opacity 1.9s, top 0s, height 0s`},
    ".diversityLogosBelow": { padding: `15px 10px`, display:`inline`, background:"red", borderRadius:"50px", marginLeft:"10px" },
    ".bannerButtonBelow": { fontSize:"16px", textTransform: `none`, backgroundColor:`rgba(0, 0, 05, 0.1)`, width:`100%`, borderRadius: `50px`, color: `black`, fontWeight: `normal`, border: `1px solid #d3d3d3`, height: `50px`, padding: `4px 20px 4px 20px`, fontFamily: 'georgia, serif'},
    ".bannerButton:hover": { color: "black", backgroundColor:`rgba(255, 255, 255, 0.8)`},
    ".bannerButtonHousingBelow": { padding:"10px" },
    ".diversityLogoPaddingBelow": { padding:"25px 20px 10px 0px"},
    ".diversityLogoAreaBelow": { textAlign: `left`, background: `rgba(0, 0, 0, 0.1)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`fit-content`, marginLeft: `10px` },
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
        alert('Join the push toward \'Racial Diversity\' in Film by working with this person.');
    }

    function presentAbility(){
        alert('Help proove that \'Ability Diversity\' is beneficial to Film by working with this person.');
    }

    function presentAge(){
        alert('Decrease the requirement for \'Age Diversity\' in Film by working with this person.');
    }

    function presentOrientation(){
        alert('Help normalise \'Diversity of Sexual Orientation\' in Film by working with this person.');
    }

    function presentGender(){
        alert('Increase awareness of \'Gender Diversity\' in Film by working with this person.');
    }

    function presentCulture(){
        alert('Promote \'Cultural Diversity\' in Film by working with this person.');
    }

    function presentReligion(){
        alert('Increase \'Religious Diversity\' in Film by working with this person.');
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

                            <Grid className="bannerData" item xs={12} style={ { fontFamily: "Arial", height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , top:show === 'none'? `-4900px`: `0px` }}>                                                             

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