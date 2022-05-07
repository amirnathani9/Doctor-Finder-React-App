import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useDocumentTitle } from "../../hooks";
import "./DoctorListing.css";

export function DoctorsListing() {
  useDocumentTitle("Doctor Finder - Doctors");

  return (
    <div className="flex">
      <Sidebar />
      <div className="doctor-listing-section">
        <div className="flex">
          <section className="p-5">
            <div className="dropdown">
              <button className="dropbtn">Location</button>
              <div className="dropdown-content">
                <button>Mumbai</button>
                <button>Delhi</button>
                <button>Banglore</button>
              </div>
            </div>
          </section>
          <section className="p-5 flex">
            <div className="dropdown">
              <button className="dropbtn">Specialist</button>
              <div className="dropdown-content">
                <button>Clinics</button>
                <button>Surgen</button>
                <button>Eye Specialist</button>
              </div>
            </div>
          </section>
        </div>
        <section className="product-page-container flex justify-ceneter items-center my-8">
          <main className="flex flex-wrap justify-center">
            <div className="card card-vertical border-radius-1 m-8">
              <div className="card-vertical-image">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png"
                  alt="watch"
                  className="card-img border-radius-1"
                />
              </div>
              <div className="card-content">
                <div className="card-heading">
                  <h3>Dr Kale</h3>
                  <p>Mbbs</p>
                </div>
                <div className="card-product-price">
                  <span className="pr-2"> Consulting Fees </span>
                  <span className="font-bold">₹999.00</span>
                </div>

                <button className="card-btn border-radius-1">
                  Book Appointment
                </button>
              </div>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
