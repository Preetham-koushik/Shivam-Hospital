"use client";
import React, { useEffect, useState } from "react";
//styles
import styles from "./services.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import data from "@/components/Data/Specialities/specialities.json";

export default function Services() {
  const [activeId, setActiveId] = useState(1);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const filterSpeciality = data.filter((item) => item.id == activeId);

    setActiveItem(filterSpeciality[0]);
  }, [activeId]);

  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>
          <SectionTitle
            title="Specialities"
            strongTitle=" in Shivam Hospital"
            content="At Shivam  Hospital and Shivam Advanced Orthocare Hospital, we are staffed with experienced consultants who offer professional care across various specialties and subspecialties, including Obstetrics, Gynaecology, Neonatology, Paediatrics, and Orthopaedics. Our services are designed to meet the unique needs of women, children, and individuals requiring advanced orthopaedic care."
          />

          <section className={styles.service_btns}>
            <ul>
              {data.map((serviceItem) => {
                return (
                  <li
                    key={serviceItem.id}
                    className={
                      activeId == serviceItem.id && styles.service_btns_active
                    }
                    onClick={() => setActiveId(serviceItem.id)}
                  >
                    {serviceItem.specialityName}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className={styles.service_content}>
            <section className={styles.service_content_img}>
              {activeItem && (
                <Image
                  src={`/images/specialities/${activeItem.img}`}
                  width={570}
                  height={425}
                  alt={activeItem.imgAltText}
                  style={{ objectFit: "cover" }}
                />
              )}
            </section>
            <section className={styles.service_content_desc}>
              {activeItem && (
                <>
                  <h3 className="stitle">{activeItem.deptTitle}</h3>
                  <div
                    className="ptag"
                    dangerouslySetInnerHTML={{ __html: activeItem.excerpt }}
                  ></div>
                  <Link href={`/services/${activeItem.link}`}>Read More</Link>
                </>
              )}
            </section>
          </section>
        </section>
      </Container>
    </section>
  );
}
