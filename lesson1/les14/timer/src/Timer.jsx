import React, { useState, useEffect} from "react";
import moment from "moment";



function Timer() {
   
  const calculateTimeLeft = () => {
    const difference = +new Date("2022-01-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
   const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
   }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
   
    timerComponents.push(
      <span className= 'time-left'>{timeLeft[interval]} {interval}{" "}</span>
      
    );
  });

  return (
    <div>
      <h1 className='title'>Осталось до Нового года</h1>
      
      <div className="timer__value">{timerComponents.length ? timerComponents : <span>Time's up!</span>}</div>
    </div>
  );
}
export default Timer;
