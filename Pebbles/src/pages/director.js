import { graphql } from 'gatsby'
import * as React from "react"
import GalleryBanner from "../components/galleryBanner"
import SiteGallery from "../components/siteGallery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
import Typography from '@mui/material/Typography'

const DirectorPage = ({data}) => (
  <Layout>
    <Seo title="Diverse Director Page" />

    <GalleryBanner  data={ data.allDatoCmsDirector.edges } /> {/* added -> comp now reusable -> search path added by page uniform field names after search term eg.'data.allDatoCmsActors.edges' */}
    
    <Grid container sx={{marginBottom:'75px'}} spacing={3}>
      <Grid item xs={12}>
          <p>Find Diverse Directors</p>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={{fontSize:"12px"}} variant="body2" color="text.secondary">
            When referring to Lorem ipsum, different expressions are used, namely fill text, fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography style={{fontSize:"12px"}} variant="body2" color="text.secondary">
            When referring to Lorem ipsum, different expressions are used, namely fill text, fictitious text , blind text or placeholder text : in short, its meaning can also be zero, but its usefulness is so clear as to go through the centuries and resist the ironic and modern versions that came with the arrival of the web.
        </Typography>
      </Grid>
    </Grid>

    <SiteGallery  data={ data.allDatoCmsActingagency.edges } />

  </Layout>
)

export const query = graphql`
  query MyDirectorQuery {
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
    allDatoCmsDirector {
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
          userhistorydescription5
          userhistorydescription6
          userhistorytitle1
          userhistorytitle2
          userhistorytitle3
          userhistorytitle4
          userhistorytitle5
          userhistorytitle6
          userhistorytype1
          userhistorytype2
          userhistorytype3
          userhistorytype4
          userhistorytype5
          userhistorytype6
          userhistoryyear1
          userhistoryyear2
          userhistoryyear3
          userhistoryyear4
          userhistoryyear5
          userhistoryyear6
          videoreelsrc
          videoreeldescription
          cultural
          diversegender
          orientation
          religious
          age
          ability
          racial
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

export default DirectorPage
