/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React ,{useEffect,useState }from "react";
import LOGO from "./img/logo.png";
import "./Dropdown.css";
// import "./toggleElem.js";
import { Link } from "react-router-dom";


export const toggleElem = function (elem, addClass = true) {
  if (elem) {
    elem.classList.toggle("active", addClass);
  }
};
function Navcompnent() {
  
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  
  for (let i = 0; i < navTogglers.length; i++) {
    navTogglers[i].addEventListener("click", function () {
      toggleElem(navbar);
      toggleElem(overlay);
    });
  }
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      toggleElem(header);
      toggleElem(backTopBtn);
    } else {
      toggleElem(header, false);
      toggleElem(backTopBtn, false);
    }
  });
  
  return (
    <div>
      <header
        data-header
         //className={isHeaderActive ? 'active header-anim' : ''}
       class="header">
        <div class="container">
          <h1>
            <img src={LOGO} alt="" class="logo" />
            <a href="#" class="logo">
              Sage
            </a>
          </h1>
        
    

          <nav class="navbar" data-navbar>
            {/* <div class="navbar-top">
        
            <a href="#" class="logo">Sage</a>

            <button
              class="nav-close-btn"
              aria-label="Close menu"
              data-nav-toggler>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div> */}

            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="#"  data-nav-toggler>
                 <Link to="/" class="navbar-link"> Home </Link>
                </a>
              </li>

              <li class="navbar-item">
                <a href="#" data-nav-toggler>
                <Link to="/about" class="navbar-link" > About </Link>
                </a>
              </li>

              <li class="navbar-item">
                {/* <a href="latest" class="navbar-link" data-nav-toggler>Latest</a> */}
                <div class="dropdown">
                  <a class="navbar-link dropbtn" data-nav-toggler>
                    Latest
                  </a>
                  <div class="dropdown-content">
                    <a href="#" class="navbar-link ">
                      Institute-Update
                    </a>
                    <a href="latest" class="navbar-link">
                      Announcement
                    </a>

                    <a href="rules" class="navbar-link">
                      {" "}
                      Document
                    </a>
                  </div>
                </div>
              </li>

              <li class="navbar-item">
                <a href="#"  data-nav-toggler>
                <Link to="/academic" class="navbar-link"> Academic </Link> 
                </a>
              </li>

              <li class="navbar-item">
                <a href="#"  data-nav-toggler>
                <Link to="/service" class="navbar-link"> Service </Link>  
                </a>
              </li>

              <li class="navbar-item">
                <a href="#"  data-nav-toggler>
                <Link to="/lib" class="navbar-link"> Library </Link>    
                </a>
              </li>
              <li class="navbar-item">
                <a href="trainer" class="navbar-link" data-nav-toggler>
                  For Traineer's
                </a>
              </li>
              <li class="navbar-item">
                <a href="research" class="navbar-link" data-nav-toggler>
                  Research
                </a>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <button
              class="header-action-btn"
              aria-label="Open search"
              data-search-toggler
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <a
              href="#"
              class="header-action-btn"
              style={{ background: `transparent` }}
            >
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

              <Link to="/login"><span ><i class="fa fa-sign-in-alt"></i> Sign In Now</span>
            </Link></a>

            

            <button
              class="header-action-btn nav-open-btn"
              aria-label="Open menu"
              data-nav-toggler
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>

          <div class="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>

      <div class="search-container" data-search-box>
        <div class="container">
          <button
            class="search-close-btn"
            aria-label="Close search"
            data-search-toggler
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div class="search-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search Here..."
              aria-label="Search"
              class="search-field"
            />

            <button
              class="search-submit"
              aria-label="Submit"
              data-search-toggler
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// }

export default Navcompnent;
