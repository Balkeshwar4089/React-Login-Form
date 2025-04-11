// Inside src/App.js

import React, { use, useState } from "react";

import "./App.css";

import TableData from "./components/TableData";

function App() {
  // let [uname, setUname] = useState("");
  // let [password, setPassword] = useState("");
  // let [email, setEmail] = useState("");

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(uname, email, password);
  // };

  let [formData, setformData] = useState({
    uname: "",
    uemail: "",
    upassword: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setformData(oldData);
  };

  let handleSubmit = (event) => {
    let currentUserformData = {
      uname: formData.uname,
      uemail: formData.uemail,
      upassword: formData.upassword,
    };

    let checkFilterUser = userData.filter(
      (v) => v.uemail == formData.uemail || v.upassword == formData.upassword
    );

    if (checkFilterUser.length == 1) {
      alert("Email already exists.....");
    } else {
      let oldUserData = [...userData, currentUserformData];
      setUserData(oldUserData);
      console.log(oldUserData);
      setformData({
        uname: "",
        uemail: "",
        upassword: "",
        index: "",
      });
      event.preventDefault();
    }
  };

  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" onSubmit={handleSubmit}>
        <input
          type="text"
          name="uname"
          onChange={getValue}
          placeholder="Enter your name"
          value={formData.uname}
        />
        <input
          type="email"
          name="uemail"
          onChange={getValue}
          placeholder="email"
          value={formData.uemail}
        />
        <input
          type="password"
          name="upassword"
          onChange={getValue}
          placeholder="password"
          value={formData.upassword}
        />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
      <TableData userData={userData}></TableData>
    </>
  );
}

export default App;
