import React from "react"
/*import { Link } from "gatsby"*/
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import { styled } from "@mui/system";

const StyledUserContactGrid = styled(Grid, {
    name: "StyledUserContactGrid",
    slot: "Wrapper",
  })({
    paddingTop:"100px", 
    marginTop:"11px", 
    paddingBottom:"100px", 
    borderTop:"1px dotted grey",
    ".userContactTitle": { display: "flex", justifyContent: "center", marginBottom:`35px` },
    ".userContactTypeContainer": { display: "flex", justifyContent: "center" },
    ".link": { textDecoration: `none` },
    ".contactButton": { width:`160px`, textTransform: `none`, paddingTop:`65px`, paddingBottom:`65px`, borderRadius: `100px`, color: `rgba(22, 160, 133, 1)`, fontWeight: `italic`, border: `1px solid rgba(22, 160, 133, 1)` },

  });





function UserContact({ dats }) {

    const res =

        <StyledUserContactGrid state={{dats}} container>
            <Grid className="userContactTitle" item xs={12}>
                <h2>Contact {dats.node.title}</h2>
            </Grid>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.videoreelsrc){
                        return <>
                            <Grid item xs={6} className="userContactTypeContainer">
                                <a className="link" href={"mailto:" + `${dats.node.useremail}` + "?cc=admin@diversepool.com&&subject=Diverse-Pool-Mail&body=Body-goes-here"}>
                                    <Button className="contactButton">
                                        Email
                                    </Button>
                                </a>
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.videoreelsrc){
                        return <Grid item xs={6} className="userContactTypeContainer">
                            <a className="link" href={"tel:" + `${dats.node.usertel}`}>
                                <Button className="contactButton">
                                    Call
                                </Button>
                            </a>
                        </Grid>
                    }
                })()}
            </Grid> 

        </StyledUserContactGrid>
        
      
        

    return res;
}
export default UserContact