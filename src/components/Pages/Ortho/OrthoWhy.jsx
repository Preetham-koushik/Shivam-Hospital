import React from "react";
import styles from "./orthoWhy.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  "Experienced Orthopaedic Doctors",
  "Compassionate Patient Care",
  "Advanced Diagnostic Facilities",
  "Personalized Recovery Plans",
  "Modern Treatment Approaches",
  "Rehabilitation & Physiotherapy Support",
  "Convenient Appointment Scheduling",
  "Patient-Centered Care",
];

export default function OrthoWhy() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.title_wrap}>
              <SectionTitle
                title="Why Choose"
                strongTitle="Shivam Hospital"
                content="We are committed to restoring your mobility and quality of life with expert care, advanced technology and a patient-first approach."
              />
            </div>
            <div className={styles.about_box}>
              <p className="ptag">
                At Shivam Hospital, we provide comprehensive orthopaedic care
                focused on restoring mobility, reducing pain, and improving
                quality of life. Our specialists offer advanced diagnosis and
                personalised treatment for bone, joint, spine, and
                sports-related conditions.
              </p>
              <p className="ptag">
                From non-surgical therapies to advanced orthopaedic procedures,
                we are committed to helping patients move comfortably again.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.reasons_grid}>
              {reasons.map((item, i) => (
                <div key={i} className={styles.reason_item}>
                  <FaCheckCircle className={styles.check_icon} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}