import React from "react";
import styles from "./WCPregnancy.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  "Early Pregnancy Confirmation",
  "Antenatal Check-ups",
  "High-Risk Pregnancy Care",
  "Normal & C-Section Delivery",
  "Ultrasound & Diagnostics",
  "Postnatal Care",
];

export default function WCPregnancy() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.image_wrap}>
            <div className={styles.image_card}>
              <div className={styles.image_placeholder}>
               <Image
  src="/images/womencare/preg.jpeg"
  alt="Fertility Care"
  width={600}
  height={400}
  className={styles.img}
/>
              </div>
              <div className={styles.image_badge}>
                <span className={styles.badge_num}>10k+</span>
                <span className={styles.badge_lbl}>Deliveries</span>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.title_wrap}>
              <SectionTitle
                title="A Safe, Guided"
                strongTitle="Pregnancy Journey"
                content="Once you conceive, we ensure a smooth and safe journey for both mother and baby — from confirmation to postnatal care."
              />
            </div>
            <div className={styles.services_grid}>
              {services.map((s, i) => (
                <div key={i} className={styles.service_item}>
                  <FaCheckCircle className={styles.check} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <Link href="#lead-form" className={styles.cta}>
              Book Pregnancy Consultation <FaArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}