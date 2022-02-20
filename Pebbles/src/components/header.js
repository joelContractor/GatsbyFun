import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useMediaQuery from "@mui/material/useMediaQuery"


function Header ({ siteTitle }) {

  const matches = useMediaQuery('(min-width:600px)');

  const [show, setShow] = useState('none')

  function showInfo(){
      if(show ==='none'){
          setShow('block');
      }else{setShow('none');}
  }

  const res = 
  <header style={ {float:`left`, background: `#1A2421`, marginBottom: `0rem`, width:`100%`} }>
    <div style={ {margin: `0 auto`, maxWidth: 900, padding: `1.45rem 1.0875rem`} }>
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
        <Link to="/" style={ {float:`left`, color: `white`, textDecoration: `none`, textShadow:`2px 1px black`, marginTop:'5px'} }> {siteTitle} </Link>
 
      <p style={{ float:`right`, textAlign:`right`, marginTop:"5px", fontSize: '1rem' }}>
      { matches && <><Link to="/artist/" activeStyle={{ color: "red" }} style={ {color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`} }> actors </Link> 
        <Link to="/writer/" activeStyle={{ color: "red" }} style={ {color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`} }> writers </Link>
        <Link to="/director/" activeStyle={{ color: "red" }} style={ {color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`} }> directors </Link></> 
      }
      { !matches && <button  style={{ cursor:"pointer", background:"none", border:"none", color:"white", paddingRight:"0.5rem"}}  className="mobile" onClick={showInfo}>
        <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"30px", marginTop:"0px" }}></div>
        <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"30px", marginTop:"8px" }}></div>
        <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"30px", marginTop:"8px" }}></div>
      </button> }
      </p>
      <div style={{ clear:"both", textAlign:`right`, paddingTop:"5px", marginBottom:"0rem", marginRight:"4px", fontSize: '1rem', display:show === 'none'? `none`: `block` }}>
        <Link to="/artist/" activeStyle={{ color: "red" }} style={ {padding:"10px 5px 10px 5px", borderRight:"1px dotted white", color: `#fff`,textDecoration: `none`, textShadow:`2px 1px black`, paddingRight:"1rem"} }> actors </Link>
        <Link to="/writer/" activeStyle={{ color: "red" }} style={ {padding:"10px 5px 10px 5px", borderRight:"1px dotted white", color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`, paddingLeft:"1rem", paddingRight:"1rem"} }> writers </Link>
        <Link to="/director/" activeStyle={{ color: "red" }} style={ {padding:"10px 5px 10px 5px", color: `#fff`, textDecoration: `none`, textShadow:`2px 1px black`, paddingLeft:"1rem"} }> directors </Link>
      </div>
    </div>
  </header>

  return res;
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
