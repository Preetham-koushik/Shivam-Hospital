import styles from "./bannerTitle.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function BannerTitle(props) {
  const { title, titleColor, tag: TAG, img, alt, textAlignment } = props;
  return (
    <section className={styles.BannerTitleContainer}>
      {img && <img src={img} alt={alt ? alt : "banner"} />}

      <div className={styles.BannerBackground}></div>

      <div className={`${styles.banner_tag_container} width`}>
        <TAG
          className={styles.BannerTag}
          style={{ color: titleColor, textAlign: textAlignment }}
        >
          {title}
        </TAG>
      </div>
    </section>
  );
}
