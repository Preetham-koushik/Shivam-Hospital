"use client";

import React from "react";
import styles from "./WCDoctors.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import doctorsData from "@/components/Data/Doctors/doctors.json";

export default function WCDoctors() {
  const teamMembers = doctorsData.map((doc) => ({
    id: doc.id,
    name: doc.isDoctor
      ? `Dr. ${doc.firstname} ${doc.lastname}`.trim()
      : `${doc.firstname} ${doc.lastname}`.trim(),
    designation: doc.designation,
    qualification: doc.qualification || "Qualification not listed",
    experience: doc.workExperience || "Experience not specified",
    image: `/images/doctors/${doc.image}`,
    link: `/doctors/${doc.link}`,
  }));

  return (
    <section className={`${styles.wrapper} margin`}>
      <Container className={styles.overflow}>
        <div className={styles.title_wrap}>
          <SectionTitle
            title="Meet Our"
            strongTitle="Specialists"
            content="Our team of experienced doctors is committed to delivering the highest standard of care with compassion and expertise."
          />
        </div>

        <div className={styles.carousel_wrapper}>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              waitForTransition: false,
            }}
            speed={800}
            breakpoints={{
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={styles.swiper_container}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.img_wrap}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={320}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.doc_name}>{member.name}</h3>
                    <p className={styles.doc_desig}>{member.designation}</p>
                    <p className={styles.doc_qual}>{member.qualification}</p>
                    <span className={styles.doc_exp}>{member.experience}</span>
                    <Link href={member.link} className={styles.doc_link}>
                      View Profile <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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