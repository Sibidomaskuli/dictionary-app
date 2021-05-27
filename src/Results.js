import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css"; 

export default function Results(props) {
  if (props.results) {
   return (
    <span>
     <div className="Results">
      <h2>{props.results.word}</h2>       
      {props.results.phonetics.map(function (phonetic, index) {
       return (
        <div key={index}>
         <Phonetic phonetic={phonetic} />
        </div>        
       );
      })}
      {props.results.meanings.map(function (meaning, index) {
       return (
        <section
         className="meanings"
         key={index}>
         <Meaning meaning={meaning} />
        </section>
       );
      })}
     </div>
    </span>
   );
  } else {
    return null; 
  }
}