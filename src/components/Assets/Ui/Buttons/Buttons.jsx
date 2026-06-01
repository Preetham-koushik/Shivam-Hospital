import React from "react";
import styles from "./buttons.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Link from "next/link";
export default function Buttons() {
  return (
    <div className={styles.wrapper}>
      <a href="tel:9606028161">
        <FaPhoneAlt /> Call
      </a>{" "}
      <Link href="/#specialists">
        <FaVideo /> Video Consultation
      </Link>
      <Link href="/contact-us">
        <SlCalender /> Book Appointment
      </Link>
    </div>
  );
}
