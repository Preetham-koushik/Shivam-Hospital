import React from "react";
import styles from "./WCDoctors.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Vanaja Shivakumar",
    designation: "Specialist in Obstetrics, Gynaecology & Infertility",
    qualification: "MBBS, MS (Obstetrics & Gynaecology), Fellowship in Infertility",
    experience: "25+ years",
    image: "/images/doctors/dr_vanaja_shivakumar.jpg",
    link: "/doctors/vanaja-shivakumar",
  },
  {
    name: "Dr. Niranjan Kumar P",
    designation: "Specialist in Paediatrics & Neonatology",
    qualification: "MBBS, MD (Paediatrics), Fellowship in Paediatrics & Neonatology",
    experience: "15+ years",
    image: "/images/doctors/dr_niranjan_kumar.jpg",
    link: "/doctors/niranjan-kumar-p",
  },
];

export default function WCDoctors() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Meet Our"
            strongTitle="Specialists"
            content="Our team of experienced doctors is committed to delivering the highest standard of care with compassion and expertise."
          />
        </div>
        <div className={styles.grid}>
          {doctors.map((doc, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.img_wrap}>
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={300}
                  height={320}
                  className={styles.img}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.doc_name}>{doc.name}</h3>
                <p className={styles.doc_desig}>{doc.designation}</p>
                <p className={styles.doc_qual}>{doc.qualification}</p>
                <span className={styles.doc_exp}>{doc.experience} of experience</span>
                <Link href={doc.link} className={styles.doc_link}>
                  View Profile <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta_wrap}>
          <Link href="#lead-form" className={styles.cta}>
            Book an Appointment <FaArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
}