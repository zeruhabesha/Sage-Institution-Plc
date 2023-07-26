/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './App.css';
import './style.css';
import { useState } from "react";
import { BrowserRouter, Route, Switch, Routes, useHistory } from 'react-router-dom';
import { useEffect, createContext, useReducer, useContext } from 'react';

// frontres-end;
import Homecomponent1 from "./components/Homecomponent";
import Blogs from './components/Blogs';
import Aboutcomponent from './components/Aboutcomponent';
import ContactUscompo from './components/pages/ContactUscompo';
import Logincomponent from './components/Logincomponent';
import Webs from "./components/E-Learning/WebClass";
import Graphics from "./components/E-Learning/GraphicsClass";
import Lan from "./components/E-Learning/Lan";
import Exam from "./components/E-Learning/Exam";
import Business from "./components/E-Learning/BusinessClass";
import AppEn from "./components/E-Learning/AppClass";
import Journalism from "./components/E-Learning/Journ";
import Cisco from "./components/E-Learning/Cisco";
import Acadamics from "./components/Acadamics";
import Trainer from "./components/Trains";
import Gallery from "./components/Galleries";
import Research from "./components/Research";
import Elearn from "./components/E-Learning/ELearning";
import Rules from "./components/RuleRegulation";

// back-end
import Homecomponent from "./admin/Homecomponent";
import StudentsForm from './admin/StudentsForm';
import LibraryForm from './admin/LibraryForm';
import AttendanceForm from './components/AttendanceForm';
import Documents from './admin/Documents';
import InstructorsForm from './admin/InstructorsForm';
import StaffForm from './admin/StaffForm';
import CourseForm from './admin/CourseForm';
import ClearnForm from './admin/ClearnForm';
import ReExam from './admin/ReExam';
import RequestId from './admin/RequestId';
import Profile from './admin/Profile';
import Servicecomponent from './components/Servicecomponent';
import LibraryPage from './components/LibraryPage';




const Routing = () => {
  const [users, setUsers] = useState(null);
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  let currentUserRole = currentUser && currentUser.user ? currentUser.user.role : null;

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("currentUser"));
    if (data) {
      setUsers(data);
    } else {
    }
  }, []);
  const shouldComponentUpdate = () => {
    // Only render the component if the users state has changed.
    return users !== this.state.users;
  };
 


  return (
    
  <Switch>
      
     {users && (
  <div> 
      {currentUser.user.role === "students" && ( 
    <Route  path="/course" component={CourseForm} />
   )}
   {currentUser.user.role === "instructors" && ( 
    <Route  path="/course" component={CourseForm} />
   )}
       {currentUserRole === "instructors" && ( 
  <Route   path="/attend" component={AttendanceForm}/> 
)}
           {currentUserRole === "instructors" && ( 
        <Route   path="/students" component={StudentsForm}/> 
       )} 
       
       {/* staff */}
       {currentUser.user.role === "staffs" && ( 
        <Route  path="/staffs" component={StaffForm} />
       )}
              {currentUser.user.role === "staffs" && ( 
        <Route  path="/instructors" component={InstructorsForm} />
       )}
           {currentUser.user.role === "staffs" && ( 
        <Route  path="/course" component={CourseForm} />
       )}
       {currentUser.user.role === "staffs"  && ( 
        <Route   path="/attend" component={AttendanceForm}/> 
       )}
      {currentUser.user.role === "staffs" && ( 
        <Route   path="/students" component={StudentsForm}/> 
       )}
        {currentUser.user.role === "staffs"  && ( 
        <Route   path="/document" component={Documents}/> 
       )}
        {currentUser.user.role === "staffs"  && ( 
        <Route   path="/clearns" component={ClearnForm}/> 
        )} {currentUser.user.role === "staffs"  && ( 
        <Route   path="/reexam" component={ReExam}/> 
        )} {currentUser.user.role === "staffs"  && ( 
        <Route   path="/request" component={RequestId}/>
         
        )}

        {/* common */}
         <Route   path="/profile" component={Profile}/> 
         <Route   path="/library" component={LibraryForm}/> 
         <Route path="/adminhome" exact component={Homecomponent} />
</div> 
    
 )} 

        {/* {!users && ( */}
        <Route exact path="/" component={Homecomponent1} />
      <Route path="/about" component={Aboutcomponent} />
        <Route path="/service" component={Servicecomponent} />
        <Route path="/lib" component={LibraryPage} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/login" component={Logincomponent} />
      <Route path="/Academic" component={Acadamics} />
      <Route path="/trainer" component={Trainer} />
      <Route path="/research" component={Research} />
      <Route path="/learn" component={Elearn} />
      <Route path="/rules" component={Rules} />
      <Route path="/weblearn" component={Webs} />
      <Route path="/applearn" component={AppEn} />
      <Route path="/graplearn" component={Graphics} />
      <Route path="/bunilearn" component={Business} />
      <Route path="/jornlearn" component={Journalism} />
      <Route path="/ciscolearn" component={Cisco} />
      <Route path="/lanlearn" component={Lan} />
      {/* )} */}
              {/* <Route path="/students">  <StudentsForm /> </Route> */}
             
             {/* )} */}
             {/* {currentUser.user.role === "students" && (     */} 
               {/* )} */}
             {/* <Route path="/students/:id">  <StudentsForm /> </Route> */}
             {/* {currentUser.user.role === "staffs" && (     */}
              {/* <Route path="/staffs">  <StaffForm /> </Route> */}
              {/* )}   */}
              {/* {currentUser.user.role === "staffs" && (    */}
               {/* <Route path="/staffs/:id">  <StaffForm /> </Route> */}
                {/* )}  */}

{/* {currentUser.user.role === "staffs" && ( 
              <Route  path="/course">  <CourseForm /></Route>
              )}
               {currentUser.user.role === "staffs" && ( 
<Route  path="/course/:id">  <CourseForm /></Route> )} */}
{/* {currentUser.user.role === "staffs"  && (  */}
             {/* <Route   path="/attend" > <AttendanceForm/> </Route>  */}
             {/* )} */}
{/* {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && (  */}
             {/* <Route   path="/attend/:id">  <AttendanceForm/> </Route> */}
             {/* )} */}
{/*          
         {currentUser.user.role === "instructors" && (  
              <Route  path="/instructors">  <InstructorsForm /></Route>)}
               {currentUser.user.role === "instructors" && (  
               <Route  path="/instructors/:id">  <InstructorsForm /></Route> )}

              {currentUser.user.role === "staffs" && (    
             <Route path="/staffs">  <StaffForm /> </Route>
             )}
              {currentUser.user.role === "staffs" && (   
              <Route path="/staffs/:id">  <StaffForm /> </Route> )}

          

             {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && ( 
             <Route   path="/library" > <LibraryForm/> </Route>)}
             {currentUser.user.role === "staffs" || currentUser.user.role === "instructors" && (
             <Route   path="/library/:id">  <LibraryForm/> </Route>)} */}

           

        </Switch>
     
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;