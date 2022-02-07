import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import UserBannerImage from "./elements/userBannerImage";
import FrontPageArticleParagraph from "./elements/frontPageArticleParagraph";
import FrontPageArticleTitle from "./elements/frontPageArticleTitle";
import FrontPageArticleWriterDetails from "./elements/frontPageArticleWriterDetails";







function FrontPageBanner({ data }) {

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

                                {(() => {
                                    if(dats.node.articlep1){
                                        return <>
                                            <FrontPageArticleTitle dats={ dats.node.title } />
                                            <FrontPageArticleWriterDetails dats={ dats.node.title } />
                                            <FrontPageArticleParagraph dats={ dats.node.articlep1 } />
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
                                    if(dats.node.articleimg1){
                                        return <>
                                            <GatsbyImage image={getImage(dats.node.articleimg1.gatsbyImageData)} alt={"article alt info taken from server"}/>
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
                                            <GatsbyImage image={getImage(dats.node.articleimg2.gatsbyImageData)} alt={"article alt info taken from server"}/>
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

                            </Grid>  
                                
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </Grid>

    return res;
}
export default FrontPageBanner 