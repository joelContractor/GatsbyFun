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
import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import { StaticImage } from "gatsby-plugin-image"

const StyledGalleryBannerGrid = styled(Grid, {
    name: "StyledGalleryBannerGrid",
    slot: "Wrapper",
  })({
    fontSize:`12px`,
    fontFamily:`Arial`, 
    marginBottom:"50px",
    ".bannerData": { marginTop:`0px`, zIndex:`1`, overflow:`hidden`, position: `relative`, transition: `opacity 1.9s, top 0s, height 0s`},
    ".diversityLogosBelow": { padding: `15px 10px`, display:`inline`, background:"red", borderRadius:"50px", marginLeft:"10px" },
    ".bannerButtonBelow": { fontSize:"16px", textTransform: `none`, backgroundColor:`rgba(0, 0, 05, 0.1)`, width:`100%`, borderRadius: `50px`, color: `black`, fontWeight: `normal`, border: `1px solid #d3d3d3`, height: `50px`, padding: `4px 20px 4px 20px`, fontFamily: 'georgia, serif'},
    ".bannerButton:hover": { color: "black", backgroundColor:`rgba(255, 255, 255, 0.8)`},
    ".bannerButtonHousingBelow": { padding:"10px" },
    ".diversityLogoPaddingBelow": { padding:"25px 20px 10px 0px"},
    ".diversityLogoAreaBelow": { textAlign: `left`, background: `rgba(0, 0, 0, 0.1)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`fit-content`, marginLeft: `10px` },

  });



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
                style={{ borderRadius:"20px", marginTop:"50px",  border:"0px solid black" }}
                >

                    {data.map((dats) => (
                        <SwiperSlide>

                            <UserBannerImage  dats={ dats } show={show} showInfo={showInfo} presentReligion={presentReligion} presentRace={presentRace} presentAbility={presentAbility} presentAge={presentAge} presentOrientation={presentOrientation} presentGender={presentGender} presentCulture={presentCulture}/>

                            <Grid className="bannerData" item xs={12} style={ { height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , top:show === 'none'? `-4900px`: `0px` }}>                                                             

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
                            <Grid xs={12} style={{ background:"rgba(0,0,0,0.1)", width:"100%", height:"3rem" }}></Grid>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledGalleryBannerGrid>

    return res;
}
export default GalleryBanner 