import React, {useState} from "react"
/*import { Link } from "gatsby"*/
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Grid } from "@material-ui/core";




const StyledJobSwiperGrid = styled(Grid, {
    name: "StyledHistorySwiperGrid",
    slot: "Wrapper",
  })({
    fontSize:`0.8rem`,
    fontFamily:`Arial`, 
    marginBottom:"0px",
    marginTop:"-45px",
    paddingTop:"3rem",
    ".normal": { fontWeight:"normal" },
    ".bold": { fontWeight:"bold" },
    ".grey": { color:"grey" },
    ".swiper-pagination-bullet": { padding:"0.3rem" },
    ".swiper-button-prev": { color:"black", opacity:"0.3"},
    ".swiper-button-next": { color:"black", opacity:"0.3"},
    ".historyTitle": {  marginBottom:"10px" },
    ".historySwiperTitle": {  marginBottom:"40px", marginTop:"0px" },
    ".infoCard": {  borderRadius:"0px", borderBottomRightRadius:"20px", borderBottomLeftRadius:"20px", marginRight:"10px", marginLeft:"10px", margin:'0 auto', maxWidth:"1080px", willChange:"transform", overFlow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"0.8rem", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardButton:hover": { background: "rgb(26, 36, 33)", color:"orange" },
    ".cardMediaArea": {  height:"45vh", marginBottom:"0px"},
    ".cardButtonBottom":{ fontFamily: 'Georgia', width: "auto", padding: "20px 10px", borderRadius: "100px", fontSize:"0.8rem", color: "#719fb2", background: "rgba(129, 184, 207, 0.2)", border:'none', fontWeight:"normal", alignSelf: "end", marginTop:"1rem", height:'64px', textShadow: '1px 1px 1px rgb(255,255,255,0.9)'},
    ".cardButtonBottom:hover": { background:"#719fb2", color:"white", textShadow: 'none' },
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" },
    ".resCardContentPara": { marginTop:"0.7rem", fontFamily: 'Arial', fontSize:"0.7rem", color: "#808080", marginBottom:"0px", lineHeight:"1rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"25px" },
    ".buttonContainer": {  marginTop: "0px" },
    ".cardTitle": { marginTop:"40px", marginBottom:"40px", color: `#141414`, fontSize:"1.2rem" },
    ".safariRounded": { willChange:"transform", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".monowidth": { width:"100%", borderRadius:"5px", marginBottom:"1rem", marginTop:"0.2rem", padding:'10px' },
    ".formWidth": { width:"95%", margin:"0 auto", background:"#719fb2", padding:"1rem", borderRadius:"20px", marginTop:"2rem" },
    ".white": { color:"white", marginTop:"1rem" },
    ".left": { textAlign:"left" },
    ".separator": { marginTop:"1.5rem" },
    ".formButton": { borderRadius:"20px", background: "#719fb2", width: '95%', height:"70px", color:"White", textShadow: '0px 0px 0px #191919'},
    ".formButton:hover": {background: "#fff", color:"#719fb2"},  
    ".ourBlue": { color:"#719fb2" },
    ".beside": { float:"left", padding:"5px 10px 5px 10px", borderRight:"1px dotted grey" },
    ".beside:nth-child(1)": {paddingLeft:"10px"},
    ".beside:nth-child(5)": {borderRight:"none"},
    ".alone": { clear:"both", paddingTop:"40px" },
    ".data": { fontSize:"0.9rem", color:"black" },
    ".dataBorderLeft":{paddingLeft:"10px"},
    ".blockText": {lineHeight:"1.6rem", marginBottom:"40px", float:"left"},
    ".charactersFontSize": { fontSize: "0.7rem"}

  });



function ResponsiveJobSlider({ data }) {

    const [show, setShow] = useState('none');

    var myArray = [];

    function showResForm(){
        if(show ==='none'){
            setShow('block');  
        }else{setShow('none');}
    }
 
    
    const res =

        <StyledJobSwiperGrid container spacing={0}>

            <Grid item xs={12}>
                <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ fontFamily: "Arial", paddingBottom:"4rem", borderRadius:"20px" }}
                >


                    {data.map((dats) => (
                        

                        myArray = [
                            [dats.node.characterNeeded1], [dats.node.characterNeeded2], [dats.node.characterNeeded3], [dats.node.characterNeeded4], [dats.node.characterNeeded5], [dats.node.characterNeeded6], [dats.node.characterNeeded7], [dats.node.characterNeeded8]
                        ],
                        
                        <SwiperSlide key={dats.node.jobTitle} >

                            <Grid key={dats.node.jobTitle} container direction="row" item xs={12} state={data}>
                        
                                <Card className="infoCard">

                                    <Grid item xs={12} className="safariRounded">
                                        <GatsbyImage className="cardMediaArea" image={getImage(dats.node.jobImage.gatsbyImageData)} alt={dats.node.jobTitle}/>
                                    </Grid>
                                    <Grid item xs={12} onClick={showResForm} >
                                        <CardContent
                                            className="cardContentArea"
                                        >
                                            
                                            <Grid item xs={12}>
                                                
                                                <p className="resCardContentPara beside">
                                                    Females Needed: <span className="data">{dats.node.femalesNeeded}</span>
                                                </p>
                                            
                                                <p className="resCardContentPara beside">
                                                    Males Needed: <span className="data">{dats.node.malesNeeded}</span>
                                                </p>
                                         
                                                <p className="resCardContentPara beside">
                                                    Location: <span className="data">{dats.node.location}</span>
                                                </p>
                                                <p className="resCardContentPara beside">
                                                    Paid: <span className="data">{dats.node.paid}</span>
                                                </p>
                                                <p className="resCardContentPara beside">
                                                    End Date: <span className="data">{dats.node.endDate}</span>
                                                </p>
                                                <p className="cardTitle alone dataBorderLeft">
                                                    {dats.node.jobTitle}
                                                </p>
                                                <p className="resCardContentPara dataBorderLeft">
                                                    Description:
                                                </p>
                                                <p className="resCardContentPara dataBorderLeft">
                                                <span className="data blockText charactersFontSize">{dats.node.jobDescription}</span>
                                                </p>
                                                
                                                {(() => {
                                                    if(dats.node.characterNeeded1){
                                                        return <>
                                                            {myArray.map((character) => (
                                                                
                                                                <p key={character} className="resCardContentPara dataBorderLeft">
                                                                    Character: <span className="data charactersFontSize">{character}.</span>
                                                                </p>

                                                            ))}
                                                        </>
                                                    }
                                                })()}
                                            </Grid>
                                            <Grid item xs={12} style={{ display:"flex", justifyContent:"flex-end", clear:"both" }}>
                                               
                                                    
                                                    <Button onClick={showResForm}  className="cardButton cardButtonBottom">
                                                        {show === 'none'? 'Apply' : 'Back'}
                                                    </Button>
                                             
                                            </Grid>
                                    
                                        
                                        </CardContent>
                                    </Grid>

                                </Card>               
                            </Grid>
                            <Grid item xs={12} style={{background:"hsla(0,0%,10%,0.9)", position:'absolute', top:"0px", left:"0px", width:"100%", height:"100vh", textAlign:"center", display:show === 'none'? `none`: `block`}}>

                                

                                <form className="formWidth" name="Contact Form" method="POST" netlify-honeypot="entryField" data-netlify="true">
                                    <input type="hidden" name="form-name" value="Contact Form" />
                                    <Grid item xs={12}>
                                        <h3 className="white">Apply</h3>
                                    </Grid>
                                    <Grid item xs={12} className="left">
                                        <label className="white" htmlFor="email">Your Email:<input className="monowidth ourBlue" placeholder="you@gmail.com" type="email" name="email" id="email" required/></label>
                                        
                                    </Grid>
                                    <Grid item xs={12} style={{ display:"none" }}>
                                        <label className="white" htmlFor="entryField" >Your Key:<input className="monowidth ourBlue" placeholder="your-secret-userkey" type="text" name="entryField" id="entryField" /></label>
                                        
                                    </Grid>
                                    <Grid item xs={12} className="left">
                                        <label htmlFor="profile-url" className="white">Your Profile URL:<input className="monowidth ourBlue" placeholder="you@imdb.com" type="text" name="profile-url" id="profile-url" required/></label>
                                        
                                    </Grid>
                                    <Grid item xs={12} className="left">
                                        <label className="white" htmlFor="message" >Message:<textarea className="monowidth ourBlue" placeholder="Hello, my name is example-name, I am interested in your advertised job role." name="message" id="message" required/></label>
                                        
                                    </Grid>
                                    <Grid item xs={12} style={{ marginBottom:"1rem", textAlign:"center" }}>
                                        <p className="monowidth white" style={{ marginTop:"0.3rem" }}>Please be patient while awaiting a response.</p>
                                    </Grid>
                                    <Grid item xs={12} style={{display:"none"}}>
                                        <label htmlFor="employer-email" >Employer Email:</label>
                                        <input className="monowidth" type="password" name="employer-email" id="employer-email" value={dats.node.employerEmail} readOnly/>
                                    </Grid>
                                    <Grid item xs={12} style={{textAlign:"center", marginBottom:"0.3rem"}}>
                                        <Button style={{ fontWeight:"bold", borderRadius:"50px", padding:"1.3rem 1rem", background:"white", color:"#719fb2", fontSize:"0.6rem" }} type="submit">Send</Button>
                                    </Grid>
                                    
                                </form>

                                <Grid item xs={12} style={{ display:"flex", justifyContent:"center", marginTop:"1rem"}}>
                                               
                                                    
                                        <Button onClick={showResForm} className="cardButton cardButtonBottom formButton">
                                            {show === 'none'? 'Apply' : 'Back'}
                                        </Button>
                                    
                                </Grid>




                            </Grid>
                        </SwiperSlide>
                        
                    ))}
                    
                </Swiper>
            </Grid>
        </StyledJobSwiperGrid>

    return res;
}
export default ResponsiveJobSlider