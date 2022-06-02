import React from "react";
import "../CSS/Mainpage.css";


function Mainpage()
{
    return (
        <div className="main-page">
        {/* ------------------------Navigation bar---------------------------------------- */}
            {/* <div className="earth-container"> */}
        
          {/* </div> */}
            <nav className="navbar navbar-expand" >
                <div className="container-fluid">
                <a class="navbar-brand" href="#"><img className="logo-img" src="./images/logo.png" alt="logo" /><h1 className="logo">EdNex</h1></a>
                </div>

                {/* -------------------navbar-menu------------------------------------ */}
                <ul class="navbar-nav navbar-menu ">
                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle english" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            English
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">English</a></li>
            <li><a class="dropdown-item" href="#">Hindi</a></li>
            <li><a class="dropdown-item" href="#">Punjabi</a></li>
          </ul>
        </li>
        <li>
        <img className="profile-pic" src="./images/profile-pic.png" alt="profile pic" />
    
        </li>
      </ul>
       <img className="moon-img" src="./images/moon.png" alt="moon" />  

       </nav>

       {/* -----------------------------------main page bottom--------------------------------------- */}
       <div className="mainpage-bottom">

      <div id="description">
       <h1 className="describe-head">Future of <span className="big-E">E</span>ducation System</h1>
       <p className="describe-body">EdNex provide secure access and storage to digital documents to citizen's</p>
       <button className="explore-btn" type="button" >Explore</button>
       <button className="apply-btn" type="button" >Apply now</button>
      </div>

        <div className="images">
          <img className="top-cube" src="./images/top-cube.png" alt="cube"/>
          <img className="galaxy-img" src="./images/galaxy.png" alt="galaxy"/>
          <img className="beta-img" src="./images/b.png" alt="b"/>
          <img className="function-img" src="./images/function.png" alt="function"/>
          <img className="vr-img" src="./images/vr.png" alt="VR" />
          <img  className="dna-img" src="./images/dna.png" alt="dna"/>
          <img className="science-img" src="./images/science.png" alt="science" />
          <img className="lower-satellite-img" src="./images/lower-satellite.png" alt="lower-satellite" />
          <img className="lap-link-img" src="./images/lap-link.png" alt="lap-link" />
          <img className="earth-img" src="./images/earth.png" alt="earth"/>

         
      
        </div>
       </div>
     </div>
    );
}

export default Mainpage;