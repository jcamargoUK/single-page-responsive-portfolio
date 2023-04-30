import Image from "next/image"
import amy from '../public/assets/image-amy.webp'
import styles from '@/styles/Hero.module.css'

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Image 
        className={styles.heroSection__Image}
        src={amy}
        alt="Amy"
        width={300}
        height={300}
      />
      <div className={styles.heroSection__Content}>
        <h1 className={styles.heroSection_H1}>Im Amy, and Id love to work on your next project</h1>
        <p className={styles.heroSection__P}>I love working with others to create beautiful design solutions. Ive designed everything from brand illustrations to complete mobile apps. Im also handy with a camera!</p>
        <button className={styles.heroSection__Button}>Free Consultation</button>
      </div>
    
    </div>
  )
}
export default HeroSection
