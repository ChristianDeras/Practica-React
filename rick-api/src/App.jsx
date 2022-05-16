
import "./StyleComponents/Layout.css";
import "./StyleComponents/Spinner.css"
import { useEffect, useState } from "react";
import {CardContent} from './Components/CardContent'
import { Stadistic } from "./Components/Stadistic";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [infoCharacter, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((Chars) => {
        setData(Chars.results);
        setInfo(Chars.info);
        setIsLoading(false);
      });
  }, );
  if (isLoading) { 
    return (
      <div className="App">
        <div className="center">
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className='Header'>
        Wellcome to the Rick and Morty API
      </div>
        <CardContent fetch={data} className='headline' />
       <div className="Pagination">
         <Stadistic infoData={infoCharacter} currentpage={page}/>
          
       </div>
       <div className="buttons">
          <button className="next" onClick={()=>{
              setPage(page+1);
              window.scrollTo({top:0, behavior: 'smooth'});
              }}>
                Next Page!
          </button>
          <button className="prev" onClick={()=>{
              setPage(page-1);
              window.scrollTo({top:0, behavior: 'smooth'});
              }}>
                Previous Page!
          </button>
       </div>
    </div>
  );
}

export default App;
