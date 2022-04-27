import { graphql } from 'gatsby'
import * as React from "react"
import ArticleGallery from "../components/articleGallery"
import ResponsiveArticleSlider from "../components/responsiveArticleSlider"
import FrontPageBanner from "../components/frontPageBanner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Grid } from "@material-ui/core"
import useMediaQuery from "@mui/material/useMediaQuery"


function IndexPage({data}) {
  const matchesUnder = useMediaQuery('(max-width:600px)');
  const res =

  <Layout>

    <Seo title="Diverse Crew News" />
      {/* Component */}

    

    <Grid container sx={{marginBottom:'10px', padding:"20px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <h2 style={{ marginBottom:"0rem", fontSize:"1.4rem", fontFamily:"georgia", fontWeight:"normal" }}>Diverse Crew News</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontSize:"0.9rem", color: 'rgba(0, 0, 0, 0.6)' }}>
          Insightful, thoughtful, creative read anyone? We feature articles written by diverse writers, performers and crew from the TV, Film and Theatre industries, allowing the honest opinions of those at root-level to be heard.  
        </p>
      </Grid>

    </Grid>

    <FrontPageBanner  data={ data.allDatoCmsFrontpagearticle.edges } /> 

    <Grid container sx={{marginTop:"3rem", marginBottom:'2.5rem', padding:"0px 10px 0px 10px"}} spacing={3}>
      <Grid item xs={12}>
          <h2 style={{ marginBottom:"0rem", fontSize:"1.4rem", fontFamily:"georgia", fontWeight:"normal" }}>Diversity In The News</h2>
      </Grid>
      <Grid item xs={12} md={12}>
        <p style={{ fontSize:"0.9rem", color: 'rgba(0, 0, 0, 0.6)', marginBottom:"0px" }}>
          We collate and provide links to interesting articles about diversity in the TV, Film, Movie and Theatre sectors. Hopefully we can help shed light on a few issues, while pointing you to a good read. 
        </p>
      </Grid>

    </Grid>

    { !matchesUnder && <ArticleGallery  data={ data.allDatoCmsDiversityarticle.edges } /> }
    { matchesUnder && <ResponsiveArticleSlider  data={ data.allDatoCmsDiversityarticle.edges } /> }
  
  </Layout>
  
  return res;
}

export const query = graphql`
  query MyLandingPageQuery {
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
            gatsbyImageData(width: 420)
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
            gatsbyImageData(width: 1000)
          }
          articleimg1 {
            gatsbyImageData(width: 1000)
          }
          articleimg2 {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
    allDatoCmsDiversityarticle {
      edges {
        node {
          articledescription
          articleimage {
            gatsbyImageData
          }
          articletitle
          articleurl
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

export default IndexPage
