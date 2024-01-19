import "./contact.css"
// import {MdOutlineMail} from "react-icons/md"
import {RiGithubLine} from "react-icons/ri"
import {BsTwitterX, BsWhatsapp} from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      {/* <div className="container contact-container"> */}
        <div className="contact-options">
          <article className="contact-option">
            <FaLinkedinIn className="contact-option-icon"/>
            <h4>LinkedinIn</h4>
              <a href="https://www.linkedin.com/in/seif-teima-0102a2253/" target="_blank">Send a Massage</a>
        </article>
          <article className="contact-option">
            <RiGithubLine className="contact-option-icon"/>
            <h4>Github</h4>
            <a href="https://github.com/Toema04" target="_blank">Send a Massage</a>
        </article>
          <article className="contact-option">
            <BsTwitterX className="contact-option-icon"/>
            <h4>X</h4>
            <a href="https://twitter.com/STo3ima" target="_blank">Send a Massage</a>
        </article>
        </div>
        {/* end of contact options */}
        {/* <form >
          <input type="text" name="name" placeholder="Full Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="massage" rows="7" placeholder="Your Massage" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Massage</button>
        </form> */}
      {/* </div> */}
    </section>
  )
}

export default Contact