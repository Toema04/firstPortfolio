import "./about.css";
// import man3 from "../../images/man3.jpg"
import { FaAward } from "react-icons/fa";
// import {FiUsers} from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
	return (
		<section id="about">
			<h5>Get To Khnow</h5>
			<h2>About Me</h2>

			<div className="container about-container">
				{/* <div className="about-me">
          <div className="about-me-image">
            {/* <img src={man3} alt="About Me" /> 
          </div>
        </div> */}
				<div className="about-content">
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Experience</h5>
							<small>2+ Years Working</small>
						</article>

						{/* <article className="about-card">
              <FiUsers className="about-icon"/>
              <h5>Clintes</h5>
              <small>100+ Worldwide</small>
            </article> */}

						<article className="about-card">
							<VscFolderLibrary className="about-icon" />
							<h5>Projects</h5>
							<small>15+ Completed</small>
						</article>
					</div>
					<p>My name is saif Toema and I'm Front-End Developer</p>
					<a href="https://github.com/Toema04" className="btn btn-primary">
						let's See
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
