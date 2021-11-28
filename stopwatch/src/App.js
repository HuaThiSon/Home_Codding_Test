import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(0);
    setInterv(setInterval(run, 10));
  };

  var updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    updatedM++;
    return setTime({m:updatedM, h:updatedH});
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(0);
  };


  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent status ={status} start={start}  stop={stop} />
        </div>
      </div>
    </div>
  );
}

export default App;
