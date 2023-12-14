import { useEffect, useState } from "react";
/* We import the image array from a file in the utils folder */
import images from "../utils/imageList";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const ImageSlider = () => {
  /* Local state that manages the current image shown in screen */
  const [currSlide, setCurrSlide] = useState(0);

  /* Set the interval of the autoplay effect */
  useEffect(() => {
    const slideInterval = setInterval(next, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  /* Functions to change the index of the images array */
  const prev = () => {
    setCurrSlide((currSlide) =>
      currSlide == 0 ? images.length - 1 : currSlide - 1
    );
  };
  const next = () => {
    setCurrSlide((currSlide) =>
      currSlide == images.length - 1 ? 0 : currSlide + 1
    );
  };
  const goToSlide = (i: number) => {
    setCurrSlide(i);
  };

  return (
    <div className="max-w-xl  rounded-xl  overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="shadow-lg rounded-full opacity-75">
          <FaChevronCircleLeft size={30} />
        </button>
        <button onClick={next} className="shadow-lg rounded-full opacity-75">
          <FaChevronCircleRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              onClick={() => goToSlide(i)}
              className={`transition-all w-3 h-3 bg-text rounded-full ${
                currSlide == i ? "p-2" : "bg-opacity-50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
