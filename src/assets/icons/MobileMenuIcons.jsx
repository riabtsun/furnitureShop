import Icons from "./mobileMenuSprite.svg";
// eslint-disable-next-line react/prop-types
export const MobileMenuIcons = ({ name, width, height }) => {
  return (
    <svg style={{ width: width || "20px", height: height + "px" }}>
      <use href={Icons + "#icon-" + name}></use>
    </svg>
  );
};
