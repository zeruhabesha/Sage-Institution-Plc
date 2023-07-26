// /* eslint-disable no-unused-vars */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { Switch,Route,Link,useHistory } from 'react-router-dom';
// import "./sidebar.css"
// const Sidebar = () => {
   

//     // localStorage.setItem("mode", "light");

  
//     // const body = document.querySelector("body"),
//     // modeToggle = body.querySelector(".mode-toggle");
//     const toggleMode = () => {
//         const mode = localStorage.getItem("mode");
//         if (mode === "light") {
//           localStorage.setItem("mode", "dark");
//         } else {
//           localStorage.setItem("mode", "light");
//         }
      
//         const body = document.querySelector("body");
//         body.classList.toggle("dark");
//       };
     

    

//       const dispatch = useDispatch();
//       // const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
//       const currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || { user: {} };

//       const handleLogout = () => {
//         window.confirm('Are you sure to Logout?') && dispatch(logoutUser());
//       };
//     return (

//               <nav>       
//         {/* <div class="menu-items">      */}

//       <div class="logo-name">
//         <div class="logo-image">
//           <img src="images/logo.png" alt="" />
//         </div>

//         <span class="logo_name">Sage</span>
//       </div>

      
//       {currentUser.user && currentUser.user.role === "students" && (

//           <div class="menu-items">
//           <ul className="nav-links">
//                   <li>  <a href="#"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/adminhome"> Dashbord</Link></span></a></li>
//                   <li>  <a href="#"> <Link to="/grade"><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/grade"> Grade</Link></span></a></li>
//                   <li>  <a href="#"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/library"> Library</Link></span></a></li>
//                   <li>  <a href="#"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to="/profile"> Profile</Link></span></a></li>
//                 </ul>
//                  <ul class="logout-mode">    
//                      <li>  <a href="#"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name"><Link onClick={handleLogout}> Logout </Link></span></a></li>
//                      <li class="mode">
//               <a href="#">
//                 <i class="uil uil-moon"></i>
//                 <span class="link-name">Dark Mode</span>
//               </a>
         
//               <div class="mode-toggle">
//                       <button class="switch" onClick={toggleMode}></button>
//                     </div>
//             </li></ul>  
//          </div>
//         )} 
//         {currentUser.user && currentUser.user.role === "instrucrors" && (

//         // {currentUser.user.role === "instrucrors" && (
//     <div class="menu-items">
//     <ul className="nav-links">
//          <li>  <a href="#"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/adminhome"> Dashbord</Link></span></a></li>
//          <li>  <a href="#"> <Link to="/attend"><i class="uil uil-check"></i></Link><span class="link-name"><Link to="/attend"> Attendance</Link></span></a></li>
//          <li>  <a href="#"> <Link to="/grade"><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/grade"> grade</Link></span></a></li>
//          <li>  <a href="#"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/library"> Library</Link></span></a></li>
//          <li>  <a href="#"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to="/profile"> Profile</Link></span></a></li>
//        </ul>
//         <ul class="logout-mode">    
//             <li>  <a href="#"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name"><Link onClick={handleLogout}> Logout </Link></span></a></li>
//             <li class="mode">
//      <a href="#">
//        <i class="uil uil-moon"></i>
//        <span class="link-name">Dark Mode</span>
//      </a>

//      <div class="mode-toggle">
//              <button class="switch" onClick={toggleMode}></button>
//            </div>
//    </li></ul>  
// </div>

// )} 
// {currentUser.user && currentUser.user.role === "staffs" && (

// // {currentUser.user.role === "staffs" && (
//     <div class="menu-items">
//     <ul className="nav-links">
//           <li>  <a href="#"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span ><Link to="/adminhome" class="link-name"> Dashbord</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/students"><i class="uil uil-meh-alt"></i></Link><span ><Link to="/students" class="link-name"> Student</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/instructors"><i class="uil uil-meh-alt"></i></Link><span ><Link to="/instructors" class="link-name">Instrucrors</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/staffs"><i class="uil uil-meh-alt"></i></Link><span ><Link to="/staffs" class="link-name"> Staff</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/attend"><i class="uil uil-check"></i></Link><span ><Link to="/attend" class="link-name"> Attendance</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/course"><i class="uil uil-clipboard-notes"></i></Link><span ><Link to="/course" class="link-name"> Course</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span><Link to="/library" class="link-name"> Library</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/document"><i class="uil uil-file-exclamation-alt"></i></Link><span ><Link to="/document" class="link-name"> Documents</Link></span></a></li>
//           <li>  <a href="#"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span ><Link to="/profile" class="link-name"> Profile</Link></span></a></li>
//         </ul>
//          <ul class="logout-mode">    
//              <li>  <a href="#"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span><Link onClick={handleLogout}  class="link-name"> Logout </Link></span></a></li>
//              <li class="mode">
//       <a href="#">
//         <i class="uil uil-moon"></i>
//         <span class="link-name">Dark Mode</span>
//       </a>

//       <div class="mode-toggle">
//               <button class="switch" onClick={toggleMode}></button>
//       </div>
//     </li></ul>  
// </div>

// )} 

       
//       {/* </div> */}
//     </nav>
    
        
//     )
// }

// export default Sidebar



// export const logoutUser = () => {
//   sessionStorage.removeItem('currentUser');
//   window.location.href = '/login';
// };

/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import "./sidebar.css";
// import Logos from './images/logo.png';
// import { logoutUser } from '../action/employee_action'

