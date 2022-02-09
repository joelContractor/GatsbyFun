import React from "react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function SiteGallery({ data }) {

    const res =

        

 
            <Grid container direction="row" spacing={2} sx={{ fontSize:`13px`, fontFamily:`Arial`}}>
            
                
                        {data.map((dats) => (
                               
                            <Grid item xs={6} sm={6} md={4} lg={3} state={dats} >
                                
                                <Card sx={{ boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)', backgroundColor: '#f9f9f9', border:"1px solid white", padding:"0px"}}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={dats.node.agencyimage.url}
                                        alt={dats.node.agencytitle}
                                        sx={{  }}
                                    />
                                    <CardContent>
                                        <p>
                                            <a href={dats.node.agencyurl} target="_blank" rel="noreferrer" role="button">{dats.node.agencytitle}</a>
                                        </p>
                                        <p style={{fontFamily: 'Arial', fontSize:"12px", color: "rgba(0, 0, 0, 0.6)"}}>
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