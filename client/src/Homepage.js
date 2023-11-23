import React from "react";
import frontpage from './image/frontpage.jpg'
import './Homepage.css'
import ganeshji1 from './image/ganeshji1.jpg'



function App() {
  localStorage.clear()
  return (
    <>
     <div className="container">
  <nav
    style={{
      position: "absolute",
      top: 0,
      right: "20px",
      padding: "10px",
      zIndex: 1,
    }}
  >
    <ul style={{ listStyleType: "none", paddingInlineStart: "0", display: "flex", alignItems: "center" }}>
      <li style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "4px",
          }}
        ></span>
        <a
          href="/adminlogin"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            padding: "5px",
          }}
        >
          Association/Mandal
        </a>
      </li>
      <li style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "4px",
          }}
        ></span>
        <a
          href="/userlogin"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            padding: "5px",
          }}
        >
          Member
        </a>
      </li>
      
    </ul>
    <ul style={{ listStyleType: "none", paddingInlineStart: "0", display: "flex", alignItems: "center" }}>
      <li style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "4px",
          }}
        ></span>
        <a
          href="/train"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            padding: "5px",
          }}
        >
          Travel
        </a>
      </li>
    </ul>
    <ul style={{ listStyleType: "none", paddingInlineStart: "0", display: "flex", alignItems: "center" }}>
      <li style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "4px",
          }}
        ></span>
        <a
          href="/weather"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            padding: "5px",
          }}
        >
          Weather
        </a>
      </li>
    </ul>
    <ul style={{ listStyleType: "none", paddingInlineStart: "0", display: "flex", alignItems: "center" }}>
      <li style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            marginRight: "4px",
          }}
        ></span>
        <a
          href="/cricket"
          style={{
            color: "white",
            fontSize: "20px",
            textDecoration: "underline",
            padding: "5px",
          }}
        >
          Cricket
        </a>
      </li>
    </ul>
  </nav>
</div>


    </>
  );
}
export default App;

// import React from "react";
// import frontpage from './image/web-image.png'
// import './Homepage.css'

// function App() {
//   localStorage.clear();

//   return (
//     <>
//       <div>
//         <img
//           src={frontpage}
//           alt="Background"
//           className="background-image"
//           useMap="#image-map" // Add the useMap attribute with the map name
//           style={{marginLeft : "170px",  height: "100vh"}}
//         />

//         {/* Define the image map */}
//         <map name="image-map">
//           <area
//             shape="rect"
//             coords="26,459,230,379"
//             href="https://play.google.com/store/apps/dev?id=5163502344443105013"
//             alt="Clickable Area"
//           />
//           <area
//             shape="rect"
//             coords="469,463,262,377"
//             href="https://play.google.com/store/apps/dev?id=5163502344443105013"
//             alt="Clickable Area"
//           />
//           {/* You can add more <area> elements for additional clickable areas */}
//         </map>

//         <nav
//           style={{
//             position: "absolute",
//             top: 0,
//             right: "200px",
//             padding: "10px",
//             fontFamily: "Italic",
//             zIndex: 1,
//           }}
//         >
//           <a href="/adminlogin" style={{ color: "white", fontSize: "20px" }}>
//             Admin
//           </a>
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <a href="/userlogin" style={{ color: "white", fontSize: "20px" }}>
//             User
//           </a>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default App;


