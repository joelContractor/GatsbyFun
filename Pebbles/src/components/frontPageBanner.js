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
        alert('This article is about \'Race Diversity\'. In 2011, people of color made up 12.2% of directors of theatrical films. While that percentage has spiked in the ensuing decade — to 17.8% in 2013, and 19.3% in 2018 — the overall trend line has remained flat. In 2019, just 14.4% of directors of theatrical films were people of color.');
    }

    function presentAbility(){
        alert('This article is about \'Ability Diversity\'. Diversity tends to ignore the Disabled. This should not be the case.');
    }

    function presentAge(){
        alert('This article is about \'Age Diversity\'. Of the top 100 films of 2017, only 30 had a male lead over age 44 and only five featured a woman over the same age. They were Meryl Streep, 69, Amy Poehler, 46, Judi Dench, 83, Halle Berry, 51, and Frances McDormand, 61, who famously used her 2018 Oscar speech to urge actors to demand contracts that require diversity in a film’s casting. ');
    }

    function presentOrientation(){
        alert('This article is about \'Diversity of Sexula Orientation\'. Filmmakers of diverse sexual orientation have succeeded in creating a vibrant underground and alternative film scene. Why must this be the case?');
    }

    function presentGender(){
        alert('This article is about \'Gender Diversity\'. Filmmakers of fluid gender have succeeded in creating a vibrant underground and alternative film scene. Why must this be the case?');
    }

    function presentCulture(){
        alert('This article is about \'Cultural Diversity\'. The casting of predominantly white actors in movies and TV shows to play affluent characters is typically the industry norm. However, that does not do an accurate job of depicting a real life representation of the world.');
    }

    function presentReligion(){
        alert('This article is about \'Religious Diversity\'. Religious ideas in movies are powerful because they naturally connect with the audience represented while informing others about a previously unknown culture, history and religion. ');
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