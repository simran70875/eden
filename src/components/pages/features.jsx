import React from 'react'
import images from '../theme/imagesPath';

const Features = () => {
    const featuresData = [
        { title: 84, content: "Suppliers Engaged", img: images.feature1 },
        { title: 67, content: "Fixed Products", img: images.feature2 },
        { title: 97, content: "Retention", img: images.feature3 },
        { title: 98, content: "Satisfaction", img: images.feature4 },
    ];

    return (
        <section id="features">
            <div className="brands-track">
                <div className="brands-slide">
                    {featuresData?.map((feature, index) => (
                        <div key={index} className="supplier-card" style={{ backgroundImage: `url(${feature.img})`, }}>
                            <div className="overlay"></div>
                            <div className="supplier-percentage">{feature.title}%</div>
                            <div className="supplier-label">{feature.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features