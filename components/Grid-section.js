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
          id={styles.graphicDesign}
          src={graphicDesign}
          alt="Graphic Design"
          width={128}
          height={192}
        />
      </div>
      <div className={styles.uiUx}>
        <Image
          id={styles.uiUx}
          src={ulUx}
          alt="UI/UX"
          width={64}
          height={64}
        />
      </div>
      <div className={styles.apps}>
        <Image
          id={styles.apps}
          src={apps}
          alt="Apps"
          width={64}
          height={64}
        />
      </div>
      <div className={styles.illustrations}>
        <Image
          id={styles.illustrations}
          src={illustrations}
          alt="illustrations"
          width={128}
          height={64}
        />
      </div>
      <div className={styles.photography}>
        <Image
          id={styles.photography}
          src={photography}
          alt="photography"
          width={160}
          height={64}
        />
      </div>
      <div className={styles.motionGraphics}>
        <Image
          id={styles.motionGraphics}
          src={motionGraphics}
          alt="motionGraphics"
          width={128}
          height={64}
        />
      </div>

    </section>
  )
}
export default GridSection

