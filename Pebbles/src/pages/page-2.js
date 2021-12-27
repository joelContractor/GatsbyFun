import { graphql } from 'gatsby'
import * as React from "react"
import GalleryBanner from "../components/galleryBanner"
import SiteGallery from "../components/siteGallery"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
import Typography from '@mui/material/Typography'

const SecondPage = ({data}) => (

  <Layout>

    <Seo title="Diverse Artist Page" />
      {/* Component */}
    <GalleryBanner  data={ data.allDatoCmsSpectacle.edges } /> {/* added -> comp now reusable -> search path added by page uniform field names after search term eg.'data.allDatoCmsActors.edges' */}
    <Grid container sx={{marginBottom:'75px'}} spacing={2}>
      <Grid item xs={12}>
          <h2>Find Diverse Artists</h2>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" color="text.secondary">
            <p>Recruit from diverse talent pools: In order to hire diverse candidates, you need to consider widening your talent pool. Try proactively sourcing and adding talent from diverse to your talent pool?</p>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body2" color="text.secondary">
            <p>Advertise your jobs through diverse channels: Make an effort to reach diverse candidates by placing your job ads in additional magazines, websites and forums visited by underrepresented groups or dedicated to minorities.</p>
        </Typography>
      </Grid>
    </Grid>
    <SiteGallery  data={ data.allDatoCmsActingagency.edges } />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/kiyi-C7NQrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </Layout>
)

export const query = graphql`
  query MyQuery {
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
          agencyimage {
            url
          }
          agencytitle
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

export default SecondPage
