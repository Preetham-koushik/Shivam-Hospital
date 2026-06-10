import React from "react";
import styles from "./vision.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function Vision() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Our Mission"
            strongTitle="& Vision"
            content="Guided by purpose, committed to care — everything we do is driven by our mission and vision for a healthier community."
          />
        </div>
        <div className={styles.grid}>

          {/* Mission */}
          <div className={styles.card}>
            <div className={styles.card_top}>
              <div className={styles.icon_wrap}>
                <FaBullseye />
              </div>
              <span className={styles.card_label}>Our Mission</span>
            </div>
            <div className={styles.divider} />
            <blockquote className={styles.quote}>
              &ldquo;At Shivam Hospital, our overarching mission is to deliver
              affordable excellence through expert collaboration, ensuring a
              joyful journey into parenthood. We believe that every family
              deserves the highest quality of care without financial burden.&rdquo;
            </blockquote>
            <div className={styles.card_footer}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </div>

          {/* Vision */}
          <div className={`${styles.card} ${styles.card_accent}`}>
            <div className={styles.card_top}>
              <div className={`${styles.icon_wrap} ${styles.icon_wrap_accent}`}>
                <FaEye />
              </div>
              <span className={`${styles.card_label} ${styles.card_label_accent}`}>Our Vision</span>
            </div>
            <div className={`${styles.divider} ${styles.divider_accent}`} />
            <blockquote className={`${styles.quote} ${styles.quote_accent}`}>
              &ldquo;Our vision focuses on enhancing the experience of
              parenthood by providing unparalleled care and creating
              unforgettable moments. We are committed to supporting you at every
              step of your parenthood journey, ensuring it is filled with
              happiness and well-being.&rdquo;
            </blockquote>
            <div className={styles.card_footer}>
              <div className={`${styles.dot} ${styles.dot_accent}`} />
              <div className={`${styles.dot} ${styles.dot_accent}`} />
              <div className={`${styles.dot} ${styles.dot_accent}`} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}