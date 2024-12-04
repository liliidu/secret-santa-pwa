import { SecretSantaLogo } from '@/components/SecretSantaLogo'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import styles from './styles.module.css'

export const StartPage = ({ onStartClick }: { onStartClick: () => void }) => {
  return (
    <div className={styles.container}>
      <Title>Secret Santa 🎄 🎁</Title>
      <SecretSantaLogo />
      <Button onClick={onStartClick}>✨ Start ✨</Button>
    </div>
  )
}

export default StartPage