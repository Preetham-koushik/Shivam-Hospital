import React from "react";
import styles from "./orthoHero.module.css";
import Container from "@/components/Layouts/Container";
import SpecialityForm from "@/components/Assets/Ui/Forms/SpecialityForm/SpecialityForm";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function OrthoHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />
      <Container width>
        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.badge}>Advanced Orthopaedic Care</span>
            <h1 className={styles.title}>
              Restore Mobility.<br />
              <span>Relieve Pain.</span><br />
              Reclaim Your Life.
            </h1>
            <p className={styles.desc}>
              Expert orthopaedic specialists at Shivam Hospital provide
              personalised treatment for bone, joint, spine and sports-related
              conditions — from non-surgical therapies to advanced procedures.
            </p>
            <div className={styles.ctas}>
              <Link href="/contact-us" className={styles.cta_primary}>
                <SlCalender /> Book Appointment
              </Link>
              <a href="tel:9606028161" className={styles.cta_secondary}>
                <FaPhoneAlt /> Call Now
              </a>
              <a
                href="https://wa.me/919606028161"
                target="_blank"
                rel="noreferrer"
                className={styles.cta_whatsapp}
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.form_wrap}>
            <SpecialityForm />
          </div>
        </div>
      </Container>
    </section>
  );
}