import { Link, useLocation } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {BsFillCalendarFill} from "react-icons/bs";
import {FaInbox} from "react-icons/fa";
import {FaHistory} from "react-icons/fa";
import {FaCreativeCommonsShare} from "react-icons/fa";
import {GiHelp} from "react-icons/gi";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar",
    "Inbox","History","Studio","Commons","Help"];
    const linktoIconMap = {
        Account: <BiUserCircle className="wd-icon"/>,
        Dashboard: <RiDashboard3Fill color="red" className="wd-icon"/>,
        Courses: <FaBook color="red" className="wd-icon"/>,
        Calendar: <BsFillCalendarFill color="red" className="wd-icon"/>,
        Inbox: <FaInbox color="red" className="wd-icon"/>,
        History: <FaHistory color="red" className="wd-icon"/>,
        Studio: <BiUserCircle color="red" className="wd-icon"/>,
        Commons: <FaCreativeCommonsShare color="red" className="wd-icon"/>,
        Help: <GiHelp color="red" className="wd-icon"/>,
    };
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 80 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {linktoIconMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;