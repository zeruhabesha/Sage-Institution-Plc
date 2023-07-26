/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
// import SidebarAdmin from './components/SidebarAdmin';
// import Navcomponent from './components/Navcomponent';
// import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import Sidebar from './Sidebar';


const Profile = () => {

  const [student, setStudent] = useState({})
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setStudent(values => ({...values, [name]: value}))
  }
  const handleExpandRow = (row) => {
    row.expanded = !row.expanded;
  };


const [employee,setEmployee]=useState("")

  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [Profilelicants, setProfilelicants] = useState([]);
  const [session, setSession] = useState([]);
  const [start,setStart] = useState("")

  // const [file,setFile] = useState("")


  const[test,setTest]=useState("")
  const [show, setShow] = useState(false);
  const[selectedOption,setSelectedOption] = useState("")
  const [status, setStatus] = useState("Inactive");
  const kk = ["Active", "Inactive"];
  const [value,setValue] = useState("")
 
  const[technical,setTechnical] = useState("")
  const[service,setService] = useState("")
  const[blog,setBlog] = useState("")
  const[report,setReport] = useState("")
  const[setting,setSetting] = useState("")
  const[others,setOthers] = useState("")


  const [sid,setSid] = useState("")
  const [first_name,setFirstName] = useState("")
  const [middle_name,setMiddleName] = useState("")
  const [last_name,setLastName] = useState("")
  const [email,setEmail] = useState("")
    const[password,setPassword]=useState("")

  const [role,setRole] = useState("instrucrors");
  const[class_assigned,setClassAssigned]=useState("")
  const [gender,setGender] = useState("")
  const [username,setUserName] = useState("")
  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
   const [dob,setDob] = useState("")
  const [phone,setPhone] = useState("")
 
  const [address,setAddress] = useState("")
  const [department, setDepartment] = useState(false);
  const [hh,setHh] = useState("")
  const [Profilerove, setProfilerove] = useState(false);
  const [Instructors, setInstructors] = useState("instrucrors");
  // const Role = ["Instructors"]
  const [tender, setTender] = useState(false);
  const [privilage, setPrivilage] = useState(false);

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addacc", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/Instructors";
            }else{
              Promise.reject()
            }
          })
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}


  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setHh(user._id);
    setFirstName(user.first_name); 
    setMiddleName(user.middle_name); 
    setLastName(user.last_name); 
    setUserName(user.username);
    setEmail(user.email); 
    setPhone(user.phone);  
    setGender(user.gender); 
    setClassAssigned(user.class_assigned);
    setStartDate(user.start_date);
    setPassword(user.password);
    setRole(user.role); 
    setDepartment(user.department);
    setAddress(user.address);
    setEndDate (user.end_date);
  };

  const handleRequest1 = ()=>{
    const user = {
       
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
     class_assigned,
      role, start_date, end_date,status,
      gender:selectedOption
       
    }
     
   dispatch(registerUser(user))

   setFirstName(""); setMiddleName(""); setLastName(""); setUserName("");
   setEmail(""); setPhone("");  setGender("");  setClassAssigned("");
   setStartDate("");
   setPassword("");
   setRole(""); setDepartment("");
    setAddress("")
   setEndDate ("");setStatus("Inactive")
  
}


  
//   const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.Profileend("first_name",first_name);
      formData.Profileend("middle_name",middle_name);
      formData.Profileend("last_name",last_name);
      formData.Profileend("username",username);
      formData.Profileend("email", email); 
      formData.Profileend("password", password);
      formData.Profileend("gender", selectedOption);
      formData.Profileend("address", address);
            formData.Profileend("dob", dob);
            formData.Profileend("phone", phone);
            formData.Profileend("department", department);
 
      formData.Profileend("class_assigned", class_assigned);
      formData.Profileend("role", role);
            formData.Profileend("start_date", start_date);
      formData.Profileend("end_date", end_date);
           formData.Profileend("status", status);
      formData.Profileend("photo", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:5000/addacc",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

    





const handleRequest = ()=> {
  const obj = {
  
      hh,technical,service,blog,report,setting,others,
  
  }
 
//  dispatch(UploadTask(obj))


}

    

const [user1, setUser] = useState(null);

useEffect(() => {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem("currentUser"));

  setUser(dataFromLocalStorage);
}, []);

