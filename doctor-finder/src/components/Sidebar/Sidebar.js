import "./Sidebar.css"
export  function Sidebar() {
    return(<div className="sidebar flex flex-col justify-between z-4 pr-7 p-2">
    <ul>
        <li className = "sidebar-items">Home</li>
        <li  className = "sidebar-items">Book an Appointment</li>
        <li  className = "sidebar-items">My Bookings</li>
    </ul>
    <ul>
    <button class="btn primary-outline-btn">Logout</button>
    </ul>
    </div>)
};
