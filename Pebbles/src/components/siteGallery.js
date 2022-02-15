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
    ".infoCard": { padding:"2px" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"12px", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardMediaArea": {  marginBottom:"0px", border: "1px solid white", borderTop:"0px" },
    ".cardButtonBottom":{ width: "100%", padding: "20px", borderRadius: "100px", fontSize:"12px", color: "rgba(0, 0, 0, 0.3)", background: "#f1f1f1", border: "1px solid rgba(0, 0, 0, 0.1)", fontWeight:"normal", float:"right", alignSelf: "end", marginBottom:"15px"},
    ".cardButtonBottom:hover": { background:"rgba(0, 0, 0, 0.1)", color:"rgba(0, 0, 0, 0.6)", border:"1px solid rgba(0, 0, 0, 0.3)", fontWeight: "bold"},
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", display: "flex", flexDirection: "column" },
    ".cardContentPara": { fontFamily: 'Arial', fontSize:"12px", color: "rgba(0, 0, 0, 0.6)", marginBottom:"0px", maxHeight:"80px" },
    ".MuiCardContent-root:last-child": { paddingBottom:"0px" }
    
  });

function SiteGallery({ data }) {

    const res =

        

 
            <StyledGalleryGrid container direction="row" spacing={3}>
            
                
                        {data.map((dats) => (
                               
                            <Grid item xs={12} sm={6} md={4} lg={4} state={dats} >
                                
                                <Card className="infoCard">
                                    <Button href={dats.node.agencyurl} target="_blank" className="cardButton">
                                        {dats.node.agencytitle}
                                    </Button>
                                    <CardMedia
                                        component="img"
                                        height="185"
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
                                        <Button href={dats.node.agencyurl} target="_blank" className="cardButton cardButtonBottom">
                                            Go
                                        </Button>
                                        
                                    </CardContent>

                                </Card>               
                            </Grid>
                         
                        ))}
                                
            </StyledGalleryGrid>
            
    
        
      
        

    return res;
}
export default SiteGallery