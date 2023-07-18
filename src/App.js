import React from "react";
import { useState } from "react";
import './App.css';

export default function App(){

  const[name,setName]=useState("");

  const handelSubmit =(e) =>{
    e.preventDefault();
    setName("");
    console.log("Form Submitted");
  }

  return(
    <div className="App">
      <form onSubmit={handelSubmit}>
        <fieldset>
          <div className="Field">
              <label htmlFor="name">Name:</label>
              <input
              id="name"
              type="text" placeholder="Name" name="name" value={name}
              onChange={(e)=> setName(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}