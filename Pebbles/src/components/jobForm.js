import React from "react";
import { Grid } from "@material-ui/core";
import Button from '@mui/material/Button';
import { styled } from "@mui/system";


const StyledJobFormGrid = styled(Grid, {
    name: "StyledJobFormGrid",
    slot: "Wrapper",
  })({
    fontSize:`13px`,
    fontFamily:`Arial`,
    ".buttonContainer": { marginTop: "0px" },
    ".safariRounded": { willChange:"transform", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", overflow:"hidden", webkitBackfaceVisibility: "hidden", mozBackfaceVisibility: "hidden", webkitTransform: "translate3d(0, 0, 0)", mozTransform: "translate3d(0, 0, 0)", webkitMaskImage: "webkitRadialGradient(white, black)" },
    ".monowidth": { width:"100%", borderRadius:"5px", marginBottom:"1rem", marginTop:"0.2rem" },
    ".formWidth": { width:"50%", margin:"0 auto", background:"rgb(26, 36, 33) none repeat scroll 0% 0%", padding:"1rem", borderRadius:"20px", marginTop:"2rem" },
    ".white": { color:"white", marginTop:"1rem" },
    ".left": { textAlign:"left" },
    ".seperator": { marginTop:"3rem" },
    
  });

function JobForm({ data }) {
   
    const res =

        

 
            <StyledJobFormGrid container direction="row" spacing={3} >
                            
                            <>

                            <form className="formWidth" name="Contact Form" method="POST" netlify-honeypot="entryField" data-netlify="true">
                                <input type="hidden" name="form-name" value="Contact Form" />
                                <Grid xs={12}>
                                    <h3 className="white">Apply</h3>
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="email" >Your Email:<input className="monowidth" placeholder="you@gmail.com"type="email" name="email" id="email" required/></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{ display:"none" }}>
                                    <label className="white" htmlFor="entryField" >Your Key:<input className="monowidth" placeholder="your-secret-userkey" type="text" name="entryField" id="entryField" /></label>
                                    
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="" >Your Profile URL:<input className="monowidth" placeholder="you@imdb.com" type="text" name="profile-url" id="profile-url" required/></label>
                                    
                                </Grid>
                                <Grid xs={12} className="left">
                                    <label className="white" htmlFor="message" >Message:<textarea className="monowidth" placeholder="Hello, my name is example-name, I am interested in your advertised job role." name="message" id="message" required/></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{ marginBottom:"1rem", textAlign:"center" }}>
                                    <p className="monowidth white" style={{ marginTop:"0.3rem" }}>Please be patient while awaiting a response.</p>
                                </Grid>
                                <Grid xs={12} style={{display:"none"}}>
                                    <label htmlFor="employer-email" >Employer Email:<input className="monowidth" type="password" name="employer-email" id="employer-email" value={data} /></label>
                                    
                                </Grid>
                                <Grid xs={12} style={{textAlign:"center", marginBottom:"0.3rem"}}>
                                    <Button style={{ borderRadius:"50px", padding:"1.3rem 1rem", background:"white", color:"black", fontSize:"0.5rem" }} type="submit">Send</Button>
                                </Grid>
                                
                            </form>

                            </>
                         
                     
                                
            </StyledJobFormGrid>
            
    
        
      
        

    return res;
}
export default JobForm