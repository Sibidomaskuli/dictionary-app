import React from "react";
import "./Meaning.css"; 
import Synonyms from "./Synonyms"; 

export default function Meaning(props) {
 return (
  <div className="Meaning"> 
   <h4>{props.meaning.partOfSpeech}</h4>
   {props.meaning.definitions.map(function (definition, index) {
    return (
     <div key={index}>
      <div className="Meaning">
      {definition.definition}
      </div>

      <div className="Usage">
      <strong>e.g. </strong>
       <em>{definition.example}</em>       
      </div>

       <Synonyms synonyms={definition.synonyms} />             
     </div>
    );
   })}  
  </div>
 );
}