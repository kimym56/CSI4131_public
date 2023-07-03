// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import "./CircleCarusel.css";
// const handleDragStart = (e) => e.preventDefault();
// /* eslint-disable jsx-a11y/alt-text */
// const responsive = {
//   1024: { items: 4,itemsFit:'contain'},
// };
// const items = [
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   <div className="vod">
//     <img src="logo_LGYS.png" alt="vod" />
//   </div>,
//   ,
// ];

// export default function CircleCarusel(props) {
//   return (
//     <AliceCarousel
//       activeIndex={props.activeIndex}
//       items={items}
//       responsive={responsive}
//       disableButtonsControls={true}
//       disableDotsControls={true}
//     />
//   );
// }
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import "./CircleCarusel.css";

const CircleCarusel = (props) => {
  const responsive = {
    0: { items: 1 },
    512: { items: props.num },
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}1</div>,
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}2</div>,
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}3</div>,
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}4</div>,
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}5</div>,
    <div className="vod">{/* <img src="logo_LGYS.png" alt="vod" /> */}6</div>,
    ,
  ];
  // const [items] = useState(createItems(5, [setActiveIndex]));
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return [
    <IconButton onClick={slidePrev}>
      <KeyboardArrowLeftIcon sx={{ color: "#F93B48" }} />
    </IconButton>,
    <AliceCarousel
      key="carousel"
      // mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      activeIndex={activeIndex}
      responsive={responsive}
      onSlideChanged={syncActiveIndex}
    />,
    <IconButton onClick={slideNext}>
      <KeyboardArrowRightIcon sx={{ color: "#F93B48" }} />
    </IconButton>,
  ];
};
export default CircleCarusel;
