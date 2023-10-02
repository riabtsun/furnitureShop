import { useState } from "react";
import MenuIcon from "../../../assets/icons/MenuIcon.jsx";
import MainLogo from "../../../assets/icons/mainLogo.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { MobileMenuIcons } from "../../../assets/icons/MobileMenuIcons.jsx";
import { LiaHeart, LiaShoppingBagSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top__nav">
            <Link to="/" className="header-top__nav-link">
              Главная
            </Link>
            <Link to="/about" className="header-top__nav-link">
              О нас
            </Link>
            <Link to="/contacts" className="header-top__nav-link">
              Контакты
            </Link>
          </div>
          <div className="header-top__contacts">
            <Link className="header-top__nav-link" to="tel:+380931234567">
              <MobileMenuIcons name="phone" width="20px" height={20} />
              (063) 12 34 567
            </Link>
            <Link className="header-top__nav-link" to="/delivery">
              <MobileMenuIcons
                name="delivery--white"
                width="29px"
                height={16}
              />
              Доставка
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <Transition in={isOpen} timeout={300} unmountOnExit={true}>
          {(state) => (
            <MobileMenu
              setIsOpen={setIsOpen}
              className={`mobile-menu ${state}`}
            />
          )}
        </Transition>
        <div className="header-main">
          <span className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="menu-icon" />
          </span>
          <MainLogo className="main-logo" />
          <div className="user-bar">
            <Link to="/favorites" className="user-bar__link">
              <LiaHeart />
            </Link>
            <Link to="/cart" className="user-bar__link">
              <LiaShoppingBagSolid />
            </Link>
            <Link to="/login" className="user-bar__link">
              <CiUser />
            </Link>
          </div>
          <Link to="/delivery" className="header-main__delivery">
            <MobileMenuIcons name="delivery" width="29px" height={17} />
            <span className="header-main__delivery-text">Доставка</span>
          </Link>
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
