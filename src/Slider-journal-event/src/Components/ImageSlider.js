import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        adaptiveHeight: true,
        centerMode: true,
        rtl: true
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" />
                    </div>
                    <div className="details">
                        <h2>Description of the image </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" />
                    </div>
                    <div className="details">
                        <h2>Description of the image </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/Photoshop-Replace-Background-Featured.jpg" />
                    </div>
                    <div className="details">
                         <h2>Description of the image </h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="details">
                        <h2>Description of the image </h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider
