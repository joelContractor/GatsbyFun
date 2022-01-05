import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*import { Link } from "gatsby"*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid } from "@material-ui/core";






function UserWriterDescription({ dats }) {

    const res =

        <Grid state={{dats}} container sx={{pt:"100px", mt:"10px", pb:"50px", borderTop:"1px dotted grey"}}>
            <Grid container direction="row" spacing={6}>
                    {(() => {
                        if(dats.node.writerdescription){
                            return <>
                                <Grid item xs={12}>
                                    
                                    <h2>{dats.node.title}</h2>
                                
                                </Grid>
                                <Grid item xs={8}>

                                    <p>{dats.node.writerdescription}</p>
                                    <p>{dats.node.writerdescriptionCopy1}</p>
                                    <p>{dats.node.writerdescriptionCopy2}</p>
                                    <p>{dats.node.writerdescriptionCopy3}</p>
                                
                                </Grid>
                            </>
                        }
                    })()}
                    
                    {(() => {
                            if(dats.node.writerimage){
                                return <Grid item xs={4}>
                                        
                                    <GatsbyImage image={getImage(dats.node.writerimage.gatsbyImageData)} alt={"testimage"}/>
                                    
                                </Grid>
                        }
                    })()}
            </Grid> 
        </Grid>
        
      
        

    return res;
}
export default UserWriterDescription 