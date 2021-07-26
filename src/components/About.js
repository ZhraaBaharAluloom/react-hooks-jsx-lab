import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about" style={{ textAlign: "center", padding: "15px" }}>
      <h2>About Me</h2>
      <p> Hello, This is me ^_^ Zahraa</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
