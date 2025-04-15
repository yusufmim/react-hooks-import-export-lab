import React from "react";
import { image } from "../data/user"; // named import

function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About; // default export
