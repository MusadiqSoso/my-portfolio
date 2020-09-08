import React from "react";
import Typed from "react-typed";
import "../home-comp/style.css";
import Yo from "../../img/bals.jpg"


const Homecomp = () => {
    return(
        
          <section id="about" className="about-mf sect-pt4 route" style={{ backgroundImage: "url(" + Yo + ")" }}>
            <h1 className="intro-title mb-4">Hello, I am Musadiq Soso</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Software Developer",
                      "Use Navbar Above To Navigate",
                      "This was made with React JS"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              </section>
        

    );
}
export default Homecomp;