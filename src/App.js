import "./App.css";
import Courses from "./components/Page/Courses/DashboardCourses";
import Teachers from "./components/Page/Teachers/DashboardTeacher";
import Students from "./components/Page/Students/DashboardStudent";
import { Route , Switch} from "react-router-dom";
import Home from "./components/Page/Home";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teachers">
            <Teachers />
          </Route>
          <Route exact path="/students">
            <Students />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>

          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
