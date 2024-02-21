import React,{useState} from 'react';
import { useParams } from "react-router-dom";

const EditEmp = ({empDetails, editUser}) => {
  const {id} = useParams();

  const emp = empDetails.find((emp) => emp.empId === Number(id)) || {};

  const [empName, setEmpName] = useState(emp?.employeeName);
  const [empRole, setEmpRole] = useState(emp?.empRole);
  const [doj, setDOJ] = useState(emp?.doj);
  const [error, setError] = useState("");
  return (
    <div>
      <h1>Edit User</h1>
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
        <button style={updateButton} onClick={() => editUser(id, {employeeName: empName, empRole, doj, empId: Number(id)})}>Update</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  )
}
export default EditEmp;

const updateButton = {
  padding: "10px 20px",
  color: "#fff",
  backgroundColor: "#3498db",
  border: "none",
  borderRadius: '5px',
  cursor: "pointer",
  marginTop: 20,
  fontSize: 16,
}