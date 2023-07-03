import React, { useEffect, useState } from "react";
import "./ListContainer.css";
import Divider from "../component/divider/Divider";
import axios from "axios";

// import CircleCarusel from "../test/circle_carusel/CircleCarusel";
import Carousel from "../component/Carousel/Carousel.js";

export default function ListContainer({ setVideoID, videoID,isVOD,setIsVOD }) {
  const [vod_list, setVod_list] = useState();
  const [live_list, setLive_list] = useState();

  const serverURL =
    "";

  useEffect(() => {
    axios.get(serverURL+'vod_list').then(function (response) {

      setVod_list(response.data);
    });
    axios.get(serverURL+'live_list').then(function (response) {
      // console.log(response.data);
      setLive_list(response.data);
    });
  }, []);


  return (
    <div className="list_container">
      <Divider children1={"VOD"} children2={"LIVE"} />
      <div className="circle_container">
        {/* <CircleCarusel num={4}/>
        <CircleCarusel num={2}/> */}
        {/* <Carousel num={4}/> */}
        {/* <Carousel num={2}/> */}

        <Carousel
          list={vod_list}
          imageCount={4}
          videoID={videoID}
          setVideoID={setVideoID}
          isVOD={isVOD}
          setIsVOD={setIsVOD}

        />

        {/* <MultipleItems showNumber={4}/> */}
        <Divider vertical={true} />
        <Carousel
          list={live_list}

          imageCount={2}
          videoID={videoID}
          setVideoID={setVideoID}
          isVOD={isVOD}
          setIsVOD={setIsVOD}

        />

        {/* <MultipleItems showNumber={2}/> */}
      </div>
    </div>
  );
}
