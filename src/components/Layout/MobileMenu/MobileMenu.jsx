import { MobileMenuIcons } from "../../../assets/icons/MobileMenuIcons";

const MobileMenu = ({ setIsOpen, innerRef, className }) => {
  return (
    <div className={className} ref={innerRef}>
      <h3 className="mobile-menu__title">
        Меню
        <button
          className={"mobile-menu__close"}
          onClick={() => setIsOpen(false)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#F0F0F0" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.95901 9.70711C8.34954 9.31658 8.34954 8.68342 7.95901 8.29289L6.16694 6.50082C6.07474 6.40862 6.07474 6.25914 6.16694 6.16694C6.25914 6.07474 6.40862 6.07474 6.50082 6.16694L8.29289 7.95901C8.68342 8.34954 9.31658 8.34954 9.70711 7.95901L11.4992 6.16694C11.5914 6.07474 11.7409 6.07474 11.8331 6.16694C11.9253 6.25914 11.9253 6.40862 11.8331 6.50082L10.041 8.29289C9.65046 8.68342 9.65046 9.31658 10.041 9.70711L11.8331 11.4992C11.9253 11.5914 11.9253 11.7409 11.8331 11.8331C11.7409 11.9253 11.5914 11.9253 11.4992 11.8331L9.70711 10.041C9.31658 9.65046 8.68342 9.65046 8.29289 10.041L6.50082 11.8331C6.40862 11.9253 6.25914 11.9253 6.16694 11.8331C6.07474 11.7409 6.07474 11.5914 6.16694 11.4992L7.95901 9.70711Z"
              fill="#BFBFBF"
              stroke="#BFBFBF"
            />
          </svg>
        </button>
      </h3>
      <ul>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="home" height={14} />
            Главная
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="about" height={14} />О нас
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="contacts" height={16} />
            Контакты
          </a>
        </li>
        <li>
          <h3 className="mobile-menu__title">Категории</h3>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="kitchen" height={16} />
            Кухни
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="bedroom" height={14} />
            Спальни
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="livingRoom" height={14} />
            Гостинные
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="hallway" height={14} />
            Прихожие
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="office" height={14} />
            Офисная мебель
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="children" height={14} />
            Детская
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="promotion" height={16} />
            Акция
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="new" height={16} />
            Новинки
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="mattress" height={16} />
            Матрасы
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="soft" height={16} />
            Мягкая мебель
          </a>
        </li>
        <li>
          <a href="#" className="mobile-menu__link">
            <MobileMenuIcons name="closets" height={16} />
            Шкафы
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
