import React from "react";
import styles from "./wcJourney.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

const steps = [
  { emoji: "🌱", label: "Trying to Conceive", desc: "Fertility evaluation and personalised treatment plans." },
  { emoji: "🔬", label: "IVF / IUI", desc: "Advanced fertility treatments with expert supervision." },
  { emoji: "🤰", label: "Pregnancy", desc: "Complete antenatal monitoring and high-risk care." },
  { emoji: "💝", label: "Delivery", desc: "Safe normal or C-section delivery with expert support." },
  { emoji: "👶", label: "Child Care", desc: "Comprehensive newborn and paediatric care." },
];

export default function WCJourney() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="One Hospital."
            strongTitle="Every Step of Your Journey."
            content="No need to switch hospitals. We provide continuous care through every stage — from your first consultation to your child's growing years."
          />
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.step_emoji}>{step.emoji}</div>
              {i < steps.length - 1 && <div className={styles.arrow}>→</div>}
              <h3 className={styles.step_label}>{step.label}</h3>
              <p className={styles.step_desc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}