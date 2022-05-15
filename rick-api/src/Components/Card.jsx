import '../StyleComponents/Card.css';
const isAlive  = function(valor){
    if (valor=="Alive" || valor == "unknown") {
        return true;
    }else{return false;}
}
export function Card({Chars}) {
    return(
        <div className="Cards">
            <img src={Chars.image} className='img' width='100'/>
            <div className='Content'>
                <p>{Chars.name}</p>
                <p>Species: {Chars.species}</p>
                <p>Gender: {Chars.gender}</p>
                <div>Status: <b className={`${isAlive(Chars.status)? 'Status-alive':'Status-dead'}`}>{Chars.status}</b></div>
                Location: {Chars.location.name}

            </div>
        </div>
    );
}