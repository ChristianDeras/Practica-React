import { Card } from "./Card";
import RickApi from '../Data/API-JSON.json'
import '../StyleComponents/CardContent.css'
export function CardContent() {

    return(
       <div className="Grid">
           {RickApi.map((Characters)=>(
               <Card key={Characters.id} Chars={Characters}/>
           ))}
       </div>
    );
}

