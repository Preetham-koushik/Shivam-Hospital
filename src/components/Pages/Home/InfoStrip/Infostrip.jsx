import React from "react";
import styles from "./infoStrip.module.css";
import Container from "@/components/Layouts/Container";
import { FaAmbulance, FaClock } from "react-icons/fa";

export default function InfoStrip() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>

          <div className={styles.card}>
            <div className={styles.icon_wrap}>
              <FaAmbulance />
            </div>
            <div className={styles.text}>
              <span className={styles.label}>Emergency Services</span>
              <strong className={styles.value}>Available 24/7</strong>
            </div>
           {/* <a href="tel:9606028161" className={styles.cta}>
              Call Now
            </a>*/}
          </div>

          <div className={styles.divider} />

          <div className={styles.card}>
            <div className={`${styles.icon_wrap} ${styles.icon_opd}`}>
              <FaClock />
            </div>
            <div className={styles.text}>
              <span className={styles.label}>OPD Consultation</span>
              <strong className={styles.value}>11:00 AM – 8:00 PM</strong>
            </div>
            {/*<a href="/contact-us" className={styles.cta}>
              Book Now
            </a>*/}
          </div>

        </div>
      </Container>
    </section>
  );
}