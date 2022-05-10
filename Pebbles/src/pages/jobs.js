import { graphql } from 'gatsby'
import * as React from "react"
//import JobGallery from "../components/jobGallery"
import ResponsiveJobSlider from "../components/responsiveJobGallery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
//import useMediaQuery from "@mui/material/useMediaQuery";


function JobsPage({data}) {
  //const matchesUnder = useMediaQuery('(max-width:600px)');
  
  const res = 
  <Layout>

    <Seo title="Discover Diverse Roles" />
      {/* Component */}
      <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem", fontSize:"1.4rem" }}>Discover Diverse Roles</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontSize:"0.9rem", color: 'rgba(0, 0, 0, 0.6)' }}>
            Employing diverse actors, writers and / or directors is great, production companies want you! Searching can be hard, costly and time-consuming though. We work hard to collate job oppurtunities that you can apply to directly, killing the costly search and saving everyone some time. 
        </p>
      </Grid>

    </Grid>
    {/*{ !matchesUnder && <JobGallery  data={ data.allDatoCmsJob.edges } /> } */}
    <ResponsiveJobSlider  data={ data.allDatoCmsJob.edges } /> 
  
  </Layout>
  return res;
}

export const query = graphql`
  query MyJobsQuery {
    allDatoCmsJob {
        edges {
            node {
                employerEmail
                femalesNeeded
                jobDescription
                jobTitle
                location
                malesNeeded
                endDate
                paid
                characterNeeded8
                characterNeeded7
                characterNeeded6
                characterNeeded5
                characterNeeded4
                characterNeeded3
                characterNeeded2
                characterNeeded1
                jobImage {
                    gatsbyImageData
                }
            }
        }
    } 
  }
`;

export default JobsPage
