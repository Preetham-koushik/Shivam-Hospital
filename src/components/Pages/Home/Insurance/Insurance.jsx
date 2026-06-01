"use client";
import Container from "@/components/Layouts/Container";
import styles from "./insurance.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
//icons
import { SlCalender } from "react-icons/sl";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function Insurance() {
  let images = [
    {
      id: 1,
      image: "1.png",
      alt: "Insurance Partner  Digit",
    },
    {
      id: 2,
      image: "2.png",
      alt: "Insurance Partner  Medi Assist",
    },
    {
      id: 3,
      image: "3.png",
      alt: "Insurance Partner Raksha TPA",
    },
    {
      id: 4,
      image: "4.png",
      alt: "Insurance Partner ICICI Lombard",
    },
    {
      id: 5,
      image: "5.png",
      alt: "Insurance Partner NIVA Health  Insurance ",
    },
    {
      id: 6,
      image: "6.png",
      alt: "Insurance Partner Bajaj allianz",
    },
    {
      id: 6,
      image: "7.png",
      alt: "Insurance Partner Good Health TPA",
    },
  ];

  return (
    <section className={`${styles.blogs_wrapper} marginBottom`}>
      <Container width>
        <SectionTitle
          title="Insurance Partners"
          strongTitle="For Shivam Hospital"
        />
        <section className={styles.blog_items}>
          <section className={styles.blog_slider_wrapper}>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              centeredSlides={true}
              navigation={{
                nextEl: ".button-next-slide",
                prevEl: ".button-prev-slide",
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
                520: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <article className={styles.insurance_item}>
                      <Image
                        src={`/images/partners/new/${item.image}`}
                        width={160}
                        height={160}
                        alt={item.alt}
                      />
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <div className={styles.team_btns}>
            <button className="button-prev-slide">
              <GrFormPrevious />
            </button>
            <button className="button-next-slide">
              <GrFormNext />
            </button>
          </div>
        </section>
      </Container>
    </section>
  );
}
