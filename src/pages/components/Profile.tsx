import styles from '../../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.ProfileContainer}>
            <img src="https://github.com/AntonyRafael.png" alt="Imagem Perfil"></img>
            <div>
                <strong>Antony Rafael</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level 1
                </p>
            </div>
        </div>
    );
}