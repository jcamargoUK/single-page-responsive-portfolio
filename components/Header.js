import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Image 
          className={styles.logo}
          src={logo}
          alt='logo'
          width={48}
          height={48}
        />
        <button className={styles.headerButton}>Free Consultation</button>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>Design solutions made easy</h1>
        <p className={styles.p}>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </div>
    </>
  )
}
export default Header