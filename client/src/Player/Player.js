import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

import "./Player.css";
export default function Player(props) {
  const [videoURL, setVideoURL] = useState();
  const [posterURL, setPosterURL] = useState();
  console.log("vurl ", videoURL);
  console.log("psurl", posterURL);
  const [rate, setRate] = useState(1);
  // const serverURL =
  // "" +
  // props.id
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);

  const handlePlayerReady = () => {
    console.log("ready");
    setPlayerReady(true);
  };
  useEffect(()=>{
    setVideoURL(props.masterURL)
    setPosterURL(props.posterURL)
  },[props.masterURL,props.posterURL])
  useEffect(() => {
    props.onRef(playerRef.current);
  }, []);
  useEffect(() => {
    setRate(props.rate);
  }, [props.rate]);

  // axios.get(serverURL).then(function (response) {
  //   // console.log(response.data);
  //   setVideoURL(response.data.master);
  //   setPosterURL(response.data.imgUrl)
  // });
 /*
import './Player.css'
export default function Player(props) {
  const [videoURL, setVideoURL] = useState("");
  const [posterURL, setPosterURL] = useState("");

  const [rate, setRate] = useState(1);
  const serverURL =
    "" +
    props.id
  // const serverURL = "http://127.0.0.1:8000/api/video/" + props.id;
  const updateURL = "http://127.0.0.1:8000/api/update_data";
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);

  const handlePlayerReady = async() => {
    console.log('ready');
    setPlayerReady(true);

    // Calculate current time
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    // YY:MM:DD:HH:MM:SS
    const time = year+":"+month+":"+day+":"+hours+":"+minutes+":"+seconds;

    // POST
    try {
      const response = await axios.post(updateURL, 
        {
          'user_id': 1,
          'video_id': props.id,
          'time': time,
          'bandwidth': 1788600 // @@@ need to change
        }).then(function(response) {
          console.log(response.data)
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    props.onRef(playerRef.current);
  }, [playerRef]);

  axios.get(serverURL).then(function (response) {
    console.log(response.data);
    setVideoURL(response.data.master);
    setPosterURL(response.data.imgUrl)
  });
  */
  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={videoURL} // 플레이어 url
        // url={
        //   "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
        // }
        loop={true}
        width="100%" // 플레이어 크기 (가로)
        height="100%" // 플레이어 크기 (세로)
        playing={true} // 자동 재생 on
        // muted={true} // 자동 재생 on
        controls={true} // 플레이어 컨트롤 노출 여부

        light={
          <div style={{position:'relative',display:'inline-block'}}>
          <img style={{ width: 100 + "%",height: 100+'%',top:0,marginTop:4+'px' }}  src={posterURL} alt="Thumnail" />
          <div className="player-image"/>
          
          </div>
        } // 플레이어 모드

        pip={true} // pip 모드 설정 여부
        playbackRate={rate}
        poster={posterURL} // 플레이어 초기 포스터 사진
        // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트

        onReady={handlePlayerReady}

      />
      {/* <button
        onClick={() =>
          console.log(
            // playerRef.current.getInternalPlayer("hls").levels,
            playerRef.current?.getInternalPlayer("hls")?.levels.map,
            playerRef.current.getInternalPlayer("hls").bandwidthEstimate
          )
        }
      >
        button
      </button> */}
      {/* <div>
      <h2>Bandwidth Information</h2>
      <p>{playerRef.current.getInternal}</p>
    </div> */}
    </div>
  );
}
