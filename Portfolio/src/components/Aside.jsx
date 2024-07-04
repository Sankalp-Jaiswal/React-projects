import Img from "../../public/images/mamun.jpg"
import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi"

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
            <figure className="avatar-box">
                <img src={Img} alt="" width="80" />
            </figure>
            <div className="info-content">
                <h1 className="name">Sankalp Jaiswal</h1>
                <p className="title">Web Developer</p>
            </div>
            <button className="info_more-btn">
                <span>Show Contact</span>
                <GiClawSlashes/>
            </button>
        </div>
        <div className="sidebar-info_more">
            <hr className="separator2" />
            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                        <GiMailbox/>
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Email</p>
                        <a className="contact-link" href="mailto:sankalpjaiswal264@gamil.com">sankalpjaiswal264@gamil.com</a>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <GiPhone/>
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <a className="contact-link" href="tel:+8303584456">+91 8303584456</a>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <GiCalendar/>
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Birthday</p>
                        <time dateTime="2003-10-02" className="contact-link" >October 02, 2003</time>
                    </div>
                </li>

                <li className="contact-item">
                    <div className="icon-box">
                        <GiMailbox/>
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">Location</p>
                        <address  >Dewa Shareef, Barabanki, Uttar Pradesh</address>
                    </div>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Aside