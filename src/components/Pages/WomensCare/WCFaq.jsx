"use client";
import React, { useState } from "react";
import styles from "./WCFaq.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

const faqs = [
  {
    question: "When should I consult a fertility specialist?",
    answer: "If you've been trying to conceive for 6–12 months without success, it's best to consult a fertility specialist. Women over 35 should seek help after 6 months of trying.",
  },
  {
    question: "Is IVF safe?",
    answer: "Yes, when done under expert supervision, IVF is safe and effective. At Shivam Hospital, our fertility specialists use the latest techniques to ensure the best outcomes with minimal risk.",
  },
  {
    question: "Do you provide complete pregnancy care?",
    answer: "Yes, we provide comprehensive pregnancy care from early confirmation through delivery and postnatal support — including high-risk pregnancy management.",
  },
  {
    question: "Do you treat newborns?",
    answer: "Yes, we provide complete paediatric and newborn care including NICU support, vaccinations, growth monitoring and illness management from birth onwards.",
  },
];

export default function WCFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.inner}>
          <div className={styles.left}>
            <SectionTitle
              title="Frequently Asked"
              strongTitle="Questions"
              content="Have questions about our women, fertility or child care services? We have got answers."
            />
          </div>
          <div className={styles.faq_list}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={styles.faq_item}>
                  <button
                    className={styles.faq_btn}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`${styles.faq_q} ${isOpen ? styles.faq_q_active : ""}`}>
                      {faq.question}
                    </span>
                    <svg
                      className={`${styles.chevron} ${isOpen ? styles.chevron_active : ""}`}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`${styles.faq_body} ${isOpen ? styles.faq_body_open : ""}`}>
                    <div className={styles.faq_body_inner}><p>{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}