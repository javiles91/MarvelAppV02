import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  goToNext,
  goToPrevious,
  goToSlide,
} from "../../features/slider/SliderSlice";

const sliderStyle = {
  height: "100%",
  position: "relative",
};

const leftArrowStyle = {
  position: "absolute",
  top: "50%",
  transfrom: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyle = {
  position: "absolute",
  top: "50%",
  transfrom: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};
const Slider = () => {
  const dispatch = useDispatch();

  const { slides, idx } = useSelector((state) => {
    return state.slider;
  });

  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[idx]})`,
  };

  const dotsContStyle = {
    position: "absolute",
    bottom: "32px",
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    color: "white",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(goToNext());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={sliderStyle}>
      <div style={leftArrowStyle} onClick={() => dispatch(goToPrevious())}>
        ❮
      </div>
      <div style={rightArrowStyle} onClick={() => dispatch(goToNext())}>
        ❯
      </div>
      <div style={slideStyle}></div>
      <div style={dotsContStyle}>
        {slides.map((slide, index) => {
          return (
            <div
              style={dotStyle}
              key={index}
              onClick={() => dispatch(goToSlide(index))}
            >
              ●
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
