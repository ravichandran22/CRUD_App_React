import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

const CreateEmp = ({createUser, empDetails}) => {
    const [empName, setEmpName] = useState("");
    const [empRole, setEmpRole] = useState("");
    const [doj, setDOJ] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const createEmp = () => {
    if(empName && empRole && doj){
        const data = {
            employeeName: empName,
            empRole: empRole,
            empId: empDetails.length + 1,
            doj: doj
        }
        createUser(data);
        navigate("/");
    }
    else{
        setError(alert("Please Enter All The Fields"));
    }
};

  return (
    <div>
        <h1>Create New Employee</h1>
        <form>
            <label>Employee Name</label>
            <input type='text' value={empName} onChange={(e) => setEmpName(e.target.value)} placeholder='Enter Employee Name' />
            <br />
            <label>Employee Role</label>
            <input type='text' value={empRole} onChange={(e) => setEmpRole(e.target.value)} placeholder='Enter Employee Role' />
            <br />
            <label>DOJ</label>
            <input type='text' value={doj} onChange={(e) => setDOJ(e.target.value)} placeholder='Enter Employee DOJ' />
            <br />
            <button onClick={() => createEmp()} style={createButton}>Create</button>
        </form>
    </div>
  )
}

export default CreateEmp;

const createButton = {
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: '5px',
    cursor: "pointer",
    marginTop: 20,
    fontSize: 16,
}