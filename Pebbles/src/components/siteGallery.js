import React from "react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from "@mui/system";

const StyledGalleryGrid = styled(Grid, {
    name: "StyledGalleryGrid",
    slot: "Wrapper",
  })({
    fontSize:`13px`,
    fontFamily:`Arial`,
    ".infoCard": { padding:"2px", height:"425px" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"12px", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "20px 10px 15px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardMediaArea": {  marginBottom:"0px", border: "1px solid white", borderTop:"0px" },
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" },
    ".cardContentPara.": { fontFamily: 'Arial', fontSize:"12px", color: "rgba(0, 0, 0, 0.6)", marginBottom:"0px" }
  });

function SiteGallery({ data }) {

    const res =

        

 
            <StyledGalleryGrid container direction="row" spacing={3}>
            
                
                        {data.map((dats) => (
                               
                            <Grid item xs={6} sm={6} md={4} lg={4} state={dats} >
                                
                                <Card className="infoCard">
                                    <Button href={dats.node.agencyurl} target="_blank" className="cardButton">
                                        {dats.node.agencytitle}
                                    </Button>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={dats.node.agencyimage.url}
                                        alt={dats.node.agencytitle}
                                        className="cardMediaArea"
                                    />
                                    <CardContent
                                        className="cardContentArea"
                                    >
                                        
                                        <p className="cardContentPara">
                                            {dats.node.agencydescription}
                                        </p>
                                        
                                    </CardContent>
                                    {/*<CardActions sx={{justifyContent:'center', marginBottom:'8px', pt:"0px"}}>
                                        
                                        <Link to="/"><Button sx={{fontSize:"12px", color:'gray', borderColor:'#d3d3d3', borderRadius:'3px', height:'50px'}} variant="outlined" size="small">Go</Button></Link>
                                        
                                    </CardActions> */}
                                </Card>               
                            </Grid>
                         
                        ))}
                                
            </StyledGalleryGrid>
            
    
        
      
        

    return res;
}
export default SiteGallery