import { useState, useEffect, useContext } from "react";
import styles from "../../styles/components/Countdown.module.css";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
    increaseTime,
    decreaseTime
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>

          
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
          <div className={styles.controlerMinutes}>
            <button type="button" onClick={increaseTime} >+</button>
            <button type="button" onClick={decreaseTime}>-</button>
          </div>

        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.CountDownButton}>
          Ciclo encerrado ✔️
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.CountDownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
