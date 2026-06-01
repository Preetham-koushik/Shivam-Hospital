import React from "react";
import styles from "./wcFertility.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const concerns = [
  "Trying to conceive without success",
  "Irregular cycles / PCOS",
  "Hormonal imbalance",
  "Previous failed treatments",
];

const treatments = [
  "IVF (In Vitro Fertilization)",
  "IUI Treatment",
  "Ovulation Induction",
  "Fertility Evaluation",
];

export default function WCFertility() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.title_wrap}>
              <SectionTitle
                title="Struggling to Conceive?"
                strongTitle="Let's Find the Right Path for You"
                content="Starting a family can feel overwhelming — but you don't have to go through it alone. Our fertility specialists are here to support you every step of the way."
              />
            </div>
            <div className={styles.lists}>
              <div className={styles.list_col}>
                <h3 className={styles.list_title}>Common Concerns</h3>
                {concerns.map((c, i) => (
                  <div key={i} className={styles.list_item}>
                    <FaCheckCircle className={styles.icon_concern} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <div className={styles.list_col}>
                <h3 className={styles.list_title}>Our Fertility Treatments</h3>
                {treatments.map((t, i) => (
                  <div key={i} className={styles.list_item}>
                    <FaCheckCircle className={styles.icon_treat} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="#lead-form" className={styles.cta}>
              Talk to a Fertility Expert <FaArrowRight />
            </Link>
          </div>
          <div className={styles.image_wrap}>
            <div className={styles.image_card}>
              <div className={styles.image_placeholder}>
                <span>🌸</span>
                <p>Fertility Care</p>
              </div>
              <div className={styles.image_badge}>
                <span className={styles.badge_num}>500+</span>
                <span className={styles.badge_lbl}>IVF Successes</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}