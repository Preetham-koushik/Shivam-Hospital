"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./WCDoctors.module.css";
import Container from "@/components/Layouts/Container";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import doctorsData from "@/components/Data/Doctors/doctors.json";

export default function WCDoctors() {
  // Map ALL entries – conditionally add "Dr." prefix
  const teamMembers = doctorsData.map((doc) => ({
    id: doc.id,
    name: doc.isDoctor
      ? `Dr. ${doc.firstname} ${doc.lastname}`.trim()
      : `${doc.firstname} ${doc.lastname}`.trim(),
    designation: doc.designation,
    qualification: doc.qualification,
    experience: doc.workExperience || "Experience not specified",
    image: `/images/doctors/${doc.image}`,
    link: `/doctors/${doc.link}`,
    isDoctor: doc.isDoctor,
  }));

  const slidesToShow = 4;
  const totalSlides = teamMembers.length;

  // Clone first few slides for infinite loop
  const extendedSlides = [
    ...teamMembers,
    ...teamMembers.slice(0, slidesToShow),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (currentIndex >= totalSlides) {
      setCurrentIndex(currentIndex - totalSlides);
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        requestAnimationFrame(() => {
          containerRef.current.style.transition = "transform 0.6s ease";
          setIsTransitioning(false);
        });
      }
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const startAutoPlay = () => {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3500);
    };
    startAutoPlay();
    return () => clearInterval(timerRef.current);
  }, []);

  const pauseAutoPlay = () => clearInterval(timerRef.current);
  const resumeAutoPlay = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);
  };

  const goNext = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prev) => prev + 1);
  };

  const goPrev = () => {
    clearInterval(timerRef.current);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    clearInterval(timerRef.current);
    setCurrentIndex(index);
  };

  const translateX = -(currentIndex * (100 / slidesToShow));

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

        <div
          className={styles.carousel_container}
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div className={styles.slider_wrapper}>
            <div
              ref={containerRef}
              className={styles.slider_track}
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isTransitioning ? "none" : "transform 0.6s ease",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((member, idx) => (
                <div key={`${member.id}-${idx}`} className={styles.slide}>
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
                </div>
              ))}
            </div>
          </div>

          <button className={styles.arrow_left} onClick={goPrev}>
            <FaChevronLeft />
          </button>
          <button className={styles.arrow_right} onClick={goNext}>
            <FaChevronRight />
          </button>

          
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