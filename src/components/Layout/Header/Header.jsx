import MenuIcon from "../../../assets/icons/MenuIcon.jsx";
import MainLogo from "../../../assets/icons/mainLogo.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { Transition } from "react-transition-group";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenuIcons } from "../../../assets/icons/MobileMenuIcons.jsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Transition in={isOpen} timeout={300} unmountOnExit={true}>
          {(state) => (
            <MobileMenu
              setIsOpen={setIsOpen}
              className={`mobile-menu ${state}`}
            />
          )}
        </Transition>

        <div className="header-top"></div>
        <div className="header-main">
          <span className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="menu-icon" />
          </span>
          <MainLogo />
          <div className="user-bar">
            <Link to="/favorites" className="user-bar__link">
              <LiaHeart />
            </Link>
            <Link href="/cart" className="user-bar__link">
              <LiaShoppingBagSolid />
            </Link>
            <Link href="/cart" className="user-bar__link">
              <CiUser />
            </Link>
          </div>
          <div className="header-main__search-wrap">
            <MobileMenuIcons name="search" height={14} />
            <input
              type="search"
              className="header-main__search"
              placeholder="Поиск"
            />
          </div>
        </div>
        <div className="header-nav">
          <nav>
            <ul>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
              <li>
                <a href="" className="header-nav_link"></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
