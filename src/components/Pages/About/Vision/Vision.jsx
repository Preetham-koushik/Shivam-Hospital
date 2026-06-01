import React from "react";
//styles
import styles from "./vision.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
export default function Vision() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>
          <section
            className={`${styles.content_vison} ${styles.content_circle}`}
          >
            <div>
              <FaQuoteLeft />
              <p className="ptag">
                "At Shivam Hospital, Our Overarching Mission Is To Deliver
                Affordable Excellence Through Expert Collaboration, Ensuring A
                Joyful Journey Into Parenthood. We Believe That Every Family
                Deserves The Highest Quality Of Care Without Financial Burden."
              </p>
              <h3>Mission</h3>
            </div>
          </section>
          <section
            className={`${styles.content_mission} ${styles.content_circle}`}
          >
            <div>
              <FaQuoteLeft />
              <p className="ptag">
                "Our Vision Focuses On Enhancing The Experience Of Parenthood By
                Providing Unparalleled Care And Creating Unforgettable Moments.
                We Are Committed To Supporting You At Every Step Of Your
                Parenthood Journey, Ensuring It Is Filled With Happiness And
                Well-Being."
              </p>
              <h3>Vision</h3>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
}
