import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserVideoPortfolioGrid = styled(Grid, {
    name: "StyledUserVideoPortfolioGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", 
    paddingBottom:"100px",
    borderTop:"1px dotted grey",
    ".videoContainer": { position: 'relative', paddingBottom: '56.25%', height: 0  },
    ".video": { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', paddingLeft: '2.7rem' }

  });





function UserVideoPortfolio({ dats }) {

    const res =

        <StyledUserVideoPortfolioGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.videoreelsrc){
                        return <>
                            <Grid item xs={12}>
                                
                                <h2>My Reel</h2>
                                <p>{dats.node.videoreeldescription}</p>
                                  
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.videoreelsrc){
                        return <Grid xs={12} className="videoContainer">
                            <iframe loading="lazy" className="video" src={dats.node.videoreelsrc} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
                            </iframe>    
                        </Grid>
                    }
                })()}
            </Grid> 

        </StyledUserVideoPortfolioGrid>
        
      
        

    return res;
}
export default UserVideoPortfolio