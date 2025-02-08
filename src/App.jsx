import piazzaLogo from "./imgs/piazza-logo.png";
import Information from "./info";
import LoginForm from "./loginForm";
import NavBar from "./navBar";
import ContactInfo from "../frontend/src/pages/Contact";
export function App() {
  return (
    <>
      <section className="App">
        <div className="left-side">
          <div className="piazza-logo">
            <img src={piazzaLogo} alt="" />
          </div>

          <LoginForm></LoginForm>
        </div>
        <div className="right-side">
          <NavBar></NavBar>
          <Information></Information>
        </div>
      </section>

      <footer>
        <ContactInfo></ContactInfo>
      </footer>
    </>
  );
}
