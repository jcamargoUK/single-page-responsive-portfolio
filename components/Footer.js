import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.h1}>Book a call with me</h1>
      <p className={styles.p}>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
      <button className={styles.button}>
        Free Consultation
      </button>
    </footer>

  )
}