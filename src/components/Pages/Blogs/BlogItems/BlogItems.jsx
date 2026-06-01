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
import data from "@/components/Data/Blogs/blogs.json";
import Link from "next/link";
export default function BlogItems() {
  return (
    <section className={`${styles.blogs_wrapper} margin`}>
      <Container width>
        <section className={styles.blog_items}>
          {data.map((item) => {
            return (
              <article className={styles.blogs_item} key={item.id}>
                <div className={styles.blog_imahe}>
                  <Image
                    src={`/images/blogs/${item.img}`}
                    width={350}
                    height={250}
                    alt="Picture of the author"
                    className={styles.about_img}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <section className={styles.blog_content}>
                  <Link href={`/blogs/${item.link}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p className="ptag ">{item.excerpt}</p>
                  <div className={styles.blog_date}>
                    <SlCalender /> <p className="ptag">{item.date}</p>
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      </Container>
    </section>
  );
}
