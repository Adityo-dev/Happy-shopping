"use client";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.number}>
      <span className={styles.minus} onClick={handleMinus}>
        -
      </span>
      <input className={styles.inputField} type="text" value={count} readOnly />
      <span className={styles.plus} onClick={handlePlus}>
        +
      </span>
    </div>
  );
};

export default Counter;
