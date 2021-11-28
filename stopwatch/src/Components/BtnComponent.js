import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}>Start</button>
          <button className="stopwatch-btn stopwatch-btn-red"
                    onClick={props.stop}>Stop</button>
        </div> : ""
      }
    </div>
  );
}

export default BtnComponent;
