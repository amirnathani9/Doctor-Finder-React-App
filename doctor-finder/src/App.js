import './App.css';
import { Navbar } from './components';
import { DoctorsListing, Home, Login, MyAppointment, Signup } from './pages';
import { Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctors-listing" element={<DoctorsListing/>} />
        <Route path="/my-appointment" element={<MyAppointment />} />
      </Routes>
    </div>
  );
}

export default App;
