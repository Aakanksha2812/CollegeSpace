import React from "react";
import Navbar from "./navbar";
//import img from "../asstes/collegespace.png";
import img from "../asstes/collegespace_gif2.gif";
import "./Home.css";
function home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome In Collegespace</h1>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div>
              <img src={img} className="img" />
            </div>
          </div>
          <div class="col-sm">
            <h1>This is for Enginnering Student</h1>
            <h2>IT Branch</h2>
            <p>
              In this website Teacher can upload Notes as well as Notice. Even
              student can upload notes or imopratant Notice along with that
              student can download notes,timetable,syullubus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default home;
