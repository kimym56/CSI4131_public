import React, { useState } from 'react';
import './Carousel.css'

const Carousel = ({ imageCount, list, videoID,setVideoID,isVOD,setIsVOD }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(imageCount, list?.length);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list?.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + list?.length) % list?.length);
  };
  const handleClickEvent = (event) => {
    if(isVOD!=imageCount)
      setIsVOD(imageCount)
    console.log('isvd',isVOD)


    setVideoID(Number(event.currentTarget.value))
    console.log('event : ',event.currentTarget)
  }
  console.log('isVOD',imageCount,isVOD)
  const renderImages = () => {
    const imagesList = [];
    for (let i = 0; i < imageCount; i++) {
      const position = (i + currentIndex  ) % maxIndex;
      const isActive = (isVOD==imageCount)&(position === videoID) ? 'active' : '';
      imagesList.push(
        <button value={position} onClick={handleClickEvent} className="list_buttons_container">
        <img
          onDragStart={(e)=>e.preventDefault()}
          className={`carousel-image ${isActive}`}
          src={`${list?.[position]?.thumb}`} // Adjusted indexing here

          alt={`Carousel Item ${i + 1}`}
        />
        </button>
      );
    }
    return imagesList;

  };

  return (
    <div className="carousel">
      <button className="carousel-button">
        <img src='arrow_back.png' alt="arrow_b" onClick={handlePrevious} className="carousel-button-image"/>
      </button>
      <div className="carousel-image-container">{renderImages()}</div>
      <button className="carousel-button">
        <img src='arrow_forward.png' alt="arrow_f" onClick={handleNext} className="carousel-button-image"/>
      </button>
    </div>
  );
};

export default Carousel;