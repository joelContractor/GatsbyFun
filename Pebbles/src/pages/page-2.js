import { graphql } from 'gatsby'
import * as React from "react"
import SiteGallery from "../components/siteGallery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"

const SecondPage = ({data}) => (

  

  <Layout>

    <Seo title="Diverse Artist Page" />
      {/* Component */}
      <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem", fontSize:"1.2rem" }}>Discover Diverse Agencies</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontSize:"0.9rem", color: 'rgba(0, 0, 0, 0.6)' }}>
            Employing diverse actors can add a new dynamic to performances, while helping you gain funding for your project. We proactively collate diverse actors and agencies FREE. Swipe through our selection of featured actors or scroll down to find an agency to work with.
        </p>
      </Grid>

    </Grid>
    <SiteGallery  data={ data.allDatoCmsActingagency.edges } />
  
  </Layout>
)

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
