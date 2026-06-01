import React from "react";
//styles
import styles from "./facilities.module.css";
import Container from "@/components/Layouts/Container";
import { FaAmbulance } from "react-icons/fa";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

import FacilitiesData from "@/components/Data/Facilities/facilities.json";
import Image from "next/image";
export default function Facilities() {
  return (
    <section className={`${styles.wrapper} marginTop`}>
      <Container width>
        <section className={styles.content_items}>
          <SectionTitle
            title="Facilities"
            titleColor="var(--white)"
            strongTitle=" in Shivam Hospital"
            content=""
            contentColor="var(--black-3)"
          />

          <section className={styles.facilities_items}>
            <ul>
              {FacilitiesData.map((item) => {
                return (
                  <li className={styles.facilities_item_list} key={item.id}>
                    <div className={styles.facilities_icon}>
                      <Image
                        src={`/images/home/facilities/${item.icon}`}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                        className={styles.about_img}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <section>
                      <h3>{item.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>
                    </section>
                  </li>
                );
              })}
            </ul>
          </section>
        </section>
      </Container>
    </section>
  );
}
