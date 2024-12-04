import secretSantaLogo from '@/assets/secret_santa.svg'
import styles from './styles.module.css'

export const SecretSantaLogo = () => {
  return <img src={secretSantaLogo} alt="Secret Santa Logo" className={styles.logo} />
}
