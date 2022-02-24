import React from "react"
import { StaticImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import { styled } from "@mui/system";

const StyledUserAvailableProjectGrid = styled(Grid, {
    name: "StyledUserAvailableProjectGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"10px", pb:"50px", 
    borderTop:"1px dotted grey",
    ".bold": { fontWeight:"bold" },
    ".normal": { fontWeight:"normal" }

  });





function UserAvailableProject({ dats }) {

    const res =

        <StyledUserAvailableProjectGrid state={{dats}} container>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.availableprojectbriefdescription){
                        return <Grid item xs={8}>
                                
                                <h2>Available Script </h2>
                                <p>{dats.node.availableprojectbriefdescription}</p>
                                <Grid item xs={12} container direction="row" spacing={0}>
                                    
                                    <Grid item xs={12} sm={6} md={3}><p className="bold">Paid: <span className="normal">{dats.node.availablescriptcost}</span></p></Grid>
                                   
                                    <Grid item xs={12} sm={6} md={3}><p className="bold">Type: <span className="normal">{dats.node.availablescripttype}</span></p></Grid>
                                    
                                    
                                </Grid>
                            
                        </Grid>
                    }
                })()}

                {(() => {
                    if(dats.node.availableprojectbriefdescription){
                        return <Grid item xs={4}>
                                
                            <StaticImage
                                src="../images/diverseGenderIcon.png"
                                width={200}
                                quality={95}
                                formats={["AUTO", "WEBP", "AVIF"]}
                                alt="A Gatsby astronaut"
                            />
                            
                        </Grid>
                    }
                })()}
            </Grid>
        </StyledUserAvailableProjectGrid>
        
      
        

    return res;
}
export default UserAvailableProject 