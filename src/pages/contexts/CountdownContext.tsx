import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangesContext } from "./ChallangesContext";


interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;


export const CountdownContext = createContext({} as CountdownContextData)


export function  CountdownProvider({children}: CountdownProviderProps ) {

const {startNewChallange} = useContext(ChallangesContext);
   
    
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  console.log(setHasFinished);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      console.log("finalizou");
      setHasFinished(true);
      setIsActive(false);
      startNewChallange();
    }
  }, [isActive, time]);


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    );
}