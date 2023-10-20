import { Route, Routes,Navigate} from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import 'bootstrap/dist/css/bootstrap.min.css';


function Kanbas() {
  return (
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account/>} />
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          <Route path="Calendar" element={<Calendar/>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;