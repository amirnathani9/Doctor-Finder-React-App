import { Link } from "react-router-dom"
import "./Sidebar.css"
export  function Sidebar() {
    return(<div className="sidebar flex flex-col justify-between z-4 pr-7 p-2">
    <ul>
        <li><Link className = "sidebar-items" to="/">Home</Link></li>
        <li ><Link className = "sidebar-items" to="/doctors-listing"> Book an Appointment</Link></li>
        <li ><Link className = "sidebar-items" to="/my-appointment">My Appointment</Link></li>
    </ul>
    <ul>
    <button className="btn primary-outline-btn">Logout</button>
    </ul>
    </div>)
};
