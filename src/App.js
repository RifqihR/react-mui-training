import React, {useState} from 'react';
import './App.css';
import Display from "./component/display";
import Button from "./component/Btn";

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0})
  const [interv, setInterv] = useState();
  let updateH = time.h, updateM = time.m, updateS = time.s

  const start = ()=>{
    run();
    setInterv(setInterval(run, 100))
  };
 
  const run = ()=>{
    if(updateM === 60){
      updateH++;
      updateM=0;
    }
    if(updateS === 60){
      updateM++;
      updateS=0;
    }
    updateS++
    return setTime({s:updateS, m:updateM, h:updateH})
  }
  const stop = () =>{
    clearInterval(interv);
  };

  const reset = () =>{
    clearInterval(interv);
    return setTime({s:0, m:0, h:0})
  };

  return (
    <div className="main">
      <div className='Holder'>
        <div className='stopwatch'>
          <Display time={time}/>
        </div>
        <div className="button-layout">
          <Button start={start} stop={stop} reset={reset}/>
        </div>
      </div>
    </div>
  );
}

export default App;
