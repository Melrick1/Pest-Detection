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
        {!navOpen ? (
          <i className="hamburger-icon bi bi-list" onClick={burgerClick}></i>
        ) : (
          <>
            <i className="hamburger-icon bi bi-chevron-double-left" onClick={burgerClick}></i>
            <MyNavBar/>
          </>
        )}
      </div>
      <h3 className="header-title">Beranda</h3>
    </header>
  );
}

export default MyHeader;