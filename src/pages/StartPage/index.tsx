import { SecretSantaLogo } from '@/components/SecretSantaLogo'
import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import styles from './styles.module.css'

export const StartPage = () => {
  return (
    <div className={styles.container}>
      <Title>Secret Santa 🎄 🎁</Title>
      <SecretSantaLogo />
      <Button onClick={() => {}}>✨ Start ✨</Button>
    </div>
  )
}

export default StartPage