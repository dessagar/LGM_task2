
import React, { useState } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };
  return (
    <>
     
    
      <div class="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
         <a href="#about">About</a>
         <div className="btn" onClick={getUsers}>GET USERS</div>
      </div>
      <div className="row">
   
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-t">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
      </>
  );
}

export default App;

