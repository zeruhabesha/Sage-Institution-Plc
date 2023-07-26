/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Documentscss.css";
import { Link } from "react-router-dom";
// import Navcomponent from "./components/Navcomponent";
// import SidebarAdmin from "./components/SidebarAdmin";
import Sidebar from "./Sidebar";

function Documents() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  };
  return (
    <div>
    <Sidebar/>
  
       <section class="dashboard">
       <div class="top">
       <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}>
                  
                  </button>
         <div class="search-box">
           <i class="uil uil-search"></i>
           <input type="text" placeholder="Search here..." />
         </div>
 
       </div>
 
       <div class="dash-content">
       <div class="row row-cols-2"><div class="col">
      <article class="train1">
        <div class="temporary_text1">Clerance/Withdrawal form </div>
        <div class="train1_content">
          <span class="train1_title">Applay for Clearance Here..</span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link to="/clearns" class="scroll-link train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}>
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article></div><div class="col">
      <article class="train1">
        <div class="temporary_text1">Intership program</div>
        <div class="train1_content">
          <span class="train1_title">
            View and apply Intership Program Here..
          </span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article>
      </div><div class="col">
      <article class="train1">
        <div class="temporary_text1">RE-exam application form</div>
        <div class="train1_content">
          <span class="train1_title">Apply RE-exam Here..</span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link  to="/reexam" class="scroll-link train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}>
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article></div><div class="col">
      <article class="train1">
        <div class="temporary_text1">Feedback form</div>
        <div class="train1_content">
          <span class="train1_title">
            Send FeedbackSage for train1ing Institute Here
          </span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          {/* /new */}
        </div>
      </article></div><div class="col">
      <article class="train1">
        <div class="temporary_text1">Instructors Absent report form</div>
        <div class="train1_content">
          <span class="train1_title">Instructors Absent report are Here..</span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article></div><div class="col">
      <article class="train1">
        <div class="temporary_text1">Scholarship application form</div>
        <div class="train1_content">
          <span class="train1_title">Apply Scholarship are Here..</span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <a
            href="#"
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            More
          </a>
        </div>
      </article></div><div class="col">

      <article class="train1">
        <div class="temporary_text1">Request for ID lost form</div>
        <div class="train1_content">
          <span class="train1_title">Request for ID lost are Here..</span>
          <span class="train1_subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p class="train1_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
          <label
            className="train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}
          >
            <Link to="/request" class="scroll-link train1an"
            style={{ fontSize: `20px`, textDecoration: `none` }}>
              <i class="fas fa-user"></i> &nbsp;More
            </Link>
          </label>
        </div>
      </article>  </div> </div> </div>
    </section> </div>
  );
}
export default Documents;
