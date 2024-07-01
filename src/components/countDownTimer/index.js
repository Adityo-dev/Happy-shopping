"use client";
import styles from "./countDownTimer.module.css";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  // Set the end time
  const endTime = new Date().getTime() + 100000 * 1000; // 100000 seconds from now

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = endTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timeSegment}>
        <span className={styles.time}>{timeLeft.days || "00"}</span> Days
      </div>
      <div className={styles.timeSegment}>
        <span className={styles.time}>{timeLeft.hours || "00"}</span> Hours
      </div>
      <div className={styles.timeSegment}>
        <span className={styles.time}>{timeLeft.minutes || "00"}</span> Minutes
      </div>
      <div className={styles.timeSegment}>
        <span className={styles.time}>{timeLeft.seconds || "00"}</span> Seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