const Sidebar = () => {
   

    // localStorage.setItem("mode", "light");

  
    // const body = document.querySelector("body"),
    // modeToggle = body.querySelector(".mode-toggle");
    const toggleMode = () => {
        const mode = localStorage.getItem("mode");
        if (mode === "light") {
          localStorage.setItem("mode", "dark");
        } else {
          localStorage.setItem("mode", "light");
        }
      
        const body = document.querySelector("body");
        body.classList.toggle("dark");
      };
     

    

      const dispatch = useDispatch();
      // eslint-disable-next-line no-unused-vars
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      const handleLogout = () => {
        window.confirm('Are you sure to Logout?') && dispatch(logoutUser());
      };
    return (

              <nav class="nav1">       
        {/* <div class="menu-items">      */}

      <div class="logo-name"style={{color:`white`}}>
          Sage
      </div>

      {currentUser.user && currentUser.user.role === "students" && (

<div class="menu-items">
<ul className="nav-links">
        <li>  <a href="#" class="side3"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link to="/adminhome" class="link-name"> Dashbord</Link></span></a></li>
        <li>  <a href="#" class="side3"> <Link to="/course"><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/course" class="link-name"> Course</Link></span></a></li>
        <li>  <a href="#" class="side3"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/library" class="link-name"> Library</Link></span></a></li>
      <li>  <a href="#" class="side3"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to="/profile" class="link-name"> Profile</Link></span></a></li>
      {/* <li>  <a href="#" class="side3"> <Link to="/others"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link to="/others"> Others</Link></span></a></li> */}

      </ul>
      <ul class="logout-mode">    
             <li>  <a href="#" style={{fontSize:`larger`}} class="side3"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name" ><Link style={{fontSize:`larger`}} onClick={handleLogout}> Logout </Link></span></a></li>
             <li class="mode">
      <a href="#">
        <i class="uil uil-moon"></i>
         </a>
         <span class="link-name mode-toggle">
              <span class="switch" onClick={toggleMode}></span>
            </span>
    </li></ul> 
</div>

)} 
      {currentUser.user && currentUser.user.role === "instructors" && (

// {currentUser.user.role === "instructors" && (
  <div class="menu-items">
  <ul className="nav-links">
  <li>  <a href="#"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/adminhome" > Dashbord</Link></span></a></li>
        <li>  <a href="#"> <Link to="/students"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link to="/students" style={{fontSize:`larger`}}> Student</Link></span></a></li>
        <li>  <a href="#"> <Link to="/attend"><i class="uil uil-check"></i></Link><span class="link-name"><Link to="/attend" style={{fontSize:`larger`}}> Attendance</Link></span></a></li>
        <li>  <a href="#"> <Link to="/course"><i class="uil uil-clipboard-notes"></i></Link><span class="link-name"><Link to="/course" style={{fontSize:`larger`}}> Course</Link></span></a></li>
        <li>  <a href="#"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link to="/library" style={{fontSize:`larger`}}> Library</Link></span></a></li>
      <li>  <a href="#"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link to="/profile" style={{fontSize:`larger`}}> Profile</Link></span></a></li>
      </ul>
        <ul class="logout-mode">    
            <li>  <a href="#" style={{fontSize:`larger`}} class="side3"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name" ><Link onClick={handleLogout} style={{fontSize:`larger`}}> Logout </Link></span></a></li>
            <li class="mode">
     <a href="#">
       <i class="uil uil-moon"></i>
        </a>
        <span class="link-name mode-toggle">
             <span class="switch" onClick={toggleMode}></span>
           </span>
    

    
   </li></ul>  
</div>

)}
 {currentUser.user && currentUser.user.role === "staffs" && (

//  {currentUser.user.role === "staffs" && (
    <div class="menu-items">
          <ul className="nav-links">
         <li>  <a href="#"> <Link to="/adminhome"><i class="uil uil-label"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/adminhome" > Dashbord</Link></span></a></li>
         <li>  <a href="#"> <Link to="/students"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/students"> Student</Link></span></a></li>
         <li>  <a href="#"> <Link to="/instructors"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/instructors" >Instrucrors</Link></span></a></li>
         <li>  <a href="#"> <Link to="/staffs"><i class="uil uil-meh-alt"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/staffs" > Staff</Link></span></a></li>
         <li>  <a href="#"> <Link to="/attend"><i class="uil uil-check"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/attend" > Attendance</Link></span></a></li>
         <li>  <a href="#"> <Link to="/course"><i class="uil uil-clipboard-notes"></i></Link><span  class="link-name"><Link style={{fontSize:`larger`}} to="/course"> Course</Link></span></a></li>
         <li>  <a href="#"> <Link to="/library"><i class="uil uil-book-open"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/library" > Library</Link></span></a></li>
        <li>  <a href="#"> <Link to="/document"><i class="uil uil-file-exclamation-alt"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/document" > Documents</Link></span></a></li>
       <li>  <a href="#"> <Link to="/profile"><i class="uil uil-user-circle"></i></Link><span class="link-name"><Link style={{fontSize:`larger`}} to="/profile" > Profile</Link></span></a></li>
       </ul>
         <ul class="logout-mode">    
             <li>  <a href="#"  class="side3"> <Link onClick={handleLogout}><i class="uil uil-signout"></i></Link><span class="link-name" ><Link onClick={handleLogout} style={{fontSize:`larger`}}> Logout </Link></span></a></li>
             <li class="mode">
      <a href="#">
        <i class="uil uil-moon"></i>
         </a>
         <span class="link-name mode-toggle">
              <span class="switch" onClick={toggleMode}></span>
            </span>
     

     
    </li></ul>  
</div>

 )}

       
      {/* </div> */}
    </nav>
    
        
    )
}

export default Sidebar



export const logoutUser = () => {
  sessionStorage.removeItem('currentUser');
  window.location.href = '/login';
};