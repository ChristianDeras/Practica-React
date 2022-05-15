import react from "react";
import '../StyleSheets/Clear.css'
const Clear = (props) => (
    <div className="btn-clear">
        {props.children}
    </div>
);

export default Clear;