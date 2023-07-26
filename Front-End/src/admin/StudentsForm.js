/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Toastr from 'toastr';
import {registerTender,UploadTask} from './action/employee_action';
// import { Role } from '../../Utills';
import axios from 'axios';
import {Button,Modal} from "react-bootstrap"
import {useParams} from 'react-router-dom'
// import SidebarAdmin from './Sidebar';
// import HomeAdmin from './components/HomeAdmin';
import './table.css';
import './table.js';
import { Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
// import Footer from './components/Footer';
// import TenderCreate from './Request/TenderCreate';
// import Pagination from 'react-bootstrap/Pagination';
// import Navcomponent from './Nav';
import Sidebar from './Sidebar';
// import Search from 'react-bootstrap/Search';


// import { Table, Input } from "antd";
// import { userColumns } from "./columns";
// import { useTableSearch } from "./useTableSearch";
// const { Search } = Input;
// const fetchUsers = async () => {
//   const token = sessionStorage.getItem('jwt')
//   const { data } = await axios.get(`http://localhost:5000/viewstud`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
   
//   return { data };
// };

const StudentsForm = () => {

  const [student, setStudent] = useState({})
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setStudent(values => ({...values, [name]: value}))
  }
  const handleExpandRow = (row) => {
    row.expanded = !row.expanded;
  };


const [employee,setEmployee]=useState([])

  const fileInputRef = useRef(null);
  const {id} = useParams();
  const [applicants, setApplicants] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

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

  const [role,setRole] = useState("students");
  const[class_schedule,setClassSchedule]=useState("")
  const [gender,setGender] = useState("")
  const [username,setUserName] = useState("")
  const [end_date,setEndDate] = useState("")
  const [start_date,setStartDate] = useState("")
   const [dob,setDob] = useState("")
  const [phone,setPhone] = useState("")
  const [class_enrollment,setClassEnrollment] = useState("")
  const [address,setAddress] = useState("")
  const [department, setDepartment] = useState("");
  const [hh,setHh] = useState("")
  const [approve, setApprove] = useState(false);
  const [students, setStudents] = useState("students");
  // const Role = ["students"]
  const [tender, setTender] = useState(false);
  const [privilage, setPrivilage] = useState(false);
  const [file, setFile] = useState('');
  const [grade, setGrade] = useState('');



  const imagefile = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/imagefile/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      const message = error.response.data.message;
      console.log(message);
    }
  };
  
  const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })
    

    try {
        const res = await axios.post("http://localhost:5000/addacc", user).then(res => {
            if(res.status ===200){
              alert('The data is add successfully')
              // Push to /
              window.location.href = "/students";
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

  // start,end,location,link,status,address,city,country,assign,
  //           bind,documentfee,region,category,projectmanager,opendate,enddate,description


  

  const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(userProfile())
// },[])
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
    setClassSchedule(user.class_schedule);
    setStartDate(user.start_date);
    setPassword(user.password);
    setRole(user.role); 
    setDepartment(user.department);
    setClassEnrollment(user.class_enrollment);  
    setAddress(user.address);
    setEndDate (user.end_date);
    setGrade (user.grade);
  };

  const handleRequest1 = ()=>{
    const user = {
       
      first_name,middle_name,last_name,username,
      email,  password,
      phone, address, dob,
      department,
      class_enrollment, class_schedule,
      role, start_date, end_date,status,grade,
      gender:selectedOption
      // file:fileInputRef.current.files[0]
       
    }
     
   dispatch(registerUser(user))

   setFirstName(""); setMiddleName(""); setLastName(""); setUserName("");
   setEmail(""); setPhone("");  setGender("");  setClassSchedule("");
   setStartDate("");
   setPassword("");
   setRole(""); setDepartment("");
   setClassEnrollment("");  setAddress("")
   setEndDate ("");setStatus("Inactive");setGrade("")
  //  setPhoto("")
  
}


const [message, setMessage] = useState('');
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  // const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
  // console.log(currentUser);
  const AddStudent = async (e) => {
    e.preventDefault();
    try {
      // eid,rid,oid,oname,
      // tenderno,tendername,priority,
      //  start,end,location,link,file:fileInputRef.current.files[0],status
      const formData = new FormData();
      formData.append("first_name",first_name);
      formData.append("middle_name",middle_name);
      formData.append("last_name",last_name);
      formData.append("username",username);
      formData.append("email", email); 
      formData.append("password", password);
      formData.append("gender", selectedOption);
      formData.append("address", address);
            formData.append("dob", dob);
            formData.append("phone", phone);
            formData.append("department", department);
      formData.append("class_enrollment", class_enrollment);
      formData.append("class_schedule", class_schedule);
      formData.append("role", role);
            formData.append("start_date", start_date);
      formData.append("end_date", end_date);
           formData.append("status", status); 
           formData.append("grade", grade);
           formData.append("file", fileInputRef.current.files[0]);
    
   
      const res = await axios.post(
        "http://localhost:5000/addacc",
        formData
      );
      Toastr.options = {
        positionClass: 'toast-top-right',
        closeButton: true,
        progressBar: true,
        preventDuplicates: true,
        timeOut: 3000, // milliseconds
      };
      Toastr.success('This is a success message', 'Success');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    axios
      .get("http://localhost:5000/viewstud", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setApplicants(res.data);
        const imageResponse = axios.get(`viewstud/:filename`);
        imageResponse
          .then((res) => {
            const imageUrl = URL.createObjectURL(res.data);
            setImageUrl(imageUrl);
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
          });
      })
      .catch((err) => {
        console.log("Error: " + err.message);
      });
  }, []);


const deletePost = (id) => {
  console.log(id);

  axios.delete(`http://localhost:5000/deleteaccount/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


};

    

 

// useEffect(() => {
//   axios
//     .get("http://localhost:5000/viewstud")
//     .then((res) => {
//       setApplicants(res.data);
//     })
//     .catch((err) => {
//       console.log("Data not found" + err.message);
//       // console.log(currentUser);
//     }, []);
// }, []);


const showDetail = (_id) =>
{

fetch(`http://localhost:5000/viewstud/${_id}`)
.then(resposne=> resposne.json())
.then(res=>setApplicants(res))
}
const [editModal, setEditModal] = useState(false);
const [editModal1, setEditModal1] = useState(false);
const [more, setMore] = useState(false);
const [request, setRequest] = useState(false);
const [organization, setOrganization] = useState(false);
const [edittOrg, setEditOrg] = useState(false);
const [tenderadd, setTenderAdd] = useState(false);
const [tendermore, setTenderMore] = useState(false);
const [statuss, setStatuss] = useState(false);
const [tenderedit, setTendEdit] = useState(false);
const [addstud, setAddStud] = useState(false);

const handleEdit = (hh) =>{
  setEditModal(true)
  setShow(false);

};
const handleGrade = (hh) =>{
  setEditModal1(true)
  setShow(false);

};
const handleGradeClose = () => {
  setEditModal1(false);
  setShow(true);
}

const handleStatus = (hh) =>{
  setStatuss(true)
  setShow(false);
}
const handleAppClose = () => {
  setApprove(false);
  setShow(true);
}
const handleAppClose1 = () => {
  setPrivilage(false);
  setShow(true);
}
const handleReqClose = () => {
  setEditModal(false);
  setShow(true);
}

const handleMoreClose = () => {
  setMore(false);
  setShow(true);
}
const handleTendClose = () => {
  setTender(false);
  setShow(true);
}
const handleTendAddClose = () => {
  setTenderAdd(false);
  setTender(true);
}
const handleOrgClose = () => {
  setOrganization(false);
  setTender(true);
}
const handleTendMoreClose = () => {
  setTenderMore(false);
  setTender(true);
}
const handleEditOrgClose = () => {
  setEditOrg(false);
  setOrganization(true);
}
const handleOrganization = () => {
  setOrganization(true);
  setTender(false);
}
const handleEditOrg = () => {
  setEditOrg(true);
  setOrganization(false);
}
const handleApprove = (hh) =>{
  setApprove(true);
  setShow(false);
}

const handlePrivilage = (hh) =>{
  setPrivilage(true)
  // setEid2(user1.eid)
  // setMobile2(user1.phone)
  // setUsername2(user1.username)
  // setGender2(user1.gender)
  // setTest2(user1._id)
  setShow(false);

};
const handleTenderMore = (hh) =>{
  setTenderMore(true);
  setTender(false);
}
const handleTender = () =>{
  setTender(true);
  setShow(false);
}
const handleTenderEdit = () =>{
  setTendEdit(true);
  setTender(false);
}
const handleMore = (hh) =>{
  setMore(true);
  setShow(false);
}
const handleTenderAdd = (hh) =>{
  setTenderAdd(true);
  setTender(false);
}

const handleAddStud = () =>{
  setAddStud(true);
  setMore(false);
}
const handleStudClose = () =>{
  setAddStud(false);
  setMore(true);
}
const [formValues, setFormValues] = useState({})
const [course, setCourse] = useState([])

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
        Toastr.options = {
          positionClass: 'toast-top-right',
          closeButton: true,
          progressBar: true,
          preventDuplicates: true,
          timeOut: 3000, // milliseconds
        };
        Toastr.success('Successfull Updated', 'Success');
        setMessage('');
        // Push to /
        window.location.href = "/students";
      }else{
        Promise.reject()
      }
    })
    .catch(err => alert('Something went wrong! ' +err.message))
    // Push to /
  
}

