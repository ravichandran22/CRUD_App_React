import React from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

const EmpManagement = ({ empDetails, deleteUser }) => {
    const navigate = useNavigate();
    const createUser = () => {
        navigate("/create-user");
    }
    const edit = (id) => {
        navigate(`/edit-user/${id}`);
    }
  return (
    <div className='table-container'>
        <h1 style={{textAlign: "center"}}>CRUD_Operation</h1>
      <button style={createButton} onClick={createUser}>Create</button>
      <table style={employeeTable}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>DOJ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empDetails?.map((emp, index) => (
            <tr key={emp.empId}>
              <td>{index + 1}</td>
              <td>{emp.employeeName}</td>
              <td>{emp.empRole}</td>
              <td>{emp.doj}</td>
              <td>
                <button style={editButton} onClick={() => edit(emp.empId)}>Edit</button>
                <button style={deleteButton} onClick={() => deleteUser(emp.empId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmpManagement;

const createButton = {
    padding: "7px 15px",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: '5px',
    cursor: "pointer",
}
const editButton = {
    padding: "7px 15px",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: '5px',
    cursor: "pointer",
}
const deleteButton = {
    padding: "7px 15px",
    color: "#fff",
    backgroundColor: "red",
    border: "none",
    borderRadius: '5px',
    cursor: "pointer", 
    marginLeft: 10,   
}

const employeeTable = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
}
