import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import challanges from '../../../challanges.json';
import { LevelUpModal } from '../components/LevelUpModal';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}

interface ChallangesContextData {
    level: number;
    currentExperience: number;
    challangesCompleted: number;
    activeChallange:  Challenge;
    experienceToNextLevel: number;
    levelUp : () => void;
    startNewChallange: () => void; 
    resetChallange: () => void;
    completeChallange: () => void;
    closeLevelUpModal: () => void;
}

interface ChallangesProviderProps {
    children: ReactNode;
    level: number,
    currentExperience: number,
    challangesCompleted: number,
}


export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({children, ...rest}: ChallangesProviderProps) {


    const [level, setLevel] = useState(rest.level ?? 1 );
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challangesCompleted, setchallangesCompleted ] = useState(rest.challangesCompleted ?? 0);

    const [activeChallange, setActiveChallange] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    useEffect(() => {
        Notification.requestPermission();
    },[])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challangesCompleted', String(challangesCompleted));
    }, [level, currentExperience,challangesCompleted])

    function levelUp() {
        setLevel(level +1);
        setIsLevelUpModalOpen(true)
    }


    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false)
    }

    function startNewChallange() {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);   
        const challenge = challanges[randomChallangeIndex];
        setActiveChallange(challenge)

        new Audio('/notification.mp3').play();
        
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio ! 😆', {
                body: `Valendo ${challenge.amount}xp !`,
            })
        }
    }

    function resetChallange() {
        setActiveChallange(null)
    }

    function completeChallange() {
        if(!activeChallange) {
            return
        }

        const {amount } = activeChallange;
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setchallangesCompleted(challangesCompleted + 1);
    }

    return (
    <ChallangesContext.Provider value={
        {level,
        currentExperience,
        challangesCompleted, 
        activeChallange,
        experienceToNextLevel,
        levelUp,
        startNewChallange,
        resetChallange,
        completeChallange,
        closeLevelUpModal }}>
        {children}
        {isLevelUpModalOpen && <LevelUpModal />}
    </ChallangesContext.Provider>

    );
}

