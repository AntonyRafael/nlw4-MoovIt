import { useContext } from 'react';
import styles from '../../styles/components/CompletedChallanges.module.css'
import { ChallangesContext } from '../contexts/ChallangesContext';


export function CompleteChallanges() {

    const {challangesCompleted} = useContext(ChallangesContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{challangesCompleted}</span>
        </div>
    );
}