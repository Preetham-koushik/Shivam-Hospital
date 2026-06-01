import React from "react";
import styles from "./whyTrust.module.css";
import Container from "@/components/Layouts/Container";
import {
  FaHeartbeat,
  FaUserMd,
  FaMicroscope,
  FaHospital,
  FaAmbulance,
  FaHandHoldingHeart,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaHeartbeat />,
    num: "01",
    title: "Compassionate Care",
    desc: "Personalized attention for women, children and orthopaedic patients.",
  },
  {
    icon: <FaUserMd />,
    num: "02",
    title: "Experienced Specialists",
    desc: "Dedicated experts in obstetrics, fertility, paediatrics & orthopaedics.",
  },
  {
    icon: <FaMicroscope />,
    num: "03",
    title: "Advanced Diagnostics",
    desc: "3D/4D Ultrasound, Digital X-Ray, Laboratory & NICU support.",
  },
  {
    icon: <FaHospital />,
    num: "04",
    title: "Complete Care Under One Roof",
    desc: "Consultation, diagnostics, pharmacy, physiotherapy & emergency services.",
  },
  {
    icon: <FaAmbulance />,
    num: "05",
    title: "Emergency Support",
    desc: "24/7 emergency and ambulance services for immediate care.",
  },
  {
    icon: <FaHandHoldingHeart />,
    num: "06",
    title: "Patient-Centered Experience",
    desc: "Comfortable environment with compassionate nursing support.",
  },
];

export default function WhyTrust() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.header_left}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrow_line}></span>
              <span className={styles.eyebrow_text}>Why Choose Us</span>
            </div>
            <h2 className={styles.main_title}>
              Why Families <em>Trust Shivam</em> Hospital
            </h2>
          </div>
          <div className={styles.header_right}>
            <p className={styles.header_desc}>
              We combine expertise, advanced technology and heartfelt care to deliver
              the best outcomes for every patient and family that walks through our doors.
            </p>
            <div className={styles.trust_badge}>
              <div className={styles.trust_badge_dot}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span>Trusted by 10,000+ families in Bangalore</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {reasons.map((item, index) => (
            <div key={index} className={styles.card}>
         
              <div className={styles.icon_wrap}>{item.icon}</div>
              <h3 className={styles.card_title}>{item.title}</h3>
              <p className={styles.card_desc}>{item.desc}</p>
            </div> 
          ))}
        </div>       

      </Container>
    </section>
  );
}