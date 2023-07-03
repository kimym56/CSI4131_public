import './App.css';
import Home from './Home';
import Data from './data/Data';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


// import Carousel from './component/Carousel';
function App(props) {
  
  

  // console.log('vlist in app ',vod_list[0].master)

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <div className="App">
    //     <Header/>
    //     {/* Route configuration */}
    //     <Switch>
    //       <Route path="/data" component={Data} />
    //       {/* Add other routes here */}
    //     </Switch>
    //     <Content/>
    //     <ListContainer/>
    //     {/* <Video/> */}
    //   </div>
    // </Router>

  );
}

export default App;
