"use client";
import React, { useState } from "react";
import styles from "./orthoFaq.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

const faqs = [
  {
    question: "When should I see an orthopaedic doctor?",
    answer:
      "You should see an orthopaedic doctor if you experience persistent joint pain, swelling, limited movement, or pain following an injury. Early consultation leads to faster, more effective treatment.",
  },
  {
    question: "Is surgery always necessary for orthopaedic conditions?",
    answer:
      "No. Many orthopaedic conditions can be effectively managed with non-surgical treatments including physiotherapy, medication, injections or lifestyle changes. Our specialists always explore non-surgical options first.",
  },
  {
    question: "How long does recovery take after orthopaedic treatment?",
    answer:
      "Recovery depends on the condition and treatment. Minor procedures may require a few weeks, while surgeries can take 3–6 months. Our team provides a personalised recovery plan with physiotherapy support throughout.",
  },
];

export default function OrthoFaq() {
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
              content="Have questions about orthopaedic care? We have got answers. Reach out if you need more help."
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