import { useContext } from "react";
import styles from "../../styles/components/ChallangeBox.module.css";
import { ChallangesContext } from "../contexts/ChallangesContext";

export function ChallangeBox() {

  const {activeChallange, resetChallenge} = useContext(ChallangesContext);

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
                    onClick={resetChallenge}
                >
                    Falhei
                </button>
                <button type="button"
                    className={styles.challangeSucceededButton}

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
