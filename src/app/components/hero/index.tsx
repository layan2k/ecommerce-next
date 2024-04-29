"use client";
import { heroData } from "../data/data";
import Slide from "./Slide";
import Slider from "react-slick";


const Hero: React.FC = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    return (
        <main>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {heroData.map((item) => {
                        return (
                            <Slide
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                            />
                        );
                    })}
                </Slider>
            </div>
        </main>
    )
}

export default Hero