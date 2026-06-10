import React from "react";
//styles
import styles from "./about.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>
          <section className={styles.content_img}>
            {/* <Image
              src={"/images/about/about_hosp.jpg"}
              width={400}
              height={450}
              alt="Picture of the author"
              className={styles.about_img}
              style={{ objectFit: "cover" }}
            /> */}
            <div className={styles.one_img}>
              <img
                src="/images/home/about/hospital.png"
                alt="Shivam Women and Children Hospital Image"
              />
            </div>
            <div className={styles.two_img}>
              <img
                src="/images/home/about/gynecologist.png"
                alt="Gynecology symbol represents women's health"
              />
            </div>

            <div className={styles.three_img}>
              <img
                src="/images/home/about/orthocare_image.png"
                alt="Patient bent over, holding painful knee"
              />
            </div>
          </section>
          <section className={styles.content}>
            <h1 className="title">
              Experience excellence in diverse medical care at Shivam Hospital
            </h1>
            <p className="ptag">
             At Shivam Women and Children Hospital and Shivam Advanced Orthocare Hospital in Basaveshwar Nagar, our commitment to excellence distinguishes us as premier multispecialty healthcare providers. With a strong reputation for delivering top-quality medical care and ensuring swift recoveries, we prioritize our patients' well-being above all else. Our advanced equipment enables our skilled medical professionals to diagnose and treat ailments with precision and accuracy. Additionally, our 24/7 emergency services ensure that assistance is always available when you need it most.
            </p>
            <p className="ptag">
              Furthermore, our convenient in-house pharmacy and diagnostics services make accessing essential medications and tests hassle-free for our patients. Trust us with your health needs, and experience the difference our expertise and dedication can make in your journey toward wellness
            </p>
            <div className={styles.content_btns}>
              <Link href="/contact-us">
                Book An Appointment
                <FaRegArrowAltCircleRight />
              </Link>
              <Link href="/about-us">
                Read More
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
}
