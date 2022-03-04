import { graphql } from 'gatsby'
import * as React from "react"
import GalleryBanner from "../components/galleryBanner"
import SiteGallery from "../components/siteGallery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"


const WriterPage = ({data}) => (
  <Layout>
    <Seo title="Diverse Writer Page" />

    <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
        <Grid item xs={12}>
            <p style={{ marginBottom:"0rem" }}>Find Diverse Writers</p>
        </Grid>
        <Grid item xs={12} md={12}>
          <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.6)' }}>
              Employing diverse writers can add a new dynamic to performances, while helping you gain funding for your project. We provide you with access to diverse writers and agencies FREE. Swipe through our selection of featured actors or scroll down to find an agency to work with.
          </p>
        </Grid>

      </Grid>

    <GalleryBanner  data={ data.allDatoCmsWriter.edges } /> {/* added -> comp now reusable -> search path added by page uniform field names after search term eg.'data.allDatoCmsActors.edges' */}
    
    <Grid container sx={{marginBottom:'20px', padding:"0px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem" }}>Find Diverse Agencies</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.6)' }}>
            Haven't found the perfect writer? We continually look out for and add the best agencies to our list below.
        </p>
      </Grid>

    </Grid>

    <SiteGallery  data={ data.allDatoCmsActingagency.edges } />

  </Layout>
)

export const query = graphql`
  query MyWriterQuery {
    datoCmsSpectacle {
      spectacleprice
      title
      id
      spectacledescription
      spectacleurl {
        url
        gatsbyImageData(width: 1000)
      }
    }
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
    allDatoCmsWriter {
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
            gatsbyImageData(width: 600)
          }
          physicalattributeimage {
            gatsbyImageData(width: 600)
          }
          skillimage {
            gatsbyImageData(width: 600)
          }
          spectacleurl {
            url
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;

export default WriterPage
