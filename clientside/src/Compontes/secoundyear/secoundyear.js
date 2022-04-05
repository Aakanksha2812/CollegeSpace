import React from "react";

function secoundyear() {
  return (
    <div>
      <h1>Hello.... Secound Year Student! Looking for Notes,Syullubus</h1>
      <div className="yeardiv">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card text-center">
                <div class="card-header">Notes</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Seound Year Student!</h5>
                  <p class="card-text">Click on below button to get notes!</p>
                  <a href="/notes" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
                <div class="card-footer text-muted">SPPU</div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center">
                <div class="card-header">Syllabus</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Secound Year Student!</h5>
                  <p class="card-text">
                    Click on below button to get Syllabus!
                  </p>
                  <a href="/syllabus" class="btn btn-primary">
                    Click Me
                  </a>
                </div>
                <div class="card-footer text-muted">SPPU</div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center">
                <div class="card-header">Timetable</div>
                <div class="card-body">
                  <h5 class="card-title">Hey....Secound Year Student!</h5>
                  <p class="card-text">
                    Click on below button to get Timetable!
                  </p>
                  <a href="/timetable" class="btn btn-primary">
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
export default secoundyear;
