import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

const BannerSlider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000 }}
      speed={1500}
      navigation={{
        prevEl: ".bannerSlider-prev",
        nextEl: ".bannerSlider-next",
      }}
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      className="bannerSlider"
    >
      <SwiperSlide>
        <div className="bannerSlider__slide">
          <div className="bannerSlider__text">
            <h3 className="bannerSlider__slide-title">
              Современная и удобная мебель
            </h3>
            <p className="bannerSlider__slide-subtitle">
              С доставкой по области
            </p>
            <Link to="/catalog" className="bannerSlider__catalog">
              Смотреть каталог
            </Link>
          </div>

          <img src={banner1} alt="" className="bannerSlider__img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bannerSlider__slide">
          <div className="bannerSlider__text">
            <h3 className="bannerSlider__slide-title">
              Современная и удобная мебель
            </h3>
            <p className="bannerSlider__slide-subtitle">
              С доставкой по области
            </p>
            <Link to="/catalog" className="bannerSlider__catalog">
              Смотреть каталог
            </Link>
          </div>

          <img src={banner2} alt="" className="bannerSlider__img" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bannerSlider__slide">
          <div className="bannerSlider__text">
            <h3 className="bannerSlider__slide-title">
              Современная и удобная мебель
            </h3>
            <p className="bannerSlider__slide-subtitle">
              С доставкой по области
            </p>
            <Link to="/catalog" className="bannerSlider__catalog">
              Смотреть каталог
            </Link>
          </div>
          <img src={banner3} alt="" className="bannerSlider__img" />
        </div>
      </SwiperSlide>
      <div className="bannerSlider-nav">
        <div className="bannerSlider-prev">
          <FaChevronLeft />
        </div>
        <div className="bannerSlider-next">
          <FaChevronRight />
        </div>
      </div>
    </Swiper>
  );
};

export default BannerSlider;
