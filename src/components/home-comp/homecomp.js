import React from "react";
import Typed from "react-typed";
import "../home-comp/style.css";


const Homecomp = () => {
    return(
        <div>
            <h1 className="intro-title mb-4">Hello, I am Musadiq Soso</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Software Engineer",
                      "Use Navbar Above To Navigate"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
        </div>

    );
}
export default Homecomp;