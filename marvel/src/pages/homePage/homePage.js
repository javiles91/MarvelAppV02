import React from "react";
import Slider from "../../components/slider/Slider";

function HomePage() {
  const sliderContStyle = {
    width: "100%",
    height: "680px",
    margin: "0 auto",
  };

  return (
    <div>
      <div style={sliderContStyle}>
        <Slider />
      </div>
    </div>
  );
}

export default HomePage;
