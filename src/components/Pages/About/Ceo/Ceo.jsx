import React from "react";
//styles
import styles from "./ceo.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function Ceo() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>

<section className={styles.content_img}>
            <Image
              src={"/images/about/leaddoc.jpeg"}
              width={350}
              height={350}
              alt="Picture of the author"
              style={{ objectFit: "cover" }}
            />
          </section>

          <section className={styles.content}>
            <h1 className="title">Meet the Lead Doctor</h1>
            <p className="ptag">
              Dr. Vanaja Shivakumar, a distinguished and seasoned Obstetrics,
              Gynecology, and Infertility Specialist, brings a wealth of
              expertise to her practice. With a particular focus on Infertility
              and the Management of High-Risk Pregnancies, she stands out for
              her unique approach to facilitating painless normal deliveries
              through labor analgesia.
            </p>

            {/* <ul className="ultag">
              <li>Lorem, ipsum.</li>
              <li>Odio, distinctio?</li>
              <li>Repudiandae, nam.</li>
              <li>Facere, harum!</li>
              <li>Rerum, cum?</li>
              <li>Aut, illum.</li>
              <li>Repellendus, molestias.</li>
              <li>Deleniti, sunt!</li>
            </ul> */}
          </section>
          
        </section>
      </Container>
    </section>
  );
}
