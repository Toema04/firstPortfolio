import "./services.css"
import {BsCheck} from "react-icons/bs"

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end ui/ux */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
          </article>
        {/* end web development */}
        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service-list-icons" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end ui/ux */}
      </div>
    </section>
  )
}

export default Services