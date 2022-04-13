import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledUserVideoPortfolioGrid = styled(Grid, {
    name: "StyledUserVideoPortfolioGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"100px",
    borderTop:"1px dotted grey",
    ".videoContainer": { position: 'relative', left: 0, paddingBottom: '56.25%', height: 0  },
    ".video": { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', paddingLeft: '2.7rem' },
    ".grey": { color:"rgba(0,0,0,0.5)" },
    ".paddedVideoReelRelatedContent": { marginLeft:"0px", marginRight:"0px"},
    ".yt-lite > .lty-playbtn, .yt-lite > .lty-playbtn::before": { left:"50%" },
    ".yt-lite, .yt-lite::before": { borderRadius: "5px" }
  });





function UserVideoPortfolio({ dats }) {
    const matches = useMediaQuery('(max-width:600px)');
    var space = `1.45rem`;
    if(matches){space = `0`}

    const res =

        <StyledUserVideoPortfolioGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.videoreelsrc){
                        return <>
                            <Grid className="paddedVideoReelRelatedContent" item xs={12}>
                                
                                <h2>Showreel</h2>
                                <p className="grey" style={{marginBottom:0}}>{dats.node.videoreeldescription}</p>
                                  
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.videoreelsrc){
                        return <Grid item xs={12} className="videoContainer">
  
                            <LiteYouTubeEmbed 
                                className="video" 
                                id={dats.node.videoreelsrc}
                                adNetwork={true}
                                params="" 
                                playlist={false} 
                                playlistCoverId="L2vS_050c-M" 
                                poster="hqdefault" 
                                title="Users Reel" 
                                noCookie={true}
                                style={{borderRadius: "5px"}}
                            />

                        </Grid>
                    }
                })()}
            </Grid> 

        </StyledUserVideoPortfolioGrid>
        
      
        

    return res;
}
export default UserVideoPortfolio