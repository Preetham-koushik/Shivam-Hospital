import React from "react";
import styles from "./WCChildCare.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  "Newborn Care & NICU",
  "Vaccination & Immunisation",
  "Growth Monitoring",
  "Fever & Illness Treatment",
  "Pediatric Nutrition Counseling",
  "Adolescent Health Care",
];

export default function WCChildCare() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.title_wrap}>
              <SectionTitle
                title="Care That Grows"
                strongTitle="With Your Child"
                content="From newborn care to growing years, we ensure your child's health and happiness with expert paediatric care."
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
              Book Paediatric Appointment <FaArrowRight />
            </Link>
          </div>
          <div className={styles.image_wrap}>
            <div className={styles.image_card}>
              <div className={styles.image_placeholder}>
                <span>👶</span>
                <p>Child Care</p>
              </div>
              <div className={styles.image_badge}>
                <span className={styles.badge_num}>15+</span>
                <span className={styles.badge_lbl}>Years of Child Care</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}