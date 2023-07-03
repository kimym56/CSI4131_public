
import React, { useState, useRef, useEffect } from "react";
import "./Content.css";
import Player from "../Player/Player.js";
export default function Content(props) {
  const innerWidth = window.innerWidth;
  const screenRatio = (innerWidth - 144 - 340) / 16;

  const childRef = useRef(null);
  const [isVisible, setIsVisible] = useState(0);
  const [selectedSpeed, setSelectedSpeed] = useState(3)
  const [selectedHD, setSelectedHD] = useState(-1)
  console.log('vrul in content ',props.masterURL)


  const speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  // Callback function to receive the child ref
  const handleChildRef = (ref) => {
    childRef.current = ref;
    // Do something with the child ref
  };
  const onChangeBitrate = (event) => {
    setSelectedHD(event.currentTarget.value)
    console.log("event : ", event);
    const internalPlayer = childRef.current?.getInternalPlayer("hls");
    if (internalPlayer) {
      // currentLevel expect to receive an index of the levels array
      internalPlayer.currentLevel = event.target.value;
    }
  };
  const handleButtonVisible = (num) => {
    isVisible == num ? setIsVisible(0) : setIsVisible(num);
  };
  return (
    <div className="main" style={{ height: screenRatio * 9 }}>
      <img
        className="logo_L"
        src="logo_L.png"
        width={72}
        height={216}
        alt="logo_L"
      />

      <div className="video_container" style={{ width: screenRatio * 16 }}>
        <Player id={props.id} rate={(Number(selectedSpeed)+1)/4} onRef={handleChildRef} masterURL={props.masterURL} posterURL={props.posterURL}/>
      </div>
      <div className="ott_container" >
        <div className="ott_title_container">
          <p className="ott_title">{props.title}</p>
        </div>
        <div className="ott_discription_container">
          <p className="ott_discription">{props.description}</p>

        </div>
        <div className="ott_buttons_container">
          <div>
            <p className="buttons_cont">
              <button
                className={
                  isVisible == 1
                    ? `resolution_buttons_active`
                    : `resolution_buttons`
                }
                onClick={() => (
                  handleButtonVisible(1),
                  console.log(
                    // handleButtonVisible(1),
                    // setIsVisible(!isVisible),
                    // childRef?.current?.getInternalPlayer()
                    childRef?.current?.getInternalPlayer("hls")
                    // childRef.current?.getInternalPlayer("hls")?.levels.map,
                    // childRef?.current?.getInternalPlayer("hls").bandwidthEstimate
                  )
                )}
              >
                HD
              </button>
              <button
                className={
                  isVisible == 2
                    ? `resolution_buttons_active`
                    : `resolution_buttons`
                }
                onClick={() => handleButtonVisible(2)}
              >
                SPEED
              </button>
            </p>
          </div>
          <div className="isVisible_container">
            {isVisible
              ? isVisible == 1
                ? childRef?.current
                    ?.getInternalPlayer("hls")
                    ?.levels.map((level, id) => (
                      <button
                        className={`selectable_buttons ${selectedHD ==id?'active':''}`}
                        key={id}
                        value={id}
                        onClick={onChangeBitrate}
                      >
                        {level.height}
                      </button>
                    ))
                : (speed.map((value, id) => (
                    <button
                      className={`selectable_buttons ${selectedSpeed ==id?'active':''}`}
                      key={id}
                      value={id}

                      onClick={(e)=>{
                        setSelectedSpeed(e.currentTarget.value)}}

                    >
                      {value}
                    </button>)
                  ))
              : null}
          </div>
        </div>
      </div>

      <img
        className="logo_G"
        src="logo_G.png"
        width={144}
        height={144}
        alt="logo_G"
      />
    </div>
  );
}
