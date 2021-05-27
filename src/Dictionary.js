import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"; 
import "./Dictionary.css"; 

export default function Dictionary(props) {
 let [keyword, setKeyword]=useState(props.defaultKeyword);
 let [results, setResults]=useState(null);
 let [loaded, setLoaded]=useState(false);
 let [photos, setPhotos]=useState(null); 

 function handleDictionaryResponse(response) {
  setResults(response.data[0]);
 }

 function handlePexelsResponse(response) {  
  setPhotos(response.data.photos);
 }

 function search() {
  //documentation: https://dictionaryapi.dev/
  let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/`+keyword;
  console.log(apiUrl); 
   axios.get(apiUrl).then(handleDictionaryResponse).catch((error) => {
     alert("not found, please try again");
   })
  
  let pexelsApiKey="563492ad6f91700001000001c40c286cedd84b95a4f35621980a4f27";
  let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
  const headers = { Authorization: `Bearer ${pexelsApiKey}` };
  axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
 }

 function handleSubmit(event) {
  event.preventDefault();
  search();
 }

 function handleKeywordChange(event) {
  setKeyword(event.target.value); 
 }

 function load() {
  setLoaded(true);
  search();
 }

 if (loaded) {
  return (
   <div className="Dictionary">
    <section>
     <form onSubmit={handleSubmit}>
      <div className="row">
       <div className="col-10">
        <input type="search"
         className="form-control"
         placeholder="What word do you want to look up?"
         onChange={handleKeywordChange}
         defaultValue = {props.defaultKeyword}
        />
       </div>
       <div className="col-2">
        <input
         type="submit"
         value="search"
         className="btn btn-outline-danger w-100"
        />
       </div>
      </div>
     </form>
    </section>
    <Results results={results} />
    <Photos photos={photos}/>
   </div>
  );
 } else {
  load();
  return "Loading.."; 
 }
 }