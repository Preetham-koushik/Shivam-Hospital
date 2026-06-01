import React from "react";
//styles
import styles from "./services.module.css";
import Container from "@/components/Layouts/Container";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import data from "@/components/Data/Specialities/specialities.json";
export default function Services() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>
          <SectionTitle
            title="Our"
            strongTitle="Services"
            content="At Shivam Women and Children Hospital and Shivam Advanced Orthocare Hospital, we are staffed with experienced consultants who offer professional care across various specialties and subspecialties, including Obstetrics, Gynaecology, Neonatology, Paediatrics, and Orthopaedics. Our services are designed to meet the unique needs of women, children, and individuals requiring advanced orthopaedic care."
          />

          <section className={styles.services_items}>
            {data.map((item) => {
              return (
                <article className={styles.services_item} key={item.id}>
                  <Image
                    src={`/images/specialities/${item.img}`}
                    width={350}
                    height={250}
                    alt="Picture of the author"
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.service_item_content}>
                    <h3>{item.deptTitle}</h3>
                    <p className="ptag">{item.excerpt}</p>

                    <Link href={`/services/${item.link}`}>Read More</Link>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </Container>
    </section>
  );
}
