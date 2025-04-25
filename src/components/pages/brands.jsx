import React from 'react'
import images from '../theme/imagesPath';
import Btn from '../other/btn';

const Brands = ({ btn, style }) => {
    const brands = [
        images.brand1,
        images.brand2,
        images.brand3,
        images.brand4,
        images.brand5,
        images.brand6,
    ];
    return (
        <section id="brands" style={style}>
            <div className="title">BRANDS WHO TRUST <span className='eden-highlight'>EDEN</span></div>
            <div className="brands-track">
                <div className="brands-slide">
                    {brands.concat(brands).map((logo, index) => (
                        <img src={logo} alt={`Brand ${index}`} key={index} className="brand-logo" />
                    ))}
                </div>
            </div>
            {
                btn && <Btn rightIcon>See how eden Works</Btn>
            }

        </section>
    )
}

export default Brands