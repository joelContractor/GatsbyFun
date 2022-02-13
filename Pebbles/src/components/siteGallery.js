import React from "react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function SiteGallery({ data }) {

    const res =

        

 
            <Grid container direction="row" spacing={3} sx={{ fontSize:`13px`, fontFamily:`Arial`}}>
            
                
                        {data.map((dats) => (
                               
                            <Grid item xs={6} sm={6} md={4} lg={4} state={dats} >
                                
                                <Card sx={{ padding:"2px", height:"425px"}}>
                                    <Button href={dats.node.agencyurl} target="_blank" style={{ textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"12px", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgba(0, 0, 0, 0.9)", padding: "20px 10px 15px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
                                        {dats.node.agencytitle}
                                    </Button>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={dats.node.agencyimage.url}
                                        alt={dats.node.agencytitle}
                                        sx={{ mb:"0px", border: "1px solid white", borderTop:"0px" }}
                                    />
                                    <CardContent
                                        sx={{ background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px" }}
                                    >
                                        
                                        <p style={{fontFamily: 'Arial', fontSize:"12px", color: "rgba(0, 0, 0, 0.6)", marginBottom:"0px"}}>
                                            {dats.node.agencydescription}
                                        </p>
                                        
                                    </CardContent>
                                    {/*<CardActions sx={{justifyContent:'center', marginBottom:'8px', pt:"0px"}}>
                                        
                                        <Link to="/"><Button sx={{fontSize:"12px", color:'gray', borderColor:'#d3d3d3', borderRadius:'3px', height:'50px'}} variant="outlined" size="small">Go</Button></Link>
                                        
                                    </CardActions> */}
                                </Card>               
                            </Grid>
                         
                        ))}
                                
            </Grid>
            
    
        
      
        

    return res;
}
export default SiteGallery