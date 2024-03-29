import { graphql } from 'gatsby'
import * as React from "react"
import SiteGallery from "../components/siteGallery"
import ResponsiveSiteSlider from "../components/responsiveSiteSlider"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
import useMediaQuery from "@mui/material/useMediaQuery";


function SecondPage({data}) {
  const matchesUnder = useMediaQuery('(max-width:600px)');
  
  const res = 
  <Layout>

    <Seo title="Diverse Agency Page" />
      {/* Component */}
      <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem", fontSize:"1.4rem" }}>Discover Diverse Agencies</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontSize:"0.9rem", color: 'rgba(0, 0, 0, 0.6)' }}>
            Employing diverse actors can add a new dynamic to performances, while helping you gain funding for your project. We proactively collate diverse actors and agencies FREE. Browse our selection of featured agencies.
        </p>
      </Grid>

    </Grid>
    { !matchesUnder && <SiteGallery  data={ data.allDatoCmsActingagency.edges } /> }
    { matchesUnder && <ResponsiveSiteSlider  data={ data.allDatoCmsActingagency.edges } /> }
  
  </Layout>
  return res;
}

export const query = graphql`
  query MyQuery {
    allDatoCmsActingagency {
      edges {
        node {
          agencydescription
          agencyurl
          agencyimage {
            url
            gatsbyImageData(width: 450)
          }
          agencytitle
        }
      }
    } 
  }
`;

export default SecondPage
