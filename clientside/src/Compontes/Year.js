import React from "react";
import "./year.css";
import secoundyear from "./secoundyear/secoundyear";
function Year() {
  return (
    <div>
      <h1>In which year you are?</h1>
      <div className="yeardiv">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card text-center">
                <div class="card-header">SECOUND YEAR</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Seound Year Student!</h5>
                  <p class="card-text">
                    Click on below button to get notes,timetable of secound
                    year!
                  </p>
                  <a href="/secoundyear" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
                <div class="card-footer text-muted">SPPU</div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center">
                <div class="card-header">THIRD YEAR</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Third Year Student!</h5>
                  <p class="card-text">
                    Click on below button to get notes,timetable of third year!
                  </p>
                  <a href="/thirdyear" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
                <div class="card-footer text-muted">SPPU</div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center">
                <div class="card-header">FOURTH YEAR</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Fourth Year Student!</h5>
                  <p class="card-text">
                    Click on below button to get notes,timetable of third year!
                  </p>
                  <a href="/fourthyear" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
                <div class="card-footer text-muted">SPPU</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Year;
