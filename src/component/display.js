import React from "react";

function Display(props) {
    return (
      <div>\
        <h1 className="clock">
           {props.time.h}&nbsp;&nbsp;:&nbsp;&nbsp;
            {props.time.m}&nbsp;&nbsp;:&nbsp;&nbsp;
            {props.time.s}
        </h1>
        <h2 className="marka">
            Jam : Menit : Detik
        </h2>
      </div>
    );
}

export default Display