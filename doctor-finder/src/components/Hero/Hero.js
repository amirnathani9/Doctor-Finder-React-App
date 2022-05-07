import "./Hero.css"
export function Hero() {
    return (<>
        <section className="main-image-container section-center flex items-center justify-center flex-col border-radius-2 my-8">
        <h1 className="mb-2">Doctor Finder</h1>
        <p className="font-size-6 mb-4">Find Doctors in your City</p>
          <button className="btn primary-outline-shop-btn font-size-5 border-radius-2 px-8 py-4">
            Book Appointment
          </button>
      </section>
    </>)
};
