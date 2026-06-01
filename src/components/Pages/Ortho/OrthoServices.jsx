import React from "react";
import styles from "./orthoServices.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import {
  FaBone,
  FaRunning,
  FaHeartbeat,
  FaStethoscope,
  FaDumbbell,
  FaXRay,
  FaHandRock,
  FaRegHospital,
  FaUserMd,
} from "react-icons/fa";

const services = [
  { icon: <FaBone />, title: "Joint Pain Management", desc: "Comprehensive assessment and treatment for knee, hip, shoulder and other joint pain." },
  { icon: <FaStethoscope />, title: "Spine Care", desc: "Diagnosis and treatment for disc issues, spondylosis, sciatica and back pain." },
  { icon: <FaRegHospital />, title: "Fracture Management", desc: "Emergency and planned care for fractures with advanced fixation techniques." },
  { icon: <FaRunning />, title: "Sports Injury Treatment", desc: "Targeted rehab and surgical options for ligament, tendon and muscle injuries." },
  { icon: <FaDumbbell />, title: "Physiotherapy & Rehabilitation", desc: "Structured programs to restore strength, flexibility and function post-treatment." },
  { icon: <FaHeartbeat />, title: "Non-Surgical Pain Management", desc: "Injections, medications and lifestyle modification for long-term relief." },
  { icon: <FaHandRock />, title: "Arthritis Care", desc: "Specialised management for rheumatoid and osteoarthritis with modern therapies." },
  { icon: <FaXRay />, title: "Advanced Diagnostics", desc: "3D imaging, digital X-Ray, MRI and ultrasound for accurate diagnosis." },
  { icon: <FaUserMd />, title: "Orthopaedic Consultation", desc: "Expert second opinions and comprehensive evaluation by our specialists." },
];

export default function OrthoServices() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Our Treatments"
            strongTitle="& Services"
            content="From conservative management to surgical intervention — we offer the full spectrum of orthopaedic care."
          />
        </div>
        <div className={styles.grid}>
          {services.map((item, i) => (
            <div key={i} className={styles.card}>
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