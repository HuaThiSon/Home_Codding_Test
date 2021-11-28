import React from 'react';

function DisplayComponent(props) {
  return (
    <div className="main-section">
      <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
      <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;

    </div>
  );
}

export default DisplayComponent;
