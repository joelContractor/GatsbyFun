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
  <header style={ {float:`left`, background: `#1A2421`, marginBottom: `0rem`, width:`100%`, paddingBottom:"0px"} }>
    <div style={ {margin: `0 auto`, maxWidth: 3800, padding: `0.8rem 1.0875rem`} }>
    { matches && <div style={{ float:`left`, marginRight:`5px`, marginTop:"1px", width:"26px" }}>
       <Link to="/" >
          <StaticImage
              src="../images/bt.png"
              width={26}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Diverse Crew Image."
              style={{ marginBottom: `0px` }} 
          />
        </Link> 

        

      </div> }

      { !matches && <>
        <div style={{ width:"26px", margin:"0 auto" }}>
          <Link to="/" >
            <StaticImage
                src="../images/bt.png"
                width={26}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Diverse Crew Image."
                style={{ marginBottom: `0px` }} 
            />
          </Link>
          
        </div> 
        <div style={{ width:"100px", margin:"0 auto", textAlign:"center"}}>
          <Link to="/" style={ {color: `white`, textDecoration: `none`, marginTop:'35px'} }> <h1 style={{ fontSize:"0.8rem", fontFamily:"georgia", fontWeight:"normal", marginTop:"0rem", marginBottom:"0.7rem"  }}>{siteTitle}</h1> </Link> 
        </div>
      </>
      }


      { matches && <Link to="/" style={ {float:`left`, color: `white`, textDecoration: `none`, marginTop:'15px'} }> <h1 style={{ fontSize:"0.8rem", fontFamily:"georgia", fontWeight:"normal", marginTop:"0rem" }}>{siteTitle}</h1> </Link> }
 
      { matches && <>
        <div style={{ float:`right`, textAlign:`right`, marginTop:"10px", fontSize: '0.8rem', paddingRight:"0.5rem", paddingBottom:"1rem" }}>

        <Link to="/" activeStyle={{ color: "#d55e5e" }} style={ {color: `#fff`, textDecoration: `none`, paddingRight:"0.5rem" } }> news </Link>
        <Link to="/artist/" activeStyle={{ color: "#d55e5e" }} style={ {color: `#fff`, textDecoration: `none`, paddingRight:"0.5rem" } }> actors </Link> 
        <Link to="/writer/" activeStyle={{ color: "#d55e5e" }} style={ {color: `#fff`, textDecoration: `none`} }> writers </Link>
        <Link to="/director/" activeStyle={{ color: "#d55e5e" }} style={ {color: `#fff`, textDecoration: `none`, paddingLeft:"0.5rem"} }> directors </Link>
        <Link to="/page-2/" activeStyle={{ color: "#d55e5e" }} style={ {color: `#fff`, textDecoration: `none`, paddingLeft:"0.5rem"} }> agencies </Link>
        </div>
        </> 
      }
      { !matches && <>
        <div style={{ position:"absolute", top:"35px", right:"30px", marginTop:"0px", fontSize: '0.8rem', paddingRight:"0rem", paddingBottom:"0rem" }}>
          <button  aria-label="Menu" style={{ cursor:"pointer", background:"none", border:"none", color:"white", paddingRight:"0rem", paddingTop:"0px", marginTop:"1px", paddingBottom:"0px"}}  className="mobile" onClick={showInfo}>
            <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"25px", marginTop:"0px"}}></div>
            <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"25px", marginTop:"8px" }}></div>
            <div className="mobileNav" style={{ border:"1px solid white", background:"white", borderRadius:"5px", width:"25px", marginTop:"8px" }}></div>
          </button>
        </div>
      </> }
      
      <div style={{ clear:"both", textAlign:`right`, marginBottom:"0rem", marginRight:"4px", fontSize: '0.8rem', display:show === 'none'? `none`: `block`, paddingTop: "1.5rem" }}>
        <Link to="/" activeStyle={{ color: "#d55e5e" }} style={ {width:'100%', float:'right', padding:"10px 5px 10px 5px", borderBottom:"1px dotted hsla(0,0%,50%,0.1)", color: `#fff`,textDecoration: `none`} }> News </Link>
        <Link to="/artist/" activeStyle={{ color: "#d55e5e" }} style={ {width:'100%', float:'right', padding:"10px 5px 10px 5px", borderBottom:"1px dotted hsla(0,0%,50%,0.1)", color: `#fff`,textDecoration: `none`} }> Actors </Link>
        <Link to="/writer/" activeStyle={{ color: "#d55e5e" }} style={ {width:'100%', float:'right', padding:"10px 5px 10px 5px", borderBottom:"1px dotted hsla(0,0%,70%,0.1)", color: `#fff`, textDecoration: `none`} }> Writers </Link>
        <Link to="/director/" activeStyle={{ color: "#d55e5e" }} style={ {width:'100%', float:'right', padding:"10px 5px 10px 5px", borderBottom:"1px dotted hsla(0,0%,50%,0.1)", color: `#fff`, textDecoration: `none`} }> Directors </Link>
        <Link to="/page-2/" activeStyle={{ color: "#d55e5e" }} style={ {width:'100%', float:'right', padding:"10px 5px 10px 5px", color: `#fff`, textDecoration: `none`} }> Agencies </Link>
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
