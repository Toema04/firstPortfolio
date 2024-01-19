import "./header.css"
// import CTA from "./CTA"
import man from "../../../src/assets/man.png"
import HeaderSocial from "./HeaderSocial"


const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'am</h5>
        <h1>Saif Toema</h1>
        <h5 className="text-light">Web Developer</h5>
        {/* <CTA /> */}
        <HeaderSocial/>
        {/* <div className="me"> */}
          <img src={man} alt="man" className="saif" />
        {/* </div> */}
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header