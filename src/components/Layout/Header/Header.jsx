import MenuIcon from "../../../assets/icons/MenuIcon.jsx";
import MainLogo from "../../../assets/icons/mainLogo.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useState, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="header">
      <div className="container">
        {isOpen && <MobileMenu setIsOpen={setIsOpen} menuRef={menuRef} />}
        <div className="header-top">
          <span
            onClick={() => {
              if (isOpen) {
                menuRef.current.classList.remove("move-right");
                setTimeout(() => setIsOpen(false), 300);
              } else {
                setIsOpen(true);
                setTimeout(
                  () => menuRef.current.classList.add("move-right"),
                  50
                );
              }
            }}
          >
            <MenuIcon className="menu-icon" />
          </span>

          <MainLogo />
          <div className="user-bar">
            <a href="$" className="user-bar__link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="20"
                viewBox="0 0 114 20"
                fill="none"
              >
                <path
                  d="M54.7065 5.5V4.85714C54.7065 2.7269 56.4334 1 58.5637 1C60.6939 1 62.4208 2.7269 62.4208 4.85714V5.5M52.008 8.5723L51.008 17.5723C50.9234 18.3339 51.5196 19 52.2859 19H64.8415C65.6078 19 66.2039 18.3339 66.1193 17.5723L65.1193 8.5723C65.047 7.92117 64.4966 7.42857 63.8415 7.42857H53.2859C52.6307 7.42857 52.0804 7.92117 52.008 8.5723Z"
                  stroke="black"
                />
                <circle cx="66" cy="5" r="4" fill="#D74444" />
                <path
                  d="M2.467 10.5503L10.9167 19L19.3663 10.5503C20.3056 9.61103 20.8333 8.33706 20.8333 7.00867C20.8333 4.24246 18.5909 2 15.8247 2C14.4963 2 13.2223 2.5277 12.283 3.46701L10.9167 4.83333L9.55034 3.46701C8.61103 2.5277 7.33706 2 6.00867 2C3.24246 2 1 4.24246 1 7.00867C1 8.33706 1.5277 9.61103 2.467 10.5503Z"
                  stroke="black"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M110.292 4.85714C110.292 6.98757 108.565 8.71428 106.433 8.71428C104.301 8.71428 102.573 6.98757 102.573 4.85714C102.573 2.72671 104.301 1 106.433 1C108.565 1 110.292 2.72671 110.292 4.85714Z"
                  stroke="black"
                  strokeLinecap="square"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M112.866 19H100C100 18.0865 100 17.2174 100 16.4304C100 14.2988 101.728 12.5714 103.86 12.5714H109.006C111.137 12.5714 112.866 14.2988 112.866 16.4304C112.866 17.2174 112.866 18.0865 112.866 19Z"
                  stroke="black"
                  strokeLinecap="square"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="header-main"></div>
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