const showDetail = (_id) =>
{

fetch(`http://localhost:5000/profile/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setProfilelicants(res))
}
const [editModal, setEditModal] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [statuss, setStatuss] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const [addstud, setAddStud] = useState(false);


const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


const handleAddStud = () =>{
  setAddStud(true);
  setMore(false);
}
const handleStudClose = () =>{
  setAddStud(false);
  setMore(true);
}
const [formValues, setFormValues] = useState({})

// define onChange to get form values
const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
 
  setFormValues(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
  event.preventDefault();
  axios.put(
    `http://localhost:5000/editaccount/${hh}`, formValues)
    .then(res => {
      if(res.status ===200){
        alert('A record successfuly updated')
        // Push to /
        window.location.href = "/Instructors";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}

const handleEdit = () =>{
  setEditModal(true)
};

const toggleSidebar = () => {
  const sidebar = document.querySelector("nav");
  sidebar.classList.toggle("close");
  localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
}; 
const imageUrl = `/${currentUser.user.file}`;

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
				
						<div class="pb-20">
            {currentUser && (
		<div>
            <h2 style={{textAlign:`center`}}>User Profile</h2>

<div class="card2">

<img src={currentUser.user.file} alt="User" class="img-thumbnail" width="100"/>

  {/* <img src="/w3images/team2.jpg" alt="John" style={{width:`100%`}}/> */}
  <h1>{currentUser.user.first_name} {" "} {currentUser.user.middle_name}</h1>
  <p class="title2">{currentUser.user.role}</p>
   <p class="title2">{currentUser.user.status}</p>
  <p>Sage Institute</p>
  <div style={{margin: `24px 0`}}>
    <table class="table w-100 table-responsive table2">
   <tr><th><b>User-Name:</b></th> <td><i>{currentUser.user.username}</i></td></tr> 
   <tr><th><b>Phone:</b></th><td><i>{currentUser.user.phone}</i></td> </tr>
   <tr><th><b>Email:</b></th><td><i>{currentUser.user.email}</i></td></tr>
   <tr><th><b>Address:</b></th><td><i>{currentUser.user.address}</i></td> </tr>
   <tr> <th><b>Role:</b></th><td><i>{currentUser.user.role}</i></td>  </tr>
   <tr> <th><b>Class-Enrollment:</b></th><td><i>{currentUser.user.class_enrollment}</i></td> </tr>
   <tr><th><b>Class-Schedule:</b></th><td><i>{currentUser.user.class_schedule}</i></td> </tr>
   <tr><th><b>Department:</b></th><td><i>{currentUser.user.department}</i></td>  </tr>
   <tr><th><b>DOB:</b></th><td><i>{currentUser.user.dob}</i></td>  </tr>
   <tr><th><b>Start-Date:</b></th><td><i>{currentUser.user.start_date}</i></td></tr>
   <tr><th><b>End-Date:</b></th><td><i>{currentUser.user.end_date}</i></td></tr>
  </table></div>
  <p> <button type="button" class="button2" style={{float:`right`}} onClick={() =>handleEdit()}>
  Edit Profile
</button></p><br/><br/><br/>
</div>	</div>
 )}
 </div> 
					</div>


<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Edit Profile {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
            <div class="form-group">
    <label for="SID">SID</label>
    <input type="text" class="form-control" id="SID" defaultValue={sid} name="sid" onChange={handleChange} placeholder="SID"/>
  </div>
  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" defaultValue={first_name} name="first_name" onChange={handleChange} placeholder="Enter First Name"/>
  </div>
    <div class="form-group">
    <label for="MiddleName">Middle Name</label>
    <input type="text" class="form-control" id="MiddleName" defaultValue={middle_name}  name="middle_name" onChange={handleChange}  placeholder="Enter Middle Name"/>
  </div>
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="text" class="form-control" id="LastName"  defaultValue={last_name} name="last_name" onChange={handleChange} placeholder="Enter Last Name"/>
  </div>
    <div class="form-group">
    <label for="UserName">User Name</label>
    <input type="text" class="form-control" id="UserName"  defaultValue={username} name="username" onChange={handleChange} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" defaultValue={email} name="email" onChange={handleChange} placeholder="Enter Email"/>
  </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" defaultValue={password} name="password"  onChange={handleChange} placeholder="Enter Password"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input type="radio" value="Male" checked={selectedOption === "Male"}  name="gender" onChange={handleChange}/>
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input type="radio" value="Female" checked={selectedOption === "Female"} name="gender" onChange={handleChange}/>
            Female
          </label>
        </div>
           </div>  
             </div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone"  defaultValue={phone} name="phone" onChange={handleChange} placeholder="Enter Phone-Number"/>
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address"  defaultValue={address} name="address" onChange={handleChange} placeholder="Enter Address"/>
  </div>

                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
         

      <div class="modal-footer">
        <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div>
        </form> </div> </div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>


</section>

 </div>

  )
}

export default Profile


{/* 
import React, { useState, useEffect } from "react";

const Profile = () => {
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	return (
	  <div>
		<p>First Name: {currentUser.user.first_name}</p>
		<p>Role: {currentUser.user.role}</p>
		<p>Email: {currentUser.user.email}</p>
		{/* add more properties as needed */}
	//   </div>
	{/* );} */}
{/* export default Profile;  */}