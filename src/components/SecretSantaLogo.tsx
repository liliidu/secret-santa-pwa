import secretSantaLogo from '../assets/secret_santa.svg'
import styles from './style.module.css'

export const SecretSantaLogo = () => {
  return <img src={secretSantaLogo} alt="Secret Santa" className={styles.logo} />
}
