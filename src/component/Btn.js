import React from "react";


function Button(props) {
    return (
      <div className="btn-lyt">
        <button 
            className="btn-reset"
            onClick={props.reset}
        >Reset </button>
        <button 
            className="btn-start"
            onClick={props.start}
        >start </button>
        <button 
            className="btn-stop"
            onClick={props.stop}
        >Stop </button>
        
        
      </div>
    );
}
 
export default Button