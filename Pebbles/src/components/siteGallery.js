import React from "react"
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledGalleryGrid = styled(Grid, {
    name: "StyledGalleryGrid",
    slot: "Wrapper",
  })({
    fontSize:`13px`,
    fontFamily:`Arial`,
    ".infoCard": { willChange:"transform", borderRadius:"20px", overFlow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"12px", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardButton:hover": { background: "rgb(26, 36, 33)", color:"orange" },
    ".cardMediaArea": {  height:"210px", marginBottom:"0px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" },
    ".cardButtonBottom":{ width: "auto", padding: "20px", borderRadius: "100px", fontSize:"12px", color: "rgba(0, 0, 0, 0.3)", background: "#f1f1f1", border: "1px solid rgba(0, 0, 0, 0.1)", fontWeight:"normal", alignSelf: "end", marginBottom:"15px"},
    ".cardButtonBottom:hover": { background:"rgba(0, 0, 1, 0.1)", color:"rgba(0, 0, 0, 0.4)" },
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", display: "flex", flexDirection: "row" },
    ".cardContentPara": { fontFamily: 'Arial', fontSize:"11px", color: "rgba(0, 0, 0, 0.4)", marginBottom:"0px", maxHeight:"80px", lineHeight:"1rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"25pxpx" },
    ".buttonContainer": { display:"flex", justifyContent:"flex-end", marginTop: "0px" },
    ".cardTitle": { marginBottom:"0.01rem", color: `hsla(0, 0%, 0%, 0.7)` },
    ".safariRounded": { willChange:"transform", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" }
    
  });

function SiteGallery({ data }) {

    const res =

        

 
            <StyledGalleryGrid container direction="row" spacing={3}>
                
                        {data.map((dats) => (
                               
                            <Grid key={dats.node.agencytitle} item xs={12} sm={6} md={4} lg={4} state={dats} >
                                
                                <Card className="infoCard">

                                    <Grid item xs={12} className="safariRounded">
                                        <GatsbyImage className="cardMediaArea" image={getImage(dats.node.agencyimage.gatsbyImageData)} alt={dats.node.agencytitle}/>
                                    </Grid>

                                    <CardContent
                                        className="cardContentArea"
                                    >
                                      
                                            <Grid item xs={8}>
                                                <p className="cardTitle">
                                                    {dats.node.agencytitle}
                                                </p>
                                                <p className="cardContentPara">
                                                    {dats.node.agencydescription}
                                                </p>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div className="buttonContainer">
                                                    <Button href={dats.node.agencyurl} target="_blank" className="cardButton cardButtonBottom">
                                                        Go
                                                    </Button>
                                                </div>
                                            </Grid>
                                     
                                        
                                    </CardContent>

                                </Card>               
                            </Grid>
                         
                        ))}
                                
            </StyledGalleryGrid>
            
    
        
      
        

    return res;
}
export default SiteGallery