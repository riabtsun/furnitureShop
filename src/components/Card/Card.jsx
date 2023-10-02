const Card = () => {
  return (
    <div className="container">
      <div className="product-card">
        <div className="product-card__top">-25%</div>
        <img src="" alt="" className="product-card__img" />
        <div className="product-card__info">
          <h4 className="product-card__name">Динс Velvet Yellow</h4>
          <p className="product-card__type">Диваны</p>
          <p className="product-card__price">
            28 490₴
            <span className="product-card__old-price">37 990₴</span>
          </p>
        </div>
        <div className="product-card__parameters">
          <span className="product-card__parameters-name">Размеры</span>
          <div className="product-card__parameters-sizes">
            <div className="product-card__parameters-item">
              <span className="product-card__parameters-item-name">ШИРИНА</span>
              <span className="product-card__parameters-item-quantity">
                43 СМ
              </span>
            </div>
            <div className="product-card__parameters-item">
              <span className="product-card__parameters-item-name">
                ГЛУБИНА
              </span>
              <span className="product-card__parameters-item-quantity">
                43 СМ
              </span>
            </div>
            <div className="product-card__parameters-item">
              <span className="product-card__parameters-item-name">ВЫСОТА</span>
              <span className="product-card__parameters-item-quantity">
                77 СМ
              </span>
            </div>
          </div>
          <button className="product-card__parameters-add">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
