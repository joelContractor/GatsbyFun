import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header style={ {float:`left`, background: `#1A2421`, marginBottom: `0rem`, width:`100%`} }>
    <div style={ {margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`,} }>
      <div style={{ float:`left`, marginRight:`5px` }}>
        <StaticImage
            src="../images/diverseGenderIcon.png"
            width={30}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `0px` }} 
        />
      </div>
      <h1 style={ { margin: 0, float:`left` } }>
        <Link to="/" style={ {float:`left`, color: `white`,textDecoration: `none`, textShadow:`2px 1px black`} }> {siteTitle} </Link>
      </h1>
      <h2 style={{ float:`right`, textAlign:`right` }}>
        <Link to="/artist/" style={ {color: `#d3d3d3`,textDecoration: `none`, textShadow:`2px 1px black`} }> actors </Link>
        <Link to="/" style={ {color: `white`,textDecoration: `none`, textShadow:`2px 1px black`} }> crew </Link>
        <Link to="/" style={ {color: `#d3d3d3`,textDecoration: `none`, textShadow:`2px 1px black`} }> writers </Link>
        <Link to="/" style={ {color: `#d3d3d3`,textDecoration: `none`, textShadow:`2px 1px black`} }> directors </Link>
      </h2>
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
