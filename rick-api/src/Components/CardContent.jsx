import { Card } from "./Card";
import '../StyleComponents/CardContent.css'
export function CardContent(props) {

    return(
       <div className="Grid">
           {props.fetch.map((Characters)=>(
               <Card key={Characters.id} Chars={Characters}/>
           ))}
       </div>
    );
}

