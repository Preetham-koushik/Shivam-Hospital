"use client";
import React, { useState } from "react";
import styles from "./faq.module.css";
import Container from "@/components/Layouts/Container";

const faqs = [
  {
    question: "When should I consult a fertility specialist?",
    answer:
      "If you’ve been trying for 6–12 months without success, it’s best to consult.",
  },
  {
    question: "Is IVF safe?",
    answer:
      "Yes, when done under expert supervision, IVF is safe and effective.",
  },
  {
    question: "Do you provide complete pregnancy care?",
    answer:
      "Yes, from early stages to delivery and postnatal care.",
  },
  {
    question: "Do you treat newborns?",
    answer:
      "Yes, we provide complete pediatric and newborn care.",
  },
  
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.faq_top}>

          <div className={styles.div_faq_padding}>
            <span className={styles.faq_label}>Need help?</span>
            <h2 className={styles.faq_title}>
              Frequently asked <span>questions</span>
            </h2>
            <p className={styles.faq_sub}>
              Everything you need to know about our services, appointments, and care.
            </p>
          </div>

          <div className={styles.faq_right}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={styles.faq_item}>
                  <button
                    className={styles.faq_btn}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.faq_btn_left}>
                      <span className={`${styles.faq_num} ${isOpen ? styles.faq_num_active : ""}`}>
                        {index + 1}
                      </span>
                      <span className={`${styles.faq_q} ${isOpen ? styles.faq_q_active : ""}`}>
                        {faq.question}
                      </span>
                    </div>
                    <svg
                      className={`${styles.faq_chevron} ${isOpen ? styles.faq_chevron_active : ""}`}
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`${styles.faq_body} ${isOpen ? styles.faq_body_open : ""}`}>
                    <div className={styles.faq_body_inner}>
                      <p>{faq.answer}</p>
                    </div>
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