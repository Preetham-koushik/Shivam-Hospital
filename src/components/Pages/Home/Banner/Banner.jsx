"use client";

import React, { useState } from "react";
//styles
import styles from "./banner.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(null);

  const handleActiveSlide = (e) => {
    // setActiveSlide(e.realIndex);
  };

  // useEffect(() => {
  //   setActiveSlide(0);
  // }, []);
  return (
    <section className={styles.wrapper}>
      <section className={styles.slider_wrapper}>
        <Swiper
          onSlideChange={(e) => handleActiveSlide(e)}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          loop={true}
          // autoplay={{
          //   delay: 5500,
          //   disableOnInteraction: false,
          // }}
          speed={1400}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/shivam_09-01.jpg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Couple waiting for pregnancy test result"
              />
            </section>
          </SwiperSlide> */}
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/fertility.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Couple waiting for pregnancy test result"
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/gynaecology.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Doctor showing model of  uterus"
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/maternity.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Pregnent women holding her womb "
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/orthopedic.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Patient reacting to knee pain"
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/pediatric.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Child playing with teddy doll with stetoscope"
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.banner_item}>
              <Image
                src={`/images/home/banner/bone.jpeg`}
                width={1520}
                height={550}
                style={{ height: "auto" }}
                alt="Child playing with teddy doll with stetoscope"
              />
            </section>
          </SwiperSlide>
        </Swiper>
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
  );
}
