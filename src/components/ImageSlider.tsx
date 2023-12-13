import { useState /* useEffect */ } from "react";
import images from "../utils/imageList";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Transition duration + delay before changing the image
    }, 6000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []); */

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const index = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 1000); // Transition duration + delay before changing the image
  };

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const index = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 1000); // Transition duration + delay before changing the image
  };

  return (
    <div className="flex justify-center sm:px-12 p-8 h-screen">
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-text text-background p-2 rounded-full"
      >
        &lt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Slide"
        className={`object-scale-down max-h-full drop-shadow-md rounded-md m-auto transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{ transitionProperty: "opacity" }}
      />
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-text text-background p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;

/* ;
import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);
  const goToPrevSlide = () => {
    const index = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(index);
  };
  return (
    <div className="relative">
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &lt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Slide"
        className="mx-auto max-w-full"
      />
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider; */
