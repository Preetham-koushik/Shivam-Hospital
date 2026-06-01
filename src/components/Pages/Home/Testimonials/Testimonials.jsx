"use client";
import Container from "@/components/Layouts/Container";
import styles from "./testimonials.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
//icons
import { SlCalender } from "react-icons/sl";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function Testimonials() {
  let images = [
    "partners_1.jpg",
    "partners_2.jpg",
    "partners_3.jpg",
    "partners_4.jpg",
    "partners_5.jpg",
    "partners_6.jpg",
    "partners_7.jpg",
    "partners_8.jpg",
    "partners_9.jpg",
    "partners_10.jpg",
    "partners_11.jpg",
    "partners_12.jpg",
    "partners_13.jpg",
    "partners_14.jpg",
    "partners_15.jpg",
  ];

  let Testimonials = [
    {
      id: 1,
      title: "chaithra gowda",
      desc: "Vanaja Shivkumar is the doctor you can trust closing your eyes. I am grateful I got to meet you mam, you are an inspiration for lot of women’s. Keep inspiring and save lot of lives like you saved mine mam🙏.",
    },
    {
      id: 2,
      title: "Komathi G",
      desc: "Dr.vanaja shivkumar is a wonderful person, she listens to the problems very patiently. We have always been very happy with her. And all staffs are good very caring and friendly. I really happy to visit this hospital",
    },
    {
      id: 3,
      title: "RajeshwariRaghu",
      desc: "Hospital has provided very good care and service.all the staff is excellent and dedicated. And I'm happy to visit this hospital.doctor also are friendly and good person.",
    },
    {
      id: 4,
      title: "Creative channel",
      desc: "Very hygienic hospital with friendly staff Dr.vanaja made me so comfortable to share my past medical history and she took all my details patiently i have selected a right doctor for my 2nd pregnancy thank you so much😍",
    },
    {
      id: 5,
      title: "sharanya krishna",
      desc: "Excellent care and professional treatment by Dr. Vanaja Shivkumar, Dr. Santosh (pediatrician) and all the staffs. Very happy with way they took care of me during and after the pregnancy and my baby as well.",
    },
    {
      id: 6,
      title: "Yuvaraj Kumar",
      desc: "We had a wonderful experience with Dr. Vanaja Ma'am , She explains every issue in detail and gives the right treatment. Our pregnancy journey went smooth with no complications under her care. She is always reachable to discuss any issue. Many thanks to her for all her support and valuable guidance .  It’s rare to find a doctor that combines such personal touches and care for a patient as a person with outstanding quality of medical care. Staffs at hospital are also really helpful at all times.",
    },
  ];
  return (
    <section className={`${styles.blogs_wrapper} margin`}>
      <Container width>
        <SectionTitle title="Our" strongTitle="Testimonials" />
        <section className={styles.testimonial_items}>
          <section className={styles.testimonial_slider_wrapper}>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              navigation={{
                nextEl: ".button-next-testimonials-slide",
                prevEl: ".button-prev-testimonials-slide",
              }}
              loop={true}
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiperTestimonials"
            >
              {Testimonials.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <article className={styles.testimonial_item}>
                      <section className={styles.testimonial_title}>
                        <div className={styles.testimonial_letter}>
                          <p>{item.title.slice(0, 1).toUpperCase()}</p>
                        </div>
                        <div className={styles.testimonial_name}>
                          <h3>{item.title}</h3>
                          <Image
                            src={`/images/5-star.png`}
                            width={150}
                            height={30}
                            alt="Picture of the author"
                          />
                        </div>
                        <Image
                          src={`/images/google.webp`}
                          width={30}
                          height={30}
                          alt="Picture of the author"
                        />
                      </section>
                      <section className={styles.testimonial_content}>
                        <p className="ptag">{item.desc}</p>
                      </section>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <div className={styles.team_btns}>
            <button className="button-prev-testimonials-slide">
              <GrFormPrevious />
            </button>
            <button className="button-next-testimonials-slide">
              <GrFormNext />
            </button>
          </div>
        </section>
      </Container>
    </section>
  );
}
//  <Image
//    src={`/images/partners/${item}`}
//    width={160}
//    height={160}
//    alt="Picture of the author"
//  />;
