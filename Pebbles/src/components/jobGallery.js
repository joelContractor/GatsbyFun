import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledJobGalleryGrid = styled(Grid, {
    name: "StyledGalleryGrid",
    slot: "Wrapper",
  })({
    fontSize:`13px`,
    fontFamily:`Arial`,
    ".infoCard": { margin:'0 auto', maxWidth:"380px", willChange:"transform", borderRadius:"20px", overFlow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"0.8rem", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardButton:hover": { background: "rgb(26, 36, 33)", color:"orange" },
    ".cardMediaArea": {  height:"140px", marginBottom:"0px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" },
    ".cardButtonBottom":{ fontFamily: 'Georgia', width: "auto", padding: "20px 12px", borderRadius: "100px", fontSize:"0.8rem", color: "#719fb2", background: "rgba(129, 184, 207, 0.2)", border:'none', fontWeight:"normal", alignSelf: "end", marginTop:"0px", height:'64px', textShadow: '1px 1px 1px rgb(255,255,255,0.9)'},
    ".cardButtonBottom:hover": { background:"#719fb2", color:"white", textShadow: 'none' },
    ".cardContentArea": {  background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" },
    ".cardContentPara": { fontFamily: 'Arial', fontSize:"0.6rem", color: "#808080", marginTop:"0.5rem", marginBottom:"0px", maxHeight:"80px", lineHeight:"1rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"25pxpx" },
    ".buttonContainer": { marginTop: "0px" },
    ".cardTitle": { marginTop:"0.5rem", marginBottom:"1rem", color: `#141414`, fontSize:"0.8rem" },
    ".safariRounded": { willChange:"transform", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".monowidth": { width:"100%", borderRadius:"5px", marginBottom:"1rem", marginTop:"0.2rem" },
    ".formWidth": { width:"50%", margin:"0 auto", background:"rgb(26, 36, 33) none repeat scroll 0% 0%", padding:"1rem", borderRadius:"20px", marginTop:"2rem" },
    ".white": { color:"white", marginTop:"1rem" },
    ".left": { textAlign:"left" },
    ".seperator": { marginTop:"3rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"0.7rem" }

    
  });

function JobGallery({ data }) {

    const [show, setShow] = useState('none');

    function showForm(){
        if(show ==='none'){
            setShow('block');  
        }else{setShow('none');}
    }
   
    const res =

        

 
            <StyledJobGalleryGrid container direction="row" spacing={3} >
            
                        {data.map((dats) => (
                               
                            <>
                               <Grid key={dats.node.agencytitle} item xs={12} sm={6} md={4} lg={4} state={dats}>
                                
                                <Card className="infoCard">

                                    <Grid item xs={12} className="safariRounded">
                                        <GatsbyImage className="cardMediaArea" image={getImage(dats.node.jobImage.gatsbyImageData)} alt={dats.node.agencytitle}/>
                                    </Grid>
                                    <Grid container item xs={12} direction="row" onClick={showForm}>
                                    <CardContent
                                        className="cardContentArea"
                                    >
                                      
                                            
                                        <Grid item xs={12}>
                                            <p className="cardTitle">
                                                {dats.node.jobTitle}
                                            </p>
                                            
                                            <p className="cardContentPara">
                                                Description:
                                            </p>
                                            <p className="cardContentPara desc">
                                                {dats.node.jobDescription}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p className="cardContentPara seperator">
                                                Females Needed: {dats.node.femalesNeeded}
                                            </p>

                                            <p className="cardContentPara">
                                                Males Needed: {dats.node.malesNeeded}
                                            </p>
                                            <p className="cardContentPara">
                                                Location: {dats.node.location}
                                            </p>

                                        </Grid>
                                        <Grid item xs={12} style={{display:"flex", justifyContent:"flex-end"}}>
                                            
                                                
                                                <Button onClick={showForm} className="cardButton cardButtonBottom">
                                                    {show === 'none'? 'Apply' : 'Back'}
                                                </Button>
                                            
                                        </Grid>
                                     
                                        
                                    </CardContent>
                                    </Grid>
                                </Card>               
                            </Grid>

                            <Grid xs={12} style={{textAlign:"center", display:show === 'none'? `none`: `block`}}>

                            

                            <form className="formWidth" name="Contact Form" method="POST" netlify-honeypot="entryField" data-netlify="true">
                                <input type="hidden" name="form-name" value="Contact Form" />
                                <Grid xs={12}>
                                    <h3 className="white">Apply</h3>
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="email" >Your Email:<input className="monowidth" placeholder="you@gmail.com"type="email" name="email" id="email" /></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{ display:"none" }}>
                                    <label className="white" htmlFor="entryField" >Your Key:<input className="monowidth" placeholder="your-secret-userkey" type="text" name="entryField" id="entryField" /></label>
                                    
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="" >Your Profile URL:<input className="monowidth" placeholder="you@imdb.com" type="text" name="profile-url" id="profile-url" /></label>
                                    
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="message" >Message:<textarea className="monowidth" placeholder="Hello, my name is example-name, I am interested in your advertised job role." name="message" id="message" /></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{ marginBottom:"1rem", textAlign:"center" }}>
                                    <p className="monowidth white" style={{ marginTop:"0.3rem" }}>Please be patient while awaiting a response.</p>
                                </Grid>
                                <Grid xs={12} style={{display:"none"}}>
                                    <label htmlFor="employer-email" >Employer Email:<input className="monowidth" type="email" name="employer-email" id="employer-email" value={dats.node.employerEmail} /></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{textAlign:"center", marginBottom:"0.3rem"}}>
                                    <Button style={{ borderRadius:"50px", padding:"1.3rem 1rem", background:"white", color:"black", fontSize:"0.5rem" }} type="submit">Send</Button>
                                </Grid>
                                
                            </form>


                            </Grid>
                            </>
                         
                        ))}
                                
            </StyledJobGalleryGrid>
            
    
        
      
        

    return res;
}
export default JobGallery