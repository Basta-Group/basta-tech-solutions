
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BastaPlayLogo from '../../assets/BastaTech/Basta Play.png'
            


interface GameProps {
    slideData?: [];
}





const GameCard: React.FC<GameProps> = ({  }) => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
    };


    const mobileSliderSettings = {
        ...sliderSettings,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        swipe: true,
        draggable: true,
        infinite: false,
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);



    return (
        <div>

            <div className="bg-red-300 mb-8">
                <Slider {...(isMobile ? mobileSliderSettings : sliderSettings)}>
                    
                </Slider>
            </div>

        </div>
    )
}

export default GameCard
