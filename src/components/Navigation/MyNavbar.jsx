import "./Navigation.css"
import { useState } from 'react';

const MyNavBar = ( {burgerClick} ) => {
  const [activeItem, setActiveItem] = useState('');

  const navigationItems = [
    { id: '', icon: 'bi bi-house', label: 'Home' },
    { id: 'riwayat', icon: 'bi bi-clock-history', label: 'Riwayat' },
    { id: 'tentang', icon: 'bi bi-exclamation-circle', label: 'Tentang' },
    { id: 'bantuan', icon: 'bi bi-question-circle', label: 'Bantuan' },
    { id: 'Sign-in', icon: 'bi bi-box-arrow-left', label: 'Log-out' },
  ];

  const handleItemClick = (itemId) => {
    // Set the activeItem state when a navigation item is clicked
    setActiveItem(itemId);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <div className="nav-link">
            <i className="bi bi-chevron-double-left" onClick={burgerClick}></i>
            <span>Kembali</span>
          </div>
        </li>
        {navigationItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a
                href={`/${item.id}`}
                className={`nav-link ${item.id} ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
            >
            <i className={item.icon}></i><span>{item.label}</span>
          </a>
        </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyNavBar;