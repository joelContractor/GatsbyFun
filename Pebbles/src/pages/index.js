import { graphql } from 'gatsby'
import * as React from "react"
import SiteGallery from "../components/siteGallery"
import FrontPageBanner from "../components/frontPageBanner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"


const IndexPage = ({data}) => (

  

  <Layout>

    <Seo title="Diverse Pool Landing Page" />
      {/* Component */}

    

    <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem" }}>Find Diverse Crew Here</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.4)' }}>
            Employing diverse crew can help you gain funding for your project. We provide you with access to diverse actors and agencies FREE. Swipe through our selection of featured actors or scroll down to find an agency to work with.
        </p>
      </Grid>

    </Grid>

    <FrontPageBanner  data={ data.allDatoCmsFrontpagearticle.edges } /> 

    <Grid container sx={{marginBottom:'20px', padding:"0px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <p style={{ marginBottom:"0rem" }}>How Diversity Helps You</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontFamily:"Arial", fontSize:"12px", color: 'rgba(0, 0, 0, 0.4)' }}>
          Diversity is lucrative. Researchers at UCLA\'s Center for Scholars And Storytellers analyzed over 100 films released from 2016 to 2019. They found that films with diverse characters and authentic stories actually make more money at the box office.
        </p>
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
            gatsbyImageData
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
          articleauthor
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
