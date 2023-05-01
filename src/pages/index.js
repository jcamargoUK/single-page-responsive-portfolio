import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import GridSection from '../../components/Grid-section'
import HeroSection from '../../components/Hero-section'
import Carousel from '../../components/Carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Single Page Responsive Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <GridSection />
        <HeroSection />
        <Carousel />
      </main>
    </>
  )
}
