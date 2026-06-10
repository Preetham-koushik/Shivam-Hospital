import React from "react";
import styles from "./WCTrust.module.css";
import Container from "@/components/Layouts/Container";
import {
  FaUserFriends, FaBaby, FaUserMd, FaHospital,
  FaAmbulance, FaHeart, FaHandshake, FaComments,
  FaChartLine, FaShieldAlt, FaSmile, FaClock,
} from "react-icons/fa";

const stats = [
  { num: "5000+", label: "Families Trusted" },
  { num: "10,000+", label: "Babies Delivered" },
  { num: "25+", label: "Years Experience" },
  { num: "24/7", label: "Emergency Support" },
];

const badges = [
  { icon: <FaUserFriends />, text: "Trusted by 5000+ Families" },
  { icon: <FaBaby />, text: "10,000+ Babies Delivered" },
  { icon: <FaUserMd />, text: "Experienced Medical Team" },
  { icon: <FaHospital />, text: "Advanced Facilities" },
  { icon: <FaAmbulance />, text: "24/7 Emergency Support" },
  { icon: <FaHeart />, text: "Personalised Fertility Plans" },
  { icon: <FaHandshake />, text: "Ethical & Transparent Approach" },
  { icon: <FaComments />, text: "Emotional + Medical Support" },
  { icon: <FaChartLine />, text: "Continuous Monitoring" },
  { icon: <FaShieldAlt />, text: "Safe Delivery Practices" },
  { icon: <FaSmile />, text: "Child-Friendly Environment" },
  { icon: <FaClock />, text: "Quick Diagnosis" },
];

export default function WCTrust() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.stats_row}>
          {stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.stat_num}>{s.num}</div>
              <div className={styles.stat_label}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.badges_grid}>
          {badges.map((b, i) => (
            <div key={i} className={styles.badge_item}>
              <span className={styles.badge_icon}>{b.icon}</span>
              <span className={styles.badge_text}>{b.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}