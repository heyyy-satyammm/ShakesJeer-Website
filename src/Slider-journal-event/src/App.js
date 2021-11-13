import ImageSlider from "./Components/ImageSlider";
import "./css/Slider.css"
function App() {
  return (
    <div className="container mt-5 carousel">
      <ImageSlider />
    </div>
  );
}

export default App;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)