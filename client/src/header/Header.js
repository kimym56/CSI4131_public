import React from "react";
import "./Header.css";

import { Link } from 'react-router-dom';

function MenuItem({ active, children, to }) {
  return <div className="menu-item">{children}</div>;
}
export default function Header() {
  return (
    <div className="header">
      <div className="logo_title">
        <img className="logo" src="logo_LGYS.png" width={72} alt="logo" />
        {/* <div className="logo">LG</div> */}
        <div className="title"> Yonsei & LG</div>
      </div>
      <div className="menu">

        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/data">Data Visualization</Link>
        </MenuItem>
      </div>
    </div>
  );
}
// import React from "react";
// import "./Header.css";

// const MenuItem = ({ active, children, to }) => (
//   <div className="menu-item">{children}</div>
// );

// const Header = () => {
//   return (
//     <div>
//       <div className="logo">Baner</div>
//       <div className="menu">
//         <MenuItem>홈</MenuItem>
//         <MenuItem>소개</MenuItem>
//         <MenuItem>포스트</MenuItem>
//       </div>
//     </div>
//   );
// };

// export default Header;
