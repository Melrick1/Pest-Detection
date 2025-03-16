import { useState } from "react";
import MyNavBar from "./MyNavbar";

function MyHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const burgerClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="hamburger-list">
        {navOpen ? (
          <MyNavBar burgerClick={burgerClick} />
        ) : (
          <i className="bi bi-list" onClick={burgerClick}></i>
        )}
      </div>
      <h3 className="header-title">Home</h3>
    </header>
  );
}

export default MyHeader;