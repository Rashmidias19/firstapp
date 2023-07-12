import React from "react";
import { useState } from "react";
import './App.css';

export default function App(){
  return(
    <div className="App">
      <form>
        <fieldset>
          <div className="Field">
              <label>Name:</label>
              <input type="text" placeholder="Name" name="name" />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}