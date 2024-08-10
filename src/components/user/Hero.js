import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';


// Hero Component
function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Welcome to the Rural Edge",
            description: "Empowering communities through technology and innovation.",
            link: "/complaint",
            image: "https://i.pinimg.com/originals/01/64/8c/01648ce146cf18297174097877e6668e.jpg",
        },
        {
            title: "Innovative Solutions",
            description: "Empowering communities with advanced technology and resources.",
            link: "/services",
            image: "https://c1.staticflickr.com/3/2866/9777026734_f46fc57082_o.jpg",
        },
        {
            title: "Community First",
            description: "Working together to build a better future for all.",
            link: "/contact",
            image: "https://wallpaperaccess.com/full/6124438.jpg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
            <div className="hero-content">
                <h1>{slides[currentSlide].title}</h1>
                <p>{slides[currentSlide].description}</p>
                <a href={slides[currentSlide].link} className="cta-button"><Link to="/complaint" class="login2">Get Started</Link></a>
            </div>
        </section>
    );
}
export default Hero;