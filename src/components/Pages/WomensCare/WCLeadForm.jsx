"use client";
import React, { useState } from "react";
import styles from "./WCLeadForm.module.css";
import Container from "@/components/Layouts/Container";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function WCLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.wrapper} id="lead-form">
      <Container width>
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className={styles.badge}>Get In Touch</span>
            <h2 className={styles.title}>
              Ready to Start<br />
              <em>Your Journey With Us?</em>
            </h2>
            <p className={styles.desc}>
              Whether it&apos;s a fertility consultation, pregnancy care or
              paediatric appointment — we are here to help. Fill in your details
              and we will call you back promptly.
            </p>
            <div className={styles.contact_items}>
              <a href="tel:9606028161" className={styles.contact_item}>
                <div className={styles.contact_icon}><FaPhoneAlt /></div>
                <div>
                  <p className={styles.contact_label}>Call Us</p>
                  <p className={styles.contact_val}>9606028161</p>
                </div>
              </a>
              <a
                href="https://wa.me/919606028161"
                target="_blank"
                rel="noreferrer"
                className={styles.contact_item}
              >
                <div className={`${styles.contact_icon} ${styles.whatsapp}`}><FaWhatsapp /></div>
                <div>
                  <p className={styles.contact_label}>WhatsApp</p>
                  <p className={styles.contact_val}>Chat with Us</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.form_card}>
            {submitted ? (
              <div className={styles.success}>
                <span>✅</span>
                <h3>Thank You!</h3>
                <p>We&apos;ve received your request and will call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.form_title}>Request a Callback</h3>
                <div className={styles.field}>
                  <label>Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" required />
                </div>
                <div className={styles.field}>
                  <label>E-Mail</label>
                  <input type="email" placeholder="Your email address" />
                </div>
                <div className={styles.field}>
                  <label>Concern</label>
                  <select required>
                    <option value="">Select your concern</option>
                    <option value="ivf">IVF / Fertility</option>
                    <option value="pregnancy">Pregnancy Care</option>
                    <option value="childcare">Child Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className={styles.submit}>
                  Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}