import { useContext } from 'react';
import styles from '../../styles/components/Profile.module.css'
import { ChallangesContext } from '../contexts/ChallangesContext';

export function Profile() {

    const {level} = useContext(ChallangesContext);

    return (
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/AntonyRafael.png" alt="Imagem Perfil"></img>
            <div>
                <strong>Antony Rafael</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
}