import { useContext } from 'react';
import styles from '../../styles/components/ExperienceBar.module.css';
import { ChallangesContext } from '../contexts/ChallangesContext';

export function ExperienceBar() {

  const {currenteExperience, experienceToNextLevel} = useContext(ChallangesContext);

  const percentToNextLevel = Math.round((currenteExperience * 100)) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
          <div style={{width: `${percentToNextLevel}%`}}/>
          <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currenteExperience}xp</span>
      </div>
      <span>{experienceToNextLevel}xp</span>
    </header>
  );
}
