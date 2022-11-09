import React, { MouseEventHandler } from "react";

import "./Timer.css";

type TimerProps = {
  time: number;
  onReset: MouseEventHandler<HTMLButtonElement>;
};

function Timer({ time, onReset }: TimerProps) {
  return (
    <div className="timer">
      <div>{time}</div>
      <button onClick={onReset} className="reset-button">Reset</button>
    </div>
  );
}

export default Timer;