const currentUser11 = JSON.parse(sessionStorage.getItem('currentUser'));

const toggleSidebar = () => {
  const sidebar = document.querySelector("nav");
  sidebar.classList.toggle("close");
  localStorage.setItem("status", sidebar.classList.contains("close") ? "close" : "open");
}; 



const handlePaginationChange = (pageNumber) => {
  setPage(pageNumber);
};

const handleImage = (id) => {
  // Do something with the id
};

useEffect(() => {
  axios
    .get("http://localhost:5000/viewcorse")
    .then((res) => {
      setCourse(res.data);
    })
    .catch((err) => {
      console.log("Data not found" + err.message);
    }, []);
});

const currentDepartment = currentUser.user.department;
const filteredUsers = applicants.filter(user => user.department === currentDepartment) ;
const [imageData, setImageData] = useState('');


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
						<div class="pd-20">
							<h4 class="text-blue h4">Students</h4>
						</div> 
            {currentUser11.user.role === "staffs" && ( 
            <button type="button" class="btn btn-primary" onClick={() => handleAddStud()} >
  Add Students
</button> )}
						<div class="pb-20">
            {currentUser11.user.role === "staffs" && ( 
    <table>
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
        {applicants.map((user, i) => (
        <tr key={user._id}>
          <td className="table-plus">
          <img src={user.imageUrl} alt="Applicant" />

          {/* <img src={`data:image/jpeg;base64,${user.imageUrl}`} alt="Student Image" /> */}
            {/* <img src={imageUrl} alt="User Photo" className="img-thumbnail" width="100"/> */}
            {/* <img src={user.photoUrl} alt="User Photo" className="img-thumbnail" width="100" /> */}
          </td>
          <td>{user.Id_no}</td>
          <td>{user.first_name}{user.middle_name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.status}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => handleShow(user)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </td>
        </tr>
      ))}
        </tbody>
      </table>)}
      {currentUser11.user.role === "instructors" && ( 
    <table>
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
             
            <img src={ user.photoUrl} alt="User Photo" class="img-thumbnail" width="100"/>
                </td>
                <td>{user.Id_no}</td>
                <td>{user.first_name}{user.middle_name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    onClick={() => handleShow(user)}
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>)}
						</div>
					</div>


          <Modal
        show={addstud}
       onHide={handleStudClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Students </Modal.Title>
        </Modal.Header>
        <Modal.Body>

			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
        <form><div class="row"> 
          <div class="col-12 col-md-6">
            <div class="form-group">
    <label for="SID">SID</label>
    <input type="text" class="form-control" id="SID" onChange={(e)=>setSid(e.target.value)} placeholder="SID"/>
  </div>
  <div class="form-group">
    <label for="FirstName">First Name</label>
    <input type="text" class="form-control" id="FirstName" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name"/>
  </div>
    <div class="form-group">
    <label for="MiddleName">Middle Name</label>
    <input type="text" class="form-control" id="MiddleName" onChange={(e)=>setMiddleName(e.target.value)} placeholder="Enter Middle Name"/>
  </div>
  <div class="form-group">
    <label for="LastName">Last Name</label>
    <input type="text" class="form-control" id="LastName" onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last Name"/>
  </div>
    <div class="form-group">
    <label for="UserName">User Name</label>
    <input type="text" class="form-control" id="UserName" onChange={(e)=>setUserName(e.target.value)} placeholder="Enter User Name"/>
  </div>
  <div class="form-group">
    <label for="Email">Email</label>
    <input type="email" class="form-control" id="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
  </div>
    <div class="form-group">
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
  </div>
  <div class="form-group">
    <label for="Gender">Gender</label>
    <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input type="radio" value="Male" checked={selectedOption === "Male"}  onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input type="radio" value="Female" checked={selectedOption === "Female"} onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Female
          </label>
        </div>
           </div>  
             </div> </div>  
             <div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone" onChange={e => setPhone(e.target.value)} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <select value={department} id="selectId"  class="form-control" onChange={e => setDepartment(e.target.value)}>
                 
                 {course.map((item) => (
                  <option value={item.course_name} key={item}>
                    {" "}
                    {item.course_name}{" "}
                  </option>
                ))}
                 </select>
  
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="Classe">Class-Enrollment</label>
    <input type="text" class="form-control" id="Classe" onChange={(e)=>setClassEnrollment(e.target.value)} placeholder="Enter Class Enrollment"/>
  </div>
  <div class="form-group">
    <label for="CSchedule">Class-Schedule</label>
    <input type="text" class="form-control" id="CSchedule" onChange={(e)=>setClassSchedule(e.target.value)} placeholder="Enter Class Schedule"/>
  </div>
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" onChange={(e)=>setStartDate(e.target.value)} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End" onChange={(e)=>setEndDate(e.target.value)} placeholder="Enter End Date"/>
  </div>
  <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control">
                  <option>  students  </option>
      </select>  
      </div>
      <input type="hidden" class="form-control" id="status" value={status} name="status"/>

                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file" ref={fileInputRef} class="form-control" id="recipient-file"/>

          </div>
  

  <div class="modal-footer">
  <Button variant="danger" onClick={handleStudClose}>
            Close
          </Button>        
          <button type="button" onClick={AddStudent} class="btn btn-success">Add Student</button>
{/* onClick={() => handleRequest1()} */}
   </div></div></div>
</form>
						</div>
					</div>
              
          </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>


	





  <Modal
        show={show}
       onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For {hh} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table table-striped table-sm">
                <tr>
                <th>Gender</th>
                                <td>{gender}</td></tr>
                           <tr>
                                <th>Phone-Number</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                            <th>Email</th>
                            <td>{email}</td>
                            </tr>
                            <tr>
                            <th>Department</th>
                            <td>{department}</td>
                            </tr>
                            <tr>
                            <th>Address</th>
                            <td>{address}</td>
                            </tr>
                            <tr>
                            <th>Date of Birth</th>
                            <td>{dob}</td>
                            </tr>
                         
                            <tr>
                            <th>Class-Enrollment</th>
                            <td>{class_enrollment}</td>
                            </tr>
                            <tr>
                            <th>Class-Schedule</th>
                            <td>{class_schedule}</td>
                            </tr>
                            <tr>
                            <th>Start-Date</th>
                            <td>{start_date}</td>
                            </tr>
                             <tr>
                            <th>End-Date</th>
                            <td>{end_date}</td>
                            </tr>
                            <tr>
                            <th>Grade</th>
                            <td>{grade}</td>
                            </tr>
                    </table>
                    {currentUser11.user.role === "staffs" && ( 
                    <button type="button" class="btn btn-primary"  onClick={() =>handleEdit(hh)}>
  <i className='fas fa-edit'></i>
</button>)}&nbsp;&nbsp;&nbsp; {currentUser11.user.role === "staffs" && ( 
<button className='btn btn-danger' onClick={()=>{ window.confirm('Are you sure to delete this data', ) 
                                   && deletePost(hh)} } > <i className='fas fa-trash'></i></button>)}
&nbsp;&nbsp;&nbsp; {currentUser11.user.role === "staffs" && ( 
<button type="button" class="btn btn-secondary" onClick={()=> handleApprove(hh)}>
Activity
</button>)}&nbsp;&nbsp;&nbsp;
{currentUser11.user.role === "instructors" && ( 
  <button type="button" class="btn btn-secondary" onClick={()=> handleGrade(hh)}>
Grade
</button>
)}&nbsp;&nbsp;&nbsp; 
<button type="button" class="btn btn-success" onClick={() =>handleStatus(hh)}>Status</button>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      

<Modal
show={editModal}
onHide={handleReqClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Edit Student {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
      <div class="row"> 
          <div class="col-12 col-md-6">
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
             </div> </div>  
             <div>
  <div class="form-group">
    <label for="Phone">Phone-Number</label>
    <input type="text" class="form-control" id="Phone"  defaultValue={phone} name="phone" onChange={handleChange} placeholder="Enter Phone-Number"/>
  </div>
  <div class="form-group">
    <label for="Department">Department</label>
    <input type="text" class="form-control" id="Department"  defaultValue={department} name="department" onChange={handleChange} placeholder="Enter Department"/>
  </div>
    <div class="form-group">
    <label for="Address">Address</label>
    <input type="text" class="form-control" id="Address"  defaultValue={address} name="address" onChange={handleChange} placeholder="Enter Address"/>
  </div>
  <div class="form-group">
    <label for="class_enrollment">Class-Enrollment</label>
    <input type="text" class="form-control" id="class_enrollment"  defaultValue={class_enrollment} name="class_enrollment" onChange={handleChange} placeholder="Enter Class Enrollment"/>
  </div>
  <div class="form-group">
    <label for="class_schedule">Class-Schedule</label>
    <input type="text" class="form-control" id="class_schedule" defaultValue={class_schedule} name="class_schedule" onChange={handleChange} placeholder="Enter Class Schedule"/>
  </div>
  <div class="form-group">
    <label for="Start">Start-Date</label>
    <input type="date" class="form-control" id="Start" defaultValue={start_date} name="start_date" onChange={handleChange} placeholder="Enter Start Date"/>
  </div>
  <div class="form-group">
    <label for="End">End-Date</label>
    <input type="date" class="form-control" id="End"  defaultValue={end_date} name="end_date" onChange={handleChange} placeholder="Enter End Date"/>
  </div>
  {/* <div class="form-group">
    <label for="Role">Role</label>
    <select value={role} id="selectId"  class="form-control" onChange={e => setRole(e.target.value)}>
                  <option value={students}>  students  </option>
      </select>  
      </div> */}
                 <div class="form-group">
            <label for="recipient-file" class="col-form-label">Photo:</label>
            <input type="file"ref={fileInputRef} class="form-control" id="recipient-file"/>
          </div>
         

      <div class="modal-footer">
        <Button variant="secondary" onClick={handleReqClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div></div></div>
        </form> </div> </div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>



<Modal
show={editModal1}
onHide={handleGradeClose}
backdrop="static"
keyboard={false}
size="lg"
>
<Modal.Header closeButton>
  <Modal.Title>Grade {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

           
<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
     <form onSubmit={handleSubmit}>
      <div class="row"> 
          <div class="col-12 col-md-6">
            <div class="form-group">
    <input type="text" class="form-control" id="first_name" defaultValue={first_name} name="first_name" readOnly placeholder={first_name + " " + last_name} />
  </div>
  <div class="form-group">
    <label for="grade">Grade</label>
    <input type="text" class="form-control" id="grade" defaultValue={grade} name="grade" onChange={handleChange} placeholder="Enter grade"/>
  </div>
      <div class="modal-footer">
        <Button variant="secondary" onClick={handleGradeClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-primary" >Save changes</button>
      </div></div></div>
        </form> </div> </div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
</Modal>



<Modal
show={approve}
onHide={handleAppClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>(Active / Inactive) Students {hh} </Modal.Title>
</Modal.Header>
<Modal.Body>

  <form   onSubmit={handleSubmit}  >
            <div class="form-group">
    <label for="EID">Current Status</label>
    {/* <input type="text" defaultValue={status1} style={{backgroundColor:"teal" ,color:"white"}} readOnly  class="form-control" id="EID" placeholder="Active"/> */}
  </div> 
  <label for="EID">Action</label>

  <select  id="selectId"  class="form-control"   name='status'  onChange={handleChange}>
                 
                 {kk.map((item) => (
                 <option value={item} key={item}>
                   {" "}
                   {item}{" "}
                 </option>
               ))}
                </select> 
  <div class="modal-footer">
  <Button variant="danger" onClick={handleAppClose}>
    Close
  </Button> 
        <button type="submit" class="btn btn-success" >Change</button>
      </div>
  </form>
  {/* onClick={() => handleActivity()} */}
</Modal.Body>
<Modal.Footer>
 
 
</Modal.Footer>
</Modal>

<Modal
        show={tendermore}
       onHide={handleTendMoreClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>More For Tender</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      PLC-β enzymatically cleaves the membrane phospholipid phosphoatidylinositol-4,5-bisphopshate (PIP2) into diacylglycerol (DAG) and inositol trisphosphate (IP3). 
      Both DAG and IP3 act as important second messengers. 
      DAG remains in the membrane where it recruits and activates protein kinase C.
      <br/><br/>
      <button type="button" class="btn btn-primary"  onClick={() =>handleTenderEdit()}>
  <i className='fas fa-edit'></i>
</button>&nbsp;&nbsp;&nbsp;
<button className='btn btn-danger' > <i className='fas fa-trash'></i></button>
&nbsp;&nbsp;&nbsp;
{/* onClick={() => deleteMore()} */}
      </Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleTendMoreClose}>
    Close
  </Button> 
 
</Modal.Footer>
</Modal>	



</section>

</div>


  )
}

export default StudentsForm