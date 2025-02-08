import "../styles/navBar.css";

function Navbar() {
  return (
    <div className="navBar-container">
      <div className="navBar-item">
        <a
          href="https://piazza.com/product/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Product
        </a>
      </div>
      <div className="navBar-item">
        <a
          href="https://support.piazza.com/support/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support
        </a>
      </div>
      <div className="navBar-item">
        <a
          href="https://piazza.com/professors"
          target="_blank"
          rel="noopener noreferrer"
        >
          In Professors' Words
        </a>
      </div>
    </div>
  );
}
export default Navbar;
