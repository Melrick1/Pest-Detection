
import { useNavigate, useLocation } from "react-router";

function NavItem({ item }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === `/${item.route}`;

    const handleItemClick = (pageName) => {
        navigate(`/${pageName}`)
    };

    return (
        <li className="nav-item">
            <div
            className={`nav-link ${isActive ? 'active' : ''}`}
            onClick={() => handleItemClick(item.route)}
            >
                <i className={`nav-icon ${item.icon}`}></i>
                <span>{item.label}</span>
            </div>
        </li>
    );
}

export default NavItem;