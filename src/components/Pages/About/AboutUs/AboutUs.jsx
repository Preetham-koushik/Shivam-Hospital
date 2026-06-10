import React from "react";
//styles
import styles from "./about.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function AboutUs() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.about_title}>
          <SectionTitle
            title="Welcome To"
            strongTitle="Shivam Hospital, Basaveshwaranagara"
          />
        </div>
        <section className={styles.content_items}>
          <section className={styles.content_img}>
            <Image
              src={"/images/about/hospital_photo.jpeg"}
              width={400}
              height={450}
              alt="Picture of the author"
              className={styles.about_img}
              style={{ objectFit: "cover" }}
            />
          </section>
          <section className={styles.content}>
            <h1 className="title">Where Parenthood Begins</h1>
            <p className="ptag">
              As we embark on this journey together, we invite you to become a
              part of the Shivam Hospital family. Whether you are planning
              parenthood, seeking orthopedic care, pediatric training, IVF, or
              any other healthcare service, you can trust us to provide
              affordable excellence in healthcare.
            </p>

            <p className="ptag">
              At Shivam Hospital, we are not just a healthcare facility; we are
              your partners in parenthood and overall well-being. Join us on
              this incredible journey where we make parenthood a joyful and
              memorable experience, every step of the way. We look forward to
              serving you and your family with compassion, expertise, and
              dedication.
            </p>
          </section>
        </section>
      </Container>
    </section>
  );
}
