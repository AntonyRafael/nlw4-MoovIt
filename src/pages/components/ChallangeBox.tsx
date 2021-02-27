import { useContext } from "react";
import styles from "../../styles/components/ChallangeBox.module.css";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallangeBox() {

  const {activeChallange, resetChallange, completeChallange} = useContext(ChallangesContext);
  const {resetCountdown} = useContext(CountdownContext);

  function  handleChallangeSucceeded() {
    completeChallange()
    resetCountdown()
    
  }

  function handleChallendeFailed() {
    resetChallange()
    resetCountdown()
  }

  return (
    <div className={styles.challangeBoxContainer}>
      { activeChallange ? (
        <div className={styles.challangeActive}> 
            <header>Ganhe {activeChallange.amount} xp</header>
            <main>
                <img src={`icons/${activeChallange.type}.svg`}></img>
                <strong>Novo Desafio</strong>
                <p>{activeChallange.description}</p>
            </main>
            <footer>
                <button type="button"
                    className={styles.challangeFailedButton}
                    onClick={handleChallendeFailed}
                >
                    Falhei
                </button>
                <button type="button"
                    className={styles.challangeSucceededButton}
                    onClick={handleChallangeSucceeded}

                >
                    Completei
                </button>
            </footer>
        </div>
      ) : (
        <>
          <div className={styles.challangeNotActive}>
            <strong>Finalize um ciclo para receber um desafio !</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
