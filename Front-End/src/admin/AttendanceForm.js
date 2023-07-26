/* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Toastr from 'toastr';

import { registerTender, UploadTask } from './action/employee_action';
// import axios from 'axios';
// import { Button, Modal } from "react-bootstrap";
// import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

import React, { useState, useEffect ,useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Modal, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AttendanceForm = () => {
  const [check, setCheck] = useState(false);
  
  const [student, setStudent] = useState({})
  

  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [applicants, setApplicants] = useState([]);
  const [applicants1, setApplicants1] = useState([]);
  const [applicants2, setApplicants2] = useState([]);
  const [applicants3, setApplicants3] = useState([]);
 
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Absent"); 
  const [aid,setAid] = useState("")
  const [first_name,setFirstName  ] = useState("")
  const [role,setRole  ] = useState("")
  const [hh,setHh] = useState("")

  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addattend", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/course";
            }else{
              Promise.reject()
            }
          })
        // console.log(res);
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


useEffect(() => {
  axios
    .get("http://localhost:5000/viewstud")
    .then((res) => {
      setApplicants(res.data);
    })
    .catch((err) => {
      // console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
  //console.log(applicants);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewinst")
    .then((res) => {
      setApplicants1(res.data);
    })
    .catch((err) => {
      // console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewattstud")
    .then((res) => {
      setApplicants2(res.data);
    })
    .catch((err) => {
      // console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});
useEffect(() => {
  axios
    .get("http://localhost:5000/viewattinst")
    .then((res) => {
      setApplicants3(res.data);
    })
    .catch((err) => {
      // console.log("Data not found" + err.message);
      // console.log(currentUser);
    }, []);
});

const handleShow = (user) => {
  // Set the check variable to true
  setCheck(true);
  // Set the user variable to the passed in user
  setStudent(user);
};
const [formValues, setFormValues] = useState({})

// define onChange to get form values
  
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  };

  const [formValues1, setFormValues1] = useState();

	// const handleCheck = () =>{
	// 	// setHh (hh._id)
	// 	setCheck(true)
	// 	// setUpload(false);
	//   }
	  const handleCheckClose = () => {
      setCheck(false);
      // setUpload(true);
      }

      const handleChange1 = (event) => {

        const name = event.target.name;
        const value = event.target.value;
         
        setFormValues1(values => ({...values, [name]: value}))
        }


        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const currentDepartment = currentUser.user.department;
        const filteredUsers = applicants.filter(user => user.department === currentDepartment) ;


 const handleSubmit1 = (event) => {
		event.preventDefault();
		axios.put(
		  `http://localhost:5000/addattend`, formValues1)
		  .then(res => {
			if(res.status ===200){
			  alert('A record successfuly updated')
			  // Push to /
			  window.location.href = "/attend";
		
			}else{
			alert("error")
			}
		  })
		  .catch(err => alert('Something went wrong! ' +err.message))
		  // Push to /
		  window.location.href = "/attend";
	  }


const handleCheck = () => {
   setCheck(true)
};
const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const handleAddAttendance = () => {
    const checkedStudents = students.filter((student) => attendance.includes(student.sid));
    axios.post(`http://localhost:5000/addattend`, { checkedStudents }).then((response) => {
      setAttendance([]);
    });
  };



  return (
    <div>
   <Sidebar/>
 
      <section class="dashboard">
      <div class="top">
      <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}>
                 {/* <i ></i> */}
                 </button>
        <div class="search-box">
          <i class="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

      </div>

      <div class="dash-content">
<div>
<ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
    <li class="nav-item">
        <a href="#home1" data-bs-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
            <i class="mdi mdi-home-variant d-md-none d-block"></i>
            <span class="d-none d-md-block">Students</span>
        </a>
    </li>
    <li class="nav-item">
        <a href="#profile1" data-bs-toggle="tab" aria-expanded="true" class="nav-link rounded-0 active">
            <i class="mdi mdi-account-circle d-md-none d-block"></i>
            <span class="d-none d-md-block">Instructors</span>
        </a>
    </li>
    <li class="nav-item">
        <a href="#settings1" data-bs-toggle="tab" aria-expanded="false" class="nav-link rounded-0">
            <i class="mdi mdi-settings-outline d-md-none d-block"></i>
            <span class="d-none d-md-block">Staffs</span>
        </a>
    </li>
</ul>

<div class="tab-content">
    <div class="tab-pane" id="home1">
    <div class="dash-content">
						<div class="pd-20">
							<h4 class="text-blue h4"> Students</h4>
						</div> 
 <button type="button" class="btn btn-primary"  onClick={() =>handleCheck()}>Add-Attendance</button>


<table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
								<thead>
								<tr>
										<th class="table-plus datatable-nosort">Photo</th>
                    <th>SID</th>
                    <th>Full Name</th>
										<th>Email</th>
										<th>User Name</th>
										<th>Role</th>
                    <th>Status</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
                {filteredUsers.map((user, i) =>(
        <tr key={user._id}>
             <td class="table-plus">
          <img src="vendors/images/photo4.jpg" class="border-radius-100 shadow" width="40" height="40" alt=""/>
            </td>
					<td>{user.Id_no}</td>
          <td>{user.first_name}{user.middle_name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
									
                    <td>
 <button class="btn btn-primary"  onClick={() => handleShow(user)}><i className="fas fa-plus"></i></button>
              </td>
</tr>  ))}
								</tbody>
							</table>
             
					</div>
    </div>
    <div class="tab-pane show active" id="profile1">
        <p>B</p>
    </div>
    <div class="tab-pane" id="settings1">
        <p>C</p>
    </div>
</div>
</div>
                  
                  <div id="page-content-wrapper">
                <div class="container-fluid">

        <div class="main-container">
			<div class="xs-pd-20-10 pd-ltr-20"></div>


<Modal
show={check}
onHide={handleCheckClose}
backdrop="static"
keyboard={false}
> 
{/* {hh} */}
<Modal.Header closeButton>
  <Modal.Title>Add Attendance Students</Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={registerUser}>
          <div class="form-group">

            <div class="col-md-12">

      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>SID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((student) => (
            <tr key={student.sid}>
              <td><img src={student.photo} alt={student.full_name} /></td>
              <td>{student.sid}</td>
              <td>{student.full_name}</td>
              <td>{student.email}</td>
              <td>{student.username}</td>
              <td>{student.role}</td>
              <td>{student.status}</td>
              <td>
                <input
                  type="checkbox"
                  name="attendance"
                  value={student.sid}
                  checked={attendance.includes(student.sid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddAttendance}>Add Attendance</button>
  </div> </div>
</form>

    </Modal.Body>
<Modal.Footer>


</Modal.Footer>
</Modal>




</div>

</div>
</div></div>
</section>
</div>
  )
}

export default AttendanceForm

