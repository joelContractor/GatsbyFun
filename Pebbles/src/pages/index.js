import { graphql } from 'gatsby'
import * as React from "react"
import SiteGallery from "../components/siteGallery"
import FrontPageBanner from "../components/frontPageBanner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
import Typography from '@mui/material/Typography'

const IndexPage = ({data}) => (

  

  <Layout>

    <Seo title="Diverse Pool Landing Page" />
      {/* Component */}

    <FrontPageBanner  data={ data.allDatoCmsFrontpagearticle.edges } /> 

    <Grid container sx={{marginBottom:'75px'}} spacing={2}>

      <Grid item xs={12}>
        <p>Diverse Pool</p>
      </Grid>

      <Grid item xs={12} md={6}>
        <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.6)' }}>Recruit from diverse talent pools: In order to hire diverse candidates, you need to consider widening your talent pool. Try proactively sourcing and adding talent from diverse to your talent pool?</p>
      </Grid>

      <Grid item xs={12} md={6}>
        <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.6)' }}>Advertise your jobs through diverse channels: Make an effort to reach diverse candidates by placing your job ads in additional magazines, websites and forums visited by underrepresented groups or dedicated to minorities.</p>
      </Grid>

    </Grid>
    <SiteGallery  data={ data.allDatoCmsActingagency.edges } />
  
    
  </Layout>
)

export const query = graphql`
  query MyLandingPageQuery {
    datoCmsSpectacle {
      spectacleprice
      title
      id
      spectacledescription
      spectacleurl {
        url
        gatsbyImageData
      }
    }
    allDatoCmsActingagency {
      edges {
        node {
          agencydescription
          agencyurl
          agencyimage {
            url
          }
          agencytitle
        }
      }
    }
    allDatoCmsFrontpagearticle {
      edges {
        node {
          id
          articlep9
          articlep8
          articlep7
          articlep6
          articlep5
          articlep4
          articlep3
          articlep2
          articlep15
          articlep14
          articlep13
          articlep12
          articlep11
          articlep10
          articlep1
          articlepwithimage
          articleabouttheauthor
          ability
          age
          cultural
          diversegender
          racial
          religious
          orientation
          title
          spectacleurl {
            url
            gatsbyImageData
          }
          articleimg1 {
            gatsbyImageData
          }
          articleimg2 {
            gatsbyImageData
          }
        }
      }
    }
    allDatoCmsSpectacle {
      edges {
        node {
          title
          spectacleprice
          spectacledescription
          sexualorientation
          sexGenderdiversity
          religiousdiversity
          racialdiversity
          disability
          culturaldiversity
          agediversity
          diverseattribute
          actoragerange
          driver
          gender
          passport
          unionaffiliation
          location
          skill
          skill2
          skill3
          skill4
          skill5
          skill6
          ethnicity
          eyeColour
          hairColour
          hairLength
          height
          weight
          canColourHair
          canCutHair
          canwearcontacts
          tatoos
          visiblepiercings
          writerdescription
          writerdescriptionCopy1
          writerdescriptionCopy2
          writerdescriptionCopy3
          writerprocesstwo
          writerprocessthree
          writerprocessone
          writerprocessfour
          writersixpageprice
          writertwelvepageprice
          availableprojectbriefdescription
          availablescripttype
          availablescriptcost
          agenonactor
          userhistorydescription1
          userhistorydescription2
          userhistorydescription3
          userhistorydescription4
          userhistorytitle1
          userhistorytitle2
          userhistorytitle3
          userhistorytitle4
          userhistorytype1
          userhistorytype2
          userhistorytype3
          userhistorytype4
          userhistoryyear1
          userhistoryyear2
          userhistoryyear3
          userhistoryyear4
          videoreelsrc
          videoreeldescription
          usertel
          useremail
          writerimage {
            gatsbyImageData
          }
          physicalattributeimage {
            gatsbyImageData
          }
          skillimage {
            gatsbyImageData
          }
          spectacleurl {
            url
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default IndexPage
