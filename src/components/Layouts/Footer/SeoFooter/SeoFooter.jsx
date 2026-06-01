"use client";
import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./seoFooter.module.css";
import seoData from "@/components/Data/seoTitle.json";
import Container from "../../Container";
export default function SeoFooter() {
  const [show, setShow] = useState(false);

  return (
    <secion className={styles.wrapper}>
      <Container width>
        <section className={styles.items}>
          <section className={styles.seo_arrow}>
            <IoIosArrowUp
              onClick={() => setShow(!show)}
              className={styles.footer_seo_icon}
            />
          </section>
          <section
            className={`${styles.seo_content} ${
              show && styles.seo_content_active
            }`}
          >
            <ul>
              {seoData?.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </section>
        </section>
      </Container>
    </secion>
  );
}
