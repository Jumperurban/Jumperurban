import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner-container">
    <div className="scrolling-text">
      <span>Marcas originales.</span>
      <span className="horizontal-space"></span>
      <span className="horizontal-space">Envío gratis en envíos superiores a 100 euros.</span> 
      <span className="horizontal-space">Nuestros productos son 100% originales.</span>
      <span className="horizontal-space"></span>
      <span className="horizontal-space">Internacional UPS. Pide desde cualquier sitio.</span>
      <span className="horizontal-space">Para mayor información no dude en llamarnos al +34 657 796 840 </span>
    </div>
  </div>
  );
};

export default Banner;
export const layout = {
    areaId: "content",
    sortOrder: 1,
  };
