/* eslint-disable array-callback-return */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import { Link } from 'react-router-dom';
import { Form, Col, FormControl, FormGroup, Select } from "react-bootstrap";
import Toastr from 'toastr';
import { registerTender, UploadTask } from '../admin/action/employee_action';

const AttendanceForm = () => {
  const [check, setCheck] = useState(false);
  const [student, setStudent] = useState({});
  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [applicants, setApplicants] = useState([]);
  const [applicants1, setApplicants1] = useState([]);
  const [applicants2, setApplicants2] = useState([]);
  const [applicants3, setApplicants3] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("Absent"); 
  const [aid,setAid] = useState("");
  const [first_Name,setFirstName] = useState("");
  const [role,setRole] = useState("");
  const [hh,setHh] = useState("");

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/viewstud")
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const toggleSidebar = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
    localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
  };
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  const currentDepartment = currentUser.user.department;
  const filteredUsers = applicants.filter(user => user.department === currentDepartment) ;

  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [staff, setStaff] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleAddAttendance = (userId) => {
    axios.post(`http://localhost:5000/addattend`, { userId })
      .then(response => {
        dispatch({ type: 'ADD_ATTENDANCE', payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const attendanceData = Object.fromEntries(formData);
    attendanceData.userId = selectedUser.id;
    axios.post(`http://localhost:5000/addattend`, attendanceData)
      .then(response => {
        dispatch({ type: 'ADD_ATTENDANCE', payload: response.data });
        Toastr.options = {
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
          preventDuplicates: true,
          timeOut: 3000, // milliseconds
        };
        Toastr.success('This is a success message', 'Success');
        setMessage(''); 
        setShowModal(false);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleShow = (user) => {
  // Set the check variable to true
  // setCheck(true);
  // Set the user variable to the passed in user
  // setStudent(user);
};
const [search, setSearch] = useState("");

  return (
    <div>
    <Sidebar/>
  
       <section class="dashboard">
       <div class="top">
       <button class="uil uil-bars sidebar-toggle" onClick={toggleSidebar}></button>
  
       <div class="search-box">
  <i class="uil uil-search"></i>
  <input type="text" placeholder="Search here..." />
</div>

</div>

{/* <div class="tab-pane" id="home1"> */}
    <div class="dash-content">
						<div class="pd-20">
							<h4 class="text-blue h4"> Students</h4>
						</div> 
 {/* <button type="button" class="btn btn-primary"  onClick={() =>handleCheck()}>Add-Attendance</button> */}

 <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />

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
  {applicants.filter((user) => {
    if (search === "") {
      return user;
    } else if (user && user.first_name && user.last_name && user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase())) {
      return user;
    }
  }).map((user, i) => (
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
        <button class="btn btn-primary" onClick={() => handleShow(user)}><i className="fas fa-plus"></i></button>
      </td>
    </tr>
  ))}
</tbody>
</table>
             
					</div>
    {/* </div> */}

<div class="dash-content">
  <Button onClick={() => handleModalOpen(student)}>Add Attendance</Button>
  {/* <Modal show={showModal} onHide={handleModalClose} 
   dialogClassName="modal-90w"
   aria-labelledby="example-custom-modal-styling-title"
  > */}
<Modal show={showModal} onHide={handleModalClose} dialogClassName="modal-custom-size">
    <Modal.Header closeButton>
      <Modal.Title>Add Attendance</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleFormSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item) => (
              <tr key={item._id}>
                <td><input type="text"  readonly="readonly" name="aid" value={item._id}/></td>
                <td><input type="text"  readonly="readonly" name="first_name" value={item.first_name}/></td>
                <td><input type="text"  readonly="readonly" name="last_name" value={item.last_name}/></td>
                <td><input type="text"  readonly="readonly" name="department" value={item.department}/></td>
                <td>
                 
                  <Form.Group controlId="attendanceStatus">
                    {/* <Form.Label style={{display:`inline`}}>Status</Form.Label> */}
                    <Form.Control as="select" name="status" required style={{display:`inline`, height: `calc(3.25rem + 2px)`}}>
                      <option value="present">Present</option>
                      <option value="absent">Absent</option>
                    </Form.Control>
                  </Form.Group>
                </td>
              </tr>
            ))}
             <Form.Group controlId="attendanceDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" required />
                  </Form.Group>
          </tbody>
          <br/>

        </table>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
</div>
</section>
</div>
);
};

export default AttendanceForm;