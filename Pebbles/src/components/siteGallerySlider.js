import React from "react"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";


const StyledHistorySwiperGrid = styled(Grid, {
    name: "StyledHistorySwiperGrid",
    slot: "Wrapper",
  })({
    fontSize:`0.8rem`,
    fontFamily:`Arial`, 
    marginBottom:"40px",
    background:"white",
    paddingTop:"100px",
    borderTop:"1px dotted grey",
    ".normal": { fontWeight:"normal", fontSize:"0.7rem" },
    ".bold": { fontWeight:"bold" },
    ".grey": { color:"grey", fontSize:"0.8rem" },
    ".swiper-pagination-bullet": { padding:"0.3rem" },
    ".swiper-button-prev": { color:"black", opacity:"0.3", position:"relative", bottom:"-25px", left:"0px"},
    ".swiper-button-next": { color:"black", opacity:"0.3", position:"relative", bottom:"-2px", right:"-90%"},
    ".historyTitle": {  marginBottom:"10px" },
    ".historySwiperTitle": {  marginBottom:"40px", marginTop:"40px" },
    ".title": { fontSize:"0.9rem"  }

  });



function SiteGallerySlider({ dats }) {

    

    const myArray = [
        [dats.node.userhistorytitle1, dats.node.userhistorydescription1, dats.node.userhistoryyear1, dats.node.userhistorytype1], 
        [dats.node.userhistorytitle2, dats.node.userhistorydescription2, dats.node.userhistoryyear2, dats.node.userhistorytype2],
        [dats.node.userhistorytitle3, dats.node.userhistorydescription3, dats.node.userhistoryyear3, dats.node.userhistorytype3],
        [dats.node.userhistorytitle4, dats.node.userhistorydescription4, dats.node.userhistoryyear4, dats.node.userhistorytype4],
        [dats.node.userhistorytitle5, dats.node.userhistorydescription5, dats.node.userhistoryyear5, dats.node.userhistorytype5],
        [dats.node.userhistorytitle6, dats.node.userhistorydescription6, dats.node.userhistoryyear6, dats.node.userhistorytype6],
    ]

    const res =

        <StyledHistorySwiperGrid container >
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
                        (() => {
                            if(dats[0]){
                                return <>
                                    <SwiperSlide key={dats[0]} >

                                        <Grid item xs={12} sm={12} md={12} style={{ marginBottom:"5rem" }}>
                                            
                                            <h2 className="normal historySwiperTitle title">{dats[0]}</h2>
                                            <p className="normal historySwiperTitle grey">{dats[1]}</p>
                                            <Grid item xs={12} container direction="row">
                                                <Grid item xs={4} sm={6}><p className="normal">Year: <span className="normal">{dats[2]}</span></p></Grid>
                                                <Grid item xs={8} sm={6}><p className="normal">Type: <span className="normal">{dats[3]}</span></p></Grid>   
                                            </Grid>

                                        </Grid>



                                    </SwiperSlide>
                                </>
                            }
                        })()
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledHistorySwiperGrid>

    return res;
}
export default SiteGallerySlider