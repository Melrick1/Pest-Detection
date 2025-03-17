import { useState } from "react";
import MyNavBar from "./MyNavbar";

function MyHeader() {
  const [navOpen, setNavOpen] = useState(false);

  const burgerClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="hamburger-list" onClick={burgerClick}>
        {!navOpen ? (
          <i className="bi bi-list"></i>
        ) : (
          <>
            <i className="bi bi-chevron-double-left"></i>
            <MyNavBar/>
          </>
        )}
      </div>
      <h3 className="header-title">Beranda</h3>
    </header>
  );
}

export default MyHeader;