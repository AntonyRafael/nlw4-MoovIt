import { useContext } from 'react';
import styles from '../../styles/components/ExperienceBar.module.css';
import { ChallangesContext } from '../contexts/ChallangesContext';

export function ExperienceBar() {

  const {currentExperience, experienceToNextLevel} = useContext(ChallangesContext);

  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
          <div style={{width: `${percentToNextLevel}%`}}/>
          <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience}xp</span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}
