import Form from '../components/Form'
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

import "../styles/loginStyle.css"
import "../styles/app.css"

import piazzaLogo from "../assets/piazza-logo.png";

function Register() {
    return <>
    <section className="App">
      <div className="left-side">
        <div className="piazza-logo">
          <img src={piazzaLogo} alt="" />
        </div>

        <Form route="/api/user/register" method="register" />
      </div>
      <div className="right-side">
        <Navbar />
        <Info />
      </div>
    </section>

    <footer>
      <Contact />
    </footer>
  </>
}

export default Register