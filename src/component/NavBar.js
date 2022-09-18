import React from "react";
import "../App.css";

function NavBar() {
  return (
    <>
      <section>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="container">
              <div className="container-child">
                <img src="/tvmaze-icon.png" alt="tvmaze" />
                <h1>TVmaze</h1>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
