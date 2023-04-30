import styles from '@/styles/Grid-section.module.css'
import Image from 'next/image'
import graphicDesign from '../public/assets/graphicDesign.svg'
import ulUx from '../public/assets/uiUx.svg'
import apps from '../public/assets/apps.svg'
import illustrations from '../public/assets/illustrations.svg'
import photography from '../public/assets/photography.svg'
import motionGraphics from '../public/assets/motionGraphics.svg'

const GridSection = () => {
  return (
    <section className={styles.gridSection}>

      <div className={styles.graphicDesign}>
        <Image
          id={styles.graphicDesignImg}
          src={graphicDesign}
          alt="Graphic Design"
          width={128}
          height={192}
        />
        <p className={styles.p} id={styles.graphicDesignP}>Graphic Design</p>
      </div>

      <div className={styles.uiUx}>
        <Image
          id={styles.uiUxImg}
          src={ulUx}
          alt="UI/UX"
          width={64}
          height={64}
        />
        <p className={styles.p} id={styles.uiUxP}>UI/UX</p>
      </div>
      <div className={styles.apps}>
        <Image
          id={styles.appsImg}
          src={apps}
          alt="Apps"
          width={64}
          height={64}
        />
        <p className={styles.p} id={styles.appsP}>Apps</p>
      </div>
      <div className={styles.illustrations}>
        <Image
          id={styles.illustrationsImg}
          src={illustrations}
          alt="illustrations"
          width={128}
          height={64}
        />
        <p className={styles.p} id={styles.illustrationsP}>Illustrations</p>
      </div>
      <div className={styles.photography}>
        <Image
          id={styles.photographyImg}
          src={photography}
          alt="photography"
          width={160}
          height={64}
        />
        <p className={styles.p} id={styles.photographyP}>Photography</p>
      </div>
      <div className={styles.motionGraphics}>
        <Image
          id={styles.motionGraphicsImg}
          src={motionGraphics}
          alt="motionGraphics"
          width={128}
          height={64}
        />
        <p className={styles.p} id={styles.motionGraphicsP}>Motion Graphics</p>
      </div>

    </section>
  )
}
export default GridSection

