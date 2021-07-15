import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('August 30, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };

  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
   <section className='timer-container'>
     <section className='timer'>
       <div>
         <span className='mdi mdi-calendar-clock timer-icon'></span>
         <h2>Welcome here at Akagera & Rhein Competence Center</h2>
         <p>Websites underdevelpment....</p>
       </div>
       <br></br>
       <br></br>
      <div>
        <section>
          <p>{timerDays}</p>
          <p><small>Days</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p><small>Hours</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p><small>Minutes</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p><small>Seconds</small></p>
        </section>
      </div>
     </section>
   </section> 
  );
}

export default App;
