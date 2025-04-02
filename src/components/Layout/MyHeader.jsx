function MyHeader({ pageName, navOpen, setNavOpen }) {
  const burgerClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <header>
      <div className="hamburger-list">
        {!navOpen ? (
          <i className="hamburger-icon bi bi-list" onClick={burgerClick}></i>
        ) : (
          <i className="hamburger-icon bi bi-chevron-double-left" onClick={burgerClick}></i>
        )}
      </div>
      <h3 className="header-title">{pageName}</h3>
    </header>
  );
}

export default MyHeader;