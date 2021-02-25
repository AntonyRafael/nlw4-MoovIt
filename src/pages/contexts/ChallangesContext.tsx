import { createContext, ReactNode, useState } from 'react';
import challenges from '../../../challanges.json'


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallangesContextData {
    level: number;
    currenteExperience: number;
    challangesCompleted: number;
    activeChallange:  Challenge;
    experienceToNextLevel: number;
    levelUp : () => void;
    startNewChallange: () => void; 
    resetChallenge: () => void;
    completeChallange: () => void;
}

interface ChallangesProviderProps {
    children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({children}: ChallangesProviderProps) {


    const [level, setLevel] = useState(1);
    const [currenteExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted ] = useState(0);
    const [activeChallange, setActiveChallange] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    function levelUp() {
        setLevel(level +1);
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challenges.length);   
        const challenge = challenges[randomChallangeIndex];
        setActiveChallange(challenge)
    }

    function resetChallenge() {
        setActiveChallange(null)
    }

    function completeChallange() {
        if(!activeChallange) {
            return
        }

        const {amount } = activeChallange;
        let finalExperience = currenteExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setChallangesCompleted(challangesCompleted + 1);
    }

    return (
    <ChallangesContext.Provider value={
        {level
        ,currenteExperience,
        challangesCompleted, 
        activeChallange,
        experienceToNextLevel,
        levelUp,
        startNewChallange,
        resetChallenge,
        completeChallange }}>
        {children}
    </ChallangesContext.Provider>

    );
}

