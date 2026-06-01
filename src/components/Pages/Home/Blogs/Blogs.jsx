"use client";
import Container from "@/components/Layouts/Container";
import styles from "./blogs.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
//icons
import { SlCalender } from "react-icons/sl";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function Blogs() {
  return (
    <section className={`${styles.blogs_wrapper} margin`}>
      <Container width>
        <SectionTitle
          title="Our"
          strongTitle="Blogs"
          content="If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur
 adipiscing elit. Ut volutpat eros adipiscing nonummy."
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
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>

              <SwiperSlide>
                <article className={styles.blogs_item}>
                  <div className={styles.blog_imahe}>
                    <Image
                      src={"https://placehold.jp/350x250.png"}
                      width={350}
                      height={250}
                      alt="Picture of the author"
                      className={styles.about_img}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <section className={styles.blog_content}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, rem!
                    </p>
                    <div className={styles.blog_date}>
                      <SlCalender /> <p className="ptag">March 6 2024</p>
                    </div>
                  </section>
                </article>
              </SwiperSlide>
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
