import Profile from "./Subcomponents/Profile";
import NavItem from "./Subcomponents/NavItem";
import NavAuth from './Subcomponents/NavAuth';
import "./Stylings/MyNavbar.css"

const MyNavBar = ({ navOpen }) => {
  const navigationItems = [
    { id : '1', route: '', icon: 'bi bi-house', label: 'Beranda' },
    { id : '2', route: 'riwayat', icon: 'bi bi-clock-history', label: 'Riwayat' },
    { id : '3', route: 'tentang', icon: 'bi bi-exclamation-circle', label: 'Tentang' },
    { id : '4', route: 'bantuan', icon: 'bi bi-question-circle', label: 'Bantuan' },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'navOpen' : 'navClosed'}`}>
      <ul className="nav-list">
        <Profile/>
        {navigationItems.map((item) => (
          <NavItem key={item.id} item={item}/>
        ))}
        <NavAuth />
      </ul>
    </nav>
  );
};

export default MyNavBar;