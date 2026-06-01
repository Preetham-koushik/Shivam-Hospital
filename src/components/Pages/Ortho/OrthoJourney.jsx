import React from "react";
import styles from "./orthoJourney.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

const steps = [
  {
    num: "1",
    title: "Consultation",
    desc: "Meet our specialist to discuss your symptoms and concerns in detail.",
  },
  {
    num: "2",
    title: "Evaluation",
    desc: "Thorough physical examination and complete medical history review.",
  },
  {
    num: "3",
    title: "Diagnostics",
    desc: "Advanced imaging — X-Ray, MRI or ultrasound as required.",
  },
  {
    num: "4",
    title: "Treatment Plan",
    desc: "Personalised plan — surgical or non-surgical based on findings.",
  },
  {
    num: "5",
    title: "Recovery",
    desc: "Guided physiotherapy and follow-up until full mobility is restored.",
  },
];

export default function OrthoJourney() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Your"
            strongTitle="Recovery Journey"
            content="A clear, step-by-step path from consultation to full recovery — we guide you every step of the way."
          />
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.step_circle}>{step.num}</div>
              {i < steps.length - 1 && <div className={styles.connector} />}
              <h3 className={styles.step_title}>{step.title}</h3>
              <p className={styles.step_desc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}