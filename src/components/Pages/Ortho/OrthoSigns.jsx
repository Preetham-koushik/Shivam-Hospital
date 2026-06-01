import React from "react";
import styles from "./orthoSigns.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

const signs = [
  {
    num: "01",
    title: "Persistent Joint Pain",
    desc: "Pain that lasts more than a few days and doesn't improve with rest.",
  },
  {
    num: "02",
    title: "Swelling or Stiffness",
    desc: "Visible swelling, warmth or morning stiffness around joints.",
  },
  {
    num: "03",
    title: "Limited Range of Motion",
    desc: "Difficulty bending, straightening or rotating a joint fully.",
  },
  {
    num: "04",
    title: "Numbness or Tingling",
    desc: "Shooting pain, numbness or tingling in arms, legs or spine.",
  },
  {
    num: "05",
    title: "Muscle Weakness",
    desc: "Unexplained weakness or instability when walking or climbing stairs.",
  },
  {
    num: "06",
    title: "Post-Injury Pain",
    desc: "Pain or instability following a fall, accident or sports injury.",
  },
];

export default function OrthoSigns() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Signs You"
            strongTitle="Shouldn't Ignore"
            content="Early diagnosis leads to better outcomes. Watch out for these warning signs and consult our specialists promptly."
          />
        </div>
        <div className={styles.grid}>
          {signs.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>{item.num}</div>
              <div className={styles.text}>
                <h3 className={styles.card_title}>{item.title}</h3>
                <p className={styles.card_desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.note}>
          ⚠️ Don&apos;t wait for pain to become unbearable — early diagnosis
          leads to faster recovery and better outcomes.
        </div>
      </Container>
    </section>
  );
}