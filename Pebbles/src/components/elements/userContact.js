import React from "react"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';






function UserContact({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"100px", borderTop:"1px dotted grey"}}>
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", mb:`35px` }}>
                <h2>Contact {dats.node.title}</h2>
            </Grid>
            <Grid container direction="row" spacing={6}>
                {(() => {
                    if(dats.node.videoreelsrc){
                        return <>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                                <a style={{ textDecoration: `none` }} href={"mailto:" + `${dats.node.useremail}` + "?cc=admin@diversepool.com&&subject=Diverse-Pool-Mail&body=Body-goes-here"}>
                                    <Button style={ { width:`160px`, textTransform: `none`, paddingTop:`65px`, paddingBottom:`65px`, borderRadius: `100px`, color: `rgba(22, 160, 133, 1)`, fontWeight: `italic`, border: `1px solid rgba(22, 160, 133, 1)` }}>
                                        Email
                                    </Button>
                                </a>
                            </Grid>
                        </>
                    }
                })()}

                {(() => {
                    if(dats.node.videoreelsrc){
                        return <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
                            <a style={{ textDecoration: `none`}} href={"tel:" + `${dats.node.usertel}`}>
                                <Button sx={ { width:`160px`,textTransform: `none`, paddingTop:`65px`, paddingBottom:`65px`, borderRadius: `1000px`, color: `rgba(175, 65, 84, 0.8)`, fontWeight: `italic`, border: `1px solid rgba(175, 65, 84, 0.8)`}}>
                                    Call
                                </Button>
                            </a>
                        </Grid>
                    }
                })()}
            </Grid> 

        </Grid>
        
      
        

    return res;
}
export default UserContact