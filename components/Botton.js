import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import styles from '@/styles/Bottom.module.css'


export default function Bottom(){
return (
  <div className={styles.bottom}>
    <Image
      className={styles.logo}
      src={logo}
      alt='logo'
      width={48}
      height={48}
    />
    <button className={styles.headerButton}>Free Consultation</button>
  </div>
  )
}
