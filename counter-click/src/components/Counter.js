import React from "react";
import '../StyleSheets/Counter.css'
function Counter({numClics}) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Counter;