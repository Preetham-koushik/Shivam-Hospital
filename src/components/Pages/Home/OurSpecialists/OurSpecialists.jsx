"use client";
import React from "react";
//styles
import styles from "./ourSpecialists.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import docData from "@/components/Data/Doctors/doctors.json";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
//icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
export default function OurSpecialists() {
  return (
    <section className={`${styles.wrapper} margin`} id="specialists">
      <Container width>
        <section className={styles.content_items}>
          <SectionTitle title="Specialists" strongTitle="in Shivam Hospital" />
          <section className={styles.doctor_items_wrapper}>
            <section className={styles.doctor_items}>
              <Swiper
                slidesPerView={3}
                spaceBetween={0}
                // centeredSlides={true}
                navigation={{
                  nextEl: ".button-next-testimonials-slide",
                  prevEl: ".button-prev-testimonials-slide",
                }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  650: {
                    slidesPerView: 2,
                  },
                  950: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiperSpecialists"
              >
                {docData.map((item) => {
                  return (
                    <SwiperSlide>
                      <article className={styles.doctor_item} key={item.id}>
                        <Image
                          src={`/images/doctors/${item.image}`}
                          width={370}
                          height={370}
                          alt={item.imageAlt}
                          className={styles.about_img}
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <h3>
                            {item.isDoctor && "Dr."} {item.firstname}
                            {item.lastname}
                          </h3>
                          <p className="ptag">{item.designation}</p>
                          <div className={styles.doctor_item_link}>
                            <Link href={`/doctors/${item.link}`}>
                              View Profile
                            </Link>
                            {item.videoConsultLink && (
                              <Link href={`${item.videoConsultLink}`}>
                                Video consultation
                              </Link>
                            )}
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </section>
            <div className={styles.swiper_button}>
              <button className="button-prev-slide">
                <GrFormPrevious />
              </button>
              <button className="button-next-slide">
                <GrFormNext />
              </button>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
}
