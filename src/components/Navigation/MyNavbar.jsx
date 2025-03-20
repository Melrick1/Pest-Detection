import "./Navigation.css"
import { useState } from 'react';
import Profile from "./Profile";
import { AuthSignOut } from "../../config/Firebase/AuthManager";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const MyNavBar = ( {burgerClick} ) => {
  const [activeItem, setActiveItem] = useState('');
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  const navigationItems = [
    { id: '', icon: 'bi bi-house', label: 'Beranda' },
    { id: 'riwayat', icon: 'bi bi-clock-history', label: 'Riwayat' },
    { id: 'tentang', icon: 'bi bi-exclamation-circle', label: 'Tentang' },
    { id: 'bantuan', icon: 'bi bi-question-circle', label: 'Bantuan' },
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    navigate(`/${itemId}`)
  };

  const handleSignOut = async () => {
    await AuthSignOut();
    navigate('/Sign-in')
  }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Profile/>
        </li>

        {/* Mapping */}
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item">
            <div
                className={`nav-link ${item.id} ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
            >
              <i className={`nav-icon ${item.icon}`}></i><span>{item.label}</span>
            </div>
          </li>
        ))}

        <li className="nav-item">
            <div className='nav-link Sign-in' onClick={handleSignOut}>
              {isLoggedIn ? (
                <>
                  <i className='nav-icon bi bi-box-arrow-left'></i>
                  <span>Keluar</span>
                </>
              ) : (
                <>
                  <i className='nav-icon bi bi-box-arrow-in-right'></i>
                  <span>Masuk</span>
                </>
              )}
            </div>
        </li>
      </ul>
    </nav>
  );
};

export default MyNavBar;