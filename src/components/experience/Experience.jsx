import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Exerience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container expreience-container">
        <div className="experience-forntend">
          <h3>Frontend Development</h3>
          <div className="exprience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div>
              <h4>Html</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div><h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div>
              <h4>Githup</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-details-icons"/>
              <div>
                <h4>React</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exerience