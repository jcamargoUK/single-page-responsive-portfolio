import styles from '@/styles/Carousel.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.slide}>
          <img
            src="/assets/slide1.jpg"
            alt="Slide 1"
            className={styles.slideImg}
          />
        </div>
        <div className={styles.slide}>
          <img
            src="/assets/slide2.jpg"
            alt="Slide 2"
            className={styles.slideImg}
          />
        </div>
        <div className={styles.slide}>
          <img
            src="/assets/slide3.jpg"
            alt="Slide 3"
            className={styles.slideImg}
          />
        </div>
        <div className={styles.slide}>
          <img
            src="/assets/slide4.jpg"
            alt="Slide 4"
            className={styles.slideImg}
          />
        </div>
      </Slider>
    </div>
  );
};
 

export default Carousel;
