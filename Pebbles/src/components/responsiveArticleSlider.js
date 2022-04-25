import React from "react"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image";




const StyledArticleSwiperGrid = styled(Grid, {
    name: "StyledHistorySwiperGrid",
    slot: "Wrapper",
  })({
    fontSize:`0.8rem`,
    fontFamily:`Arial`, 
    marginBottom:"0px",
    marginTop:"-45px",
    paddingTop:"0px",
    ".normal": { fontWeight:"normal" },
    ".bold": { fontWeight:"bold" },
    ".grey": { color:"grey" },
    ".swiper-pagination-bullet": { padding:"0.3rem" },
    ".swiper-button-prev": { color:"black", opacity:"0.3", position:"relative", bottom:"-220px", left:"0px"},
    ".swiper-button-next": { color:"black", opacity:"0.3", position:"relative", bottom:"-200px", right:"-90%"},
    ".historyTitle": {  marginBottom:"10px" },
    ".historySwiperTitle": {  marginBottom:"40px", marginTop:"0px" },
    ".infoCard": {  marginRight:"10px", marginLeft:"10px", margin:'0 auto', maxWidth:"380px", willChange:"transform", borderRadius:"20px", overFlow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"0.8rem", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardButton:hover": { background: "rgb(26, 36, 33)", color:"orange" },
    ".cardMediaArea": {  height:"190px", marginBottom:"0px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" },
    ".cardButtonBottom":{ fontFamily: 'Georgia', width: "auto", padding: "20px 15px", borderRadius: "100px", fontSize:"0.8rem", color: "#719fb2", background: "rgba(129, 184, 207, 0.2)", border:'none', fontWeight:"normal", alignSelf: "end", marginTop:"20px", height:'64px', textShadow: '1px 1px 1px rgb(255,255,255,0.9)'},
    ".cardButtonBottom:hover": { background:"#719fb2", color:"white", textShadow: 'none' },
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", display: "flex", flexDirection: "row" },
    ".cardContentPara": { fontFamily: 'Arial', fontSize:"0.6rem", color: "#808080", marginBottom:"0px", maxHeight:"80px", lineHeight:"1rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"25px" },
    ".buttonContainer": { display:"flex", justifyContent:"flex-end", marginTop: "0px" },
    ".cardTitle": { marginBottom:"0.01rem", color: `#141414`, fontSize:"0.8rem" },
    ".safariRounded": { willChange:"transform", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" }
    

  });



function responsiveArticleSlider({ data }) {


    const res =

        <StyledArticleSwiperGrid container spacing={0}>

            <Grid item xs={12}>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ fontFamily: "Arial", paddingBottom:"4rem" }}
                >


                    {data.map((dats) => (
                        

                        
                        <SwiperSlide key={dats.node.articletitle} >

                            <Grid key={dats.node.articletitle} item xs={12} sm={6} md={4} lg={4} state={data} style={{width:"75%", marginLeft:"2.8rem"}}>
                        
                                <Card className="infoCard">

                                    <Grid item xs={12} className="safariRounded">
                                        <GatsbyImage className="cardMediaArea" image={getImage(dats.node.articleimage.gatsbyImageData)} alt={dats.node.articletitle}/>
                                    </Grid>

                                    <CardContent
                                        className="cardContentArea"
                                    >
                                    
                                            <Grid item xs={8}>
                                                <p className="cardTitle">
                                                    {dats.node.articletitle}
                                                </p>
                                                <p className="cardContentPara">
                                                    {dats.node.articledescription}
                                                </p>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div className="buttonContainer">
                                                    
                                                    <Button href={dats.node.articleurl} target="_blank" className="cardButton cardButtonBottom">
                                                        Visit
                                                    </Button>
                                                </div>
                                            </Grid>
                                    
                                        
                                    </CardContent>

                                </Card>               
                            </Grid>

                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledArticleSwiperGrid>

    return res;
}
export default responsiveArticleSlider