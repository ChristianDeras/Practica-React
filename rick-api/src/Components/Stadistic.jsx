export function Stadistic({infoData , currentpage}) {
    return(
        <div className="InfoChars">
            <p>Total of characters: {infoData.count}</p>
            <p>Page {currentpage} of {infoData.pages}</p>
        </div>
    );
}