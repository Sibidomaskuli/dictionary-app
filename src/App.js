import logo from "./SheCodes-logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
 return (
  <div className="App">
   <div className="container">
    <div className="card">
     <div className="card-body">
      <header className="App-header">
       <img src={logo}
        className="img-fluid"
        alt="SE logo"
       />
      </header>
       
      <main>
       <Dictionary defaultKeyword="yellow" />
      </main>
       
      <footer className="App-footer">
       <small>
        <strong>
         <em>I made this</em>
        </strong>  {""}
        <a href="https://github.com/Sibidomaskuli/dictionary.git"
         className="purple"
         target="_blank"
         rel='noreferrer'>
         GitHub
     </a>🌍
     <a href="https://romantic-knuth-bc966b.netlify.app"
         className="green"
         target="_blank"
         rel='noreferrer'>
         {" "}
     Netlify
     </a>
       </small>
      </footer>
     </div> {/*card-body*/}
         
    </div> {/*card*/}
   </div> {/*container*/}
  </div>
 );
}