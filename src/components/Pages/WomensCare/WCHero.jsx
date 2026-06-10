import React from "react";
import styles from "./Wchero.module.css";
import Container from "@/components/Layouts/Container";
import SpecialityForm from "@/components/Assets/Ui/Forms/SpecialityForm/SpecialityForm";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function WCHero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />
      <Container width>
        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.badge}>Women • IVF • Child Care</span>
            <h1 className={styles.title}>
              From Fertility to Motherhood<br />
              & Child Care —<br />
              <span>Complete Care Under One Roof</span>
            </h1>
            <p className={styles.desc}>
              At Shivam Hospital, we walk with you through every step — from
              fertility treatment and a safe pregnancy to expert child care.
              Compassionate, ethical and personalised care for your family.
            </p>
            <div className={styles.ctas}>
              <Link href="#lead-form" className={styles.cta_primary}>
                <SlCalender /> Book Appointment
              </Link>
              <a href="tel:9606028161" className={styles.cta_secondary}>
                <FaPhoneAlt /> Call Now
              </a>
              {/* link */}
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
// 