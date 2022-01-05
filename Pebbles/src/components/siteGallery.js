import React from "react"
import { Link } from "gatsby"

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
                               
                                    <Grid item xs={6} sm={4} lg={3} state={dats} >
                                       
                                        <Card sx={{ border:"1px solid white", padding:"0px"}}>
                                            <CardMedia
                                                component="img"
                                                height="150"
                                                image={dats.node.agencyimage.url}
                                                alt={dats.node.agencytitle}
                                                sx={{border:"1px solid #d3d3d3", borderRadius:"3px"}}
                                            />
                                            <CardContent>
                                                <h4>
                                                <Link to="/">{dats.node.agencytitle}</Link>
                                                </h4>
                                                <p>
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