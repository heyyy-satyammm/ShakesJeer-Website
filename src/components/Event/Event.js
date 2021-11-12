import React from "react";
import "../../style/Eventcss/carousel.css";
import "../../style/Eventcss/event.css";
import Heading from "./ImageSlider";
import Card from "./card";
import Menu from "./menuApi";
import Photo from "./photo.js";
import Video from "./video.js";
import ImageSlider from "./heading";
import SliderData from "./SliderData";

function Event() {
  const [menuData] = React.useState(Menu);
  return (
    <>
      <ImageSlider slides={SliderData} />
      <div className="main">
        <Heading />
        <Card menuData={menuData} />
      </div>
      <Photo />
      <Video />
    </>
  );
}

export default Event;
