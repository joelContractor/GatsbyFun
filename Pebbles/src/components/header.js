import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) => (
  <header style={ {float:`left`, background: `#1A2421`, marginBottom: `0rem`, width:`100%`} }>
    <div style={ {margin: `0 auto`, maxWidth: 900, padding: `1.45rem 1.0875rem`,} }>
      <div style={{ float:`left`, marginRight:`5px`, marginTop:"3px" }}>
        <StaticImage
            src="../images/diverseGenderIcon.png"
            width={30}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `0px` }} 
        />
      </div>
      <p style={ { margin: 0, float:`left` } }>
        <Link to="/" style={ {float:`left`, color: `white`, textDecoration: `none`, textShadow:`2px 1px black`, marginTop:'5px'} }> {siteTitle} </Link>
      </p>
      <p style={{ float:`right`, textAlign:`right`, marginTop:"7px", fontSize: '14px' }}>
        <Link to="/artist/" activeStyle={{ color: "red" }} style={ {color: `#fff`,textDecoration: `none`, textShadow:`2px 1px black`} }> actors </Link>
        <Link to="/writer/" activeStyle={{ color: "red" }} style={ {color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`} }> writers </Link>
        <Link to="/director/" activeStyle={{ color: "red" }} style={ {color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`} }> directors </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
