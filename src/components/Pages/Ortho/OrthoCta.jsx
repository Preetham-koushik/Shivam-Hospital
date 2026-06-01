import React from "react";
import styles from "./orthoCta.module.css";
import Container from "@/components/Layouts/Container";
import SpecialityForm from "@/components/Assets/Ui/Forms/SpecialityForm/SpecialityForm";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function OrthoCta() {
  return (
    <section className={styles.wrapper}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.badge}>Take the First Step</span>
            <h2 className={styles.title}>
              Don&apos;t Let Pain Affect <em>Your Daily Life</em>
            </h2>
            <p className={styles.desc}>
              Take the first step toward a pain-free life. Our orthopaedic
              specialists are here to help you move better, feel better and live
              better.
            </p>
            <div className={styles.ctas}>
              <a href="tel:9606028161" className={styles.cta_phone}>
                <FaPhoneAlt /> Call Now
              </a>
              <a
                href="https://wa.me/919606028161"
                target="_blank"
                rel="noreferrer"
                className={styles.cta_whatsapp}
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className={styles.form_wrap}>
            <SpecialityForm white />
          </div>
        </div>
      </Container>
    </section>
  );
}