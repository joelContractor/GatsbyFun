import React from "react"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery"

const StyledHistorySwiperGrid = styled(Grid, {
    name: "StyledHistorySwiperGrid",
    slot: "Wrapper",
  })({
    fontSize:`12px`,
    fontFamily:`Arial`, 
    marginBottom:"40px",
    background:"white",
    paddingLeft:"20px",
    paddingRight:"20px",
    paddingTop:"100px",
    borderTop:"1px dotted grey",
    ".bannerData": { marginTop:`0px`, zIndex:`1`, overflow:`hidden`, position: `relative`, transition: `opacity 1.9s, top 0s, height 0s`},
    ".diversityLogosBelow": { padding: `15px 10px`, display:`inline`, background:"red", borderRadius:"50px", marginLeft:"10px" },
    ".bannerButtonBelow": { fontSize:"16px", textTransform: `none`, backgroundColor:`rgba(0, 0, 05, 0.1)`, width:`100%`, borderRadius: `50px`, color: `black`, fontWeight: `normal`, border: `1px solid #d3d3d3`, height: `50px`, padding: `4px 20px 4px 20px`, fontFamily: 'georgia, serif'},
    ".bannerButton:hover": { color: "black", backgroundColor:`rgba(255, 255, 255, 0.8)`},
    ".bannerButtonHousingBelow": { padding:"10px" },
    ".diversityLogoPaddingBelow": { padding:"25px 20px 10px 0px"},
    ".diversityLogoAreaBelow": { textAlign: `left`, background: `rgba(0, 0, 0, 0.1)`, borderRadius: `50px`, border: `1px solid #d3d3d3`, width:`fit-content`, marginLeft: `10px` },
    ".normal": { fontWeight:"normal" },
    ".bold": { fontWeight:"bold" },
    ".grey": { color:"grey" },
    ".swiper-pagination-bullet": { padding:"0.1rem" },
    ".swiper-button-prev": { color:"black", opacity:"0.3", marginTop:"130px" },
    ".swiper-button-next": { color:"black", opacity:"0.3", marginTop:"120px" },
    ".historyTitle": {  marginBottom:"30px" },
    ".historySwiperTitle": {  marginBottom:"40px" }

  });



function SiteGallerySlider({ dats }) {

    const matches = useMediaQuery('(max-width:600px)');

    const myArray = [
        [dats.node.userhistorytitle1, dats.node.userhistorydescription1, dats.node.userhistoryyear1, dats.node.userhistorytype1], 
        [dats.node.userhistorytitle2, dats.node.userhistorydescription2, dats.node.userhistoryyear2, dats.node.userhistorytype2],
        [dats.node.userhistorytitle3, dats.node.userhistorydescription3, dats.node.userhistoryyear3, dats.node.userhistorytype3],
        [dats.node.userhistorytitle4, dats.node.userhistorydescription4, dats.node.userhistoryyear4, dats.node.userhistorytype4],
        [dats.node.userhistorytitle5, dats.node.userhistorydescription5, dats.node.userhistoryyear5, dats.node.userhistorytype5],
        [dats.node.userhistorytitle6, dats.node.userhistorydescription6, dats.node.userhistoryyear6, dats.node.userhistorytype6],
    ]

    const res =

        <>{ matches && <StyledHistorySwiperGrid container >
            <Grid className="historyTitle" item xs={12}>
                <h2>My History</h2>
            </Grid>
            <Grid item xs={12}>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ fontFamily: "Arial" }}
                >

                    {myArray.map((dats) => (
                        <SwiperSlide>

                            <Grid item xs={12} sm={12} md={12} style={{ marginBottom:"5rem" }}>
                                
                                <h2 className="normal historySwiperTitle">{dats[0]}</h2>
                                <p className="normal grey historySwiperTitle">{dats[1]}</p>
                                <Grid item xs={12} container direction="row">
                                    <Grid item xs={3} sm={6}><p className="bold">Year: <span className="normal grey">{dats[2]}</span></p></Grid>
                                    <Grid item xs={9} sm={6}><p className="bold">Type: <span className="normal grey">{dats[3]}</span></p></Grid>   
                                </Grid>
                            
                            </Grid>
                    

                            
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledHistorySwiperGrid> }</>

    return res;
}
export default SiteGallerySlider