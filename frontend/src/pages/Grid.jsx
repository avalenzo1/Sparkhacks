
function GridInformation() {
    return (
      <header className="header-container">
        <div className="icons-container">
          {icons1.map((icon, index) => (
            <img key={index} src={icon} alt="" />
          ))}
        </div>
  
        <div className="search-bar">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Type here to search a question"
          />
          <button className="search-bttn">
            <img src={searchIcon} alt="" />
          </button>
        </div>
  
        <div className="icons-container">
          {icons2.map((icon, index) => (
            <img key={index} src={icon} alt="" />
          ))}
        </div>
  
        <div className="user-container">
          <div className="pfp-container">
            <img src={pfp} alt="" />
          </div>
          <div className="user-name">
            <a href="#">{userName}</a>
          </div>
        </div>
  
        <div className="piazza-container">
          <img src={piazzaLogo} alt="" />
        </div>
      </header>
    );
  }
  export default GridInformation;