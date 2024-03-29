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
    ".infoCard": { margin:'0 auto', maxWidth:"380px", willChange:"transform", borderRadius:"20px", overFlow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".cardButton": { textTransform: `none`, color:"white", fontWeight:"normal", fontSize:"0.8rem", width:"100%", textAlign:"center", border: "1px white solid", marginBottom:"0px", background: "rgb(26, 36, 33)", padding: "25px 10px 20px 15px", borderBottomRightRadius: "0px", borderBottomLeftRadius:"0px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" },
    ".cardButton:hover": { background: "rgb(26, 36, 33)", color:"orange" },
    ".cardMediaArea": {  height:"190px", marginBottom:"0px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" },
    ".cardButtonBottom":{ fontFamily: 'Georgia', width: "auto", padding: "20px 15px", borderRadius: "10px", fontSize:"0.8rem", color: "#719fb2", background: "rgba(129, 184, 207, 0.2)", border:'none', fontWeight:"normal", alignSelf: "end", marginTop:"20px", height:'64px', textShadow: '1px 1px 1px rgb(255,255,255,0.9)'},
    ".cardButtonBottom:hover": { background:"#719fb2", color:"white", textShadow: 'none' },
    ".cardContentArea": { background:"white", borderBottomLeftRadius: "3px", borderBottomRightRadius: "3px", display: "flex", flexDirection: "row" },
    ".cardContentPara": { fontFamily: 'Arial', fontSize:"0.6rem", color: "#808080", marginBottom:"0px", maxHeight:"80px", lineHeight:"1rem" },
    ".MuiCardContent-root:last-child": { paddingBottom:"25pxpx" },
    ".buttonContainer": { display:"flex", justifyContent:"flex-end", marginTop: "0px" },
    ".cardTitle": { marginBottom:"0.01rem", color: `#141414`, fontSize:"0.8rem" },
    ".safariRounded": { willChange:"transform", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" }
    
  });

function ArticleGallery({ data }) {

    const res =

            <StyledGalleryGrid container direction="row" spacing={3} >
                
                        {data.map((dats) => (
                               
                            <Grid key={dats.node.articletitle} item xs={12} sm={6} md={4} lg={4} state={dats} >
                                
                                <Card className="infoCard">

                                    <Grid item xs={12} className="safariRounded">
                                        <GatsbyImage className="cardMediaArea" image={getImage(dats.node.articleimage.gatsbyImageData)} alt={dats.node.agencytitle}/>
                                    </Grid>

                                    <CardContent
                                        className="cardContentArea"
                                    >
                                      
                                            <Grid item xs={8}>
                                                <p className="cardTitle">
                                                    {dats.node.articletitle}
                                                </p>
                                                <p className="cardContentPara">
                                                    {dats.node.articledescription}
                                                </p>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <div className="buttonContainer">
                                                    
                                                    <Button href={dats.node.articleurl} target="_blank" className="cardButton cardButtonBottom">
                                                        Visit
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
export default ArticleGallery