import React from 'react';
import images from '../theme/imagesPath';

const Btn = ({ children, href = "#", rightIcon, padding, className, background, color, iconbackground }) => {
  return (
    <a style={{
      color: color ? color : "#fff",
      padding: padding ? padding : "0px 0.6vw",
      background: background ? background : "linear-gradient(86.2deg, #2F98D0 8.59%, #47ADE3 89.8%)"
    }} className={`${className} webBtn`} href={href} role="button">


      
      {children}
      {
        rightIcon && <span style={{ backgroundColor: iconbackground ? iconbackground : "#fff" }} className="btn-icon">
          <img src={images.icon_top} />
        </span>
      }

    </a>
  );
};

export default Btn;
