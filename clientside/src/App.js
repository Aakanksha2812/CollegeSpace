import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import home from "./Compontes/Home";
import Year from "./Compontes/Year";
import Notice from "./Compontes/Notice";
import Login from "./Compontes/Login";
import SignUp from "./Compontes/SignUp";
import Footer from "./Compontes/footer";
import secoundyear from "./Compontes/secoundyear/secoundyear";
import thirdyear from "./Compontes/thirdyear/thirdyear";
import fourthyear from "./Compontes/fourthyear/fourthyear";
import FilesList from "./Compontes/FilesList";
import Notes from "./Compontes/secoundyear/Notes";
import NotesList from "./Compontes/secoundyear/NotesList";
import Syllabus from "./Compontes/secoundyear/Syllabus";
import Timetable from "./Compontes/secoundyear/Timetable";
import Timetablelist from "./Compontes/secoundyear/Timetablelist";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/Year" component={Year}></Route>
          <Route exact path="/Notice" component={Notice}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/secoundyear" component={secoundyear}></Route>
          <Route exact path="/thirdyear" component={thirdyear}></Route>
          <Route exact path="/fourthyear" component={fourthyear}></Route>
          <Route exact path="/list" component={FilesList}></Route>
          <Route exact path="/notes" component={Notes}></Route>
          <Route exact path="/noteslist" component={NotesList}></Route>
          <Route exact path="/syllabus" component={Syllabus}></Route>
          <Route exact path="/timetable" component={Timetable}></Route>
          <Route exact path="/timetablelist" component={Timetablelist}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
