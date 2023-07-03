import "./App.css";
import Header from "./header/Header";
import Content from "./content/Content";
import ListContainer from "./list_container/ListContainer";
import { useState, useEffect } from "react";
import axios from "axios";

// import Carousel from './component/Carousel';
function Home(props) {
  const [videoID, setVideoID] = useState(0);
  const [masterURL, setMasterUrl] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [vod_list, setVod_list] = useState();
  const [live_list, setLive_list] = useState();
  const [isVOD, setIsVOD] = useState(4);
  const serverURL =
    "";

  useEffect(() => {
    axios.get(serverURL + "vod_list").then(function (response) {
      setVod_list(response.data);
    });
    axios.get(serverURL + "live_list").then(function (response) {
      // console.log(response.data);
      setLive_list(response.data);
    });
  }, []);
  useEffect(() => {
    var video = isVOD == 4 ? vod_list : live_list;
    setMasterUrl(video?.[videoID].master);
    setPosterUrl(video?.[videoID].thumb);
    setTitle(video?.[videoID].title);
    setDescription(video?.[videoID].description);
  }, [videoID, vod_list, isVOD]);
  return (
    <div className="App">
      <Header />
      <Content
        id={videoID}
        masterURL={masterURL}
        posterURL={posterURL}
        title={title}
        description={description}
      />
      <ListContainer
        setVideoID={setVideoID}
        videoID={videoID}
        setMasterUrl={setMasterUrl}
        isVOD={isVOD}
        setIsVOD={setIsVOD}
      />
    </div>
  );
}

export default Home;
