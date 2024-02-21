import React, { useState, useEffect } from "react";
import { data } from "./Components/data";
import EmpManagement from "./Components/EmpManagement";
import CreateEmp from "./Components/CreateEmp";
import EditEmp from "./Components/EditEmp";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const [empDetails, setEmpDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      setEmpDetails(data);
    };
    fetch();
  }, []);

  const createUser = (data) => {
    empDetails.push(data);
    setEmpDetails([...empDetails]); // Create a new array to trigger re-render
  };

  const deleteUser = (id) => {
    const newData = empDetails.filter((item) => item.empId !== id);
    setEmpDetails(newData);
  };

  const editUser = (id, data) => {
    const datas = empDetails.map((item) => item.empId == id ? {...item, ...data} : item)
    setEmpDetails(datas);
    navigate("/");
  }

  return (
    <div className="App-container">
        <Routes>
          <Route 
          exact path="/"
          element={
          <EmpManagement 
          empDetails={empDetails}
          deleteUser={deleteUser}/>
          }
        />
        <Route 
          exact path="/create-user"
          element={
            <CreateEmp 
            createUser={createUser} 
            empDetails={empDetails} 
            />
          }
        />
        <Route 
        exact path="/edit-user/:id"
        element={
        <EditEmp 
        empDetails={empDetails}
        editUser={editUser}
        />}
        />
        </Routes>
    </div>
  );
}

export default App;
