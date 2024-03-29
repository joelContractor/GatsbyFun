import React, { useState } from "react"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import UserBannerImage from "./elements/userBannerImage";
import FrontPageArticleParagraph from "./elements/frontPageArticleParagraph";
import FrontPageArticleParagraphTeaser from "./elements/frontPageArticleParagraphTeaser";
import FrontPageArticleTitle from "./elements/frontPageArticleTitle";
import FrontPageArticleWriterDetails from "./elements/frontPageArticleWriterDetails";
import FrontPageArticleImage from "./elements/frontPageArticleImage";
import FrontPageArticleInfoAndImage from "./elements/frontPageArticleInfoAndImage";
import FrontPageArticleAboutAuthorParagraph from "./elements/frontPageArticleAboutAuthorParagraph";
import FrontPageArticleWriterDetailsSmall from "./elements/frontPageArticleWriterDetailsSmall";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledFrontPageBannerGrid = styled(Grid, {
    name: "StyledFrontPageBannerGrid",
    slot: "Wrapper",
  })({
    fontSize:`0.8rem`,
    fontFamily:`Arial`, 
    marginBottom:"50px",
    borderRadius:"20px",
    ".bannerData": { zIndex:`1`, overflow:`hidden`, position: `relative`, transition: `opacity 1.9s, top 0s, height 0s`, paddingLeft:"20px", paddingRight:"20px", background:"white"},
    ".swiper-button-prev": { color:"black", opacity:"0.1" },
    ".swiper-button-next": { color:"black", opacity:"0.1" },
    ".swiper-pagination-bullet": { padding:"6px" },
    ".spacer": { padding:"10px 0px 30px 0px"}

  });



function FrontPageBanner({ data }) {

    const matchesUnder = useMediaQuery('(max-width:600px)');
    const [show, setShow] = useState('none')

    function showInfo(){
        if(show ==='none'){
            setShow('block');
        }else{setShow('none');}
    }

    function presentRace(){
        alert('This article is about \'Race Diversity\', or has been written by a \'Racially Diverse\' author.');
    }

    function presentAbility(){
        alert('This article is about \'Ability Diversity\', or has been written by an author of \'Diverse Ability\'.');
    }

    function presentAge(){
        alert('This article is about \'Age Diversity\'., or has been written by an author of \'Diverse Age\'.');
    }

    function presentOrientation(){
        alert('This article is about \'Diversity within Sexual Orientation\', or has been written by an author of \'Diverse Sexual Orientation\'.');
    }

    function presentGender(){
        alert('This article is about \'Gender Diversity\', or has been written by an author of \'Diverse Gender\'.');
    }

    function presentCulture(){
        alert('This article is about \'Cultural Diversity\', or has been written by a \'Culturally Diverse\' author.');
    }

    function presentReligion(){
        alert('This article is about \'Religious Diversity\', or has been written by a \'Religiously Diverse\' author.');
    }
      

    const res =

        <StyledFrontPageBannerGrid container>
        
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

                            <Grid item xs={12} className="bannerData" style={ { height:show === 'none'? `0px`: `100%`, opacity:show === 'none'? `0`: `1` , top:show === 'none'? `-4900px`: `0px` }}>                            

                                {(() => {
                                    if(dats.node.articlep1){
                                        return <>
                                            <FrontPageArticleTitle dats={ dats.node.title } />
                                            { matchesUnder && <FrontPageArticleWriterDetailsSmall title={ dats.node.title } dats={ dats.node.articleauthor }/> }
                                            { !matchesUnder && <FrontPageArticleWriterDetails title={ dats.node.title } dats={ dats.node.articleauthor }/> }
                                            <FrontPageArticleAboutAuthorParagraph dats={ dats.node.articleabouttheauthor } />
                                            <FrontPageArticleParagraphTeaser dats={ dats.node.articlep1 } />   
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep2){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep2 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep3){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep3 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep4){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep4 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep5){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep5 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articleimg1 && dats.node.articlepwithimage){
                                        return <>
                                            <FrontPageArticleInfoAndImage dats={ dats.node.articleimg1.gatsbyImageData } text={ dats.node.articlepwithimage } />
                                        </>
                                    } else if(dats.node.articleimg1){
                                        return <>
                                            <FrontPageArticleImage dats={ dats.node.articleimg1.gatsbyImageData } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep6){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep6 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep7){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep7 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep8){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep8 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep9){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep9 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep10){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep10 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articleimg2){
                                        return <>
                                            <FrontPageArticleImage dats={ dats.node.articleimg2.gatsbyImageData } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep11){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep11 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep12){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep12 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep13){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep13 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep14){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep14 } />
                                        </>
                                    }
                                })()}

                                {(() => {
                                    if(dats.node.articlep15){
                                        return <>
                                            <FrontPageArticleParagraph dats={ dats.node.articlep15 } />
                                        </>
                                    }
                                })()}
                                <Grid item xs={12} className="spacer"></Grid>
                                { matchesUnder && <FrontPageArticleWriterDetailsSmall title={ dats.node.title } dats={ dats.node.articleauthor }/> }
                                { !matchesUnder && <FrontPageArticleWriterDetails title={ dats.node.title } dats={ dats.node.articleauthor }/> }
                                <Grid item xs={12} className="spacer"></Grid>
                            </Grid>  
                                
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledFrontPageBannerGrid>

    return res;
}
export default FrontPageBanner 