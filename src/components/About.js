import React from "react";
import Links from "./Links";

function About({bio,links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio===undefined || bio==="" ? "":<p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={links.linkedin} github={links.github}/>
    </div>
  );
}

export default About;
