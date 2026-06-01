import React from "react";
//styles
import styles from "./principles.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
export default function Principles() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.principles_title}>
          <p className="ptag">Our Core Values</p>
          <h3>Principles</h3>
        </div>
        <section className={styles.content_items}>
          <article className={styles.items}>
            <div className={styles.items_icon}>
              <Image
                src={"/images/about/compassion.png"}
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
              <h3>Continuous Improvement</h3>
            </div>
            <div>
              <p className="ptag">
                Another cornerstone of our philosophy is "Continuous
                Improvement." We are committed to staying updated with the
                latest medical advancements and technologies, ensuring that we
                provide cutting-edge treatments and care to our patients.
              </p>
            </div>
          </article>
          <article className={styles.items}>
            <div className={styles.items_icon}>
              <Image
                src={"/images/about/continuous.png"}
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
              <h3>Compassion</h3>
            </div>
            <div>
              <p className="ptag">
                We also value "Compassion" as a guiding principle. We understand
                that healthcare is not just about treatments and procedures;
                it's about empathy, understanding, and being there for our
                patients during their most vulnerable moments.
              </p>
            </div>
          </article>
          <article className={styles.items}>
            <div className={styles.items_icon}>
              <Image
                src={"/images/about/affordable.png"}
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
              <h3>Affordable Healthcare</h3>
            </div>
            <div>
              <p className="ptag">
                At Shivam Hospital, our core value is "Affordable Healthcare."
                We believe that high-quality healthcare should be accessible to
                all, and we are dedicated to providing services that are both
                exceptional and budget-friendly. We aim to break the barrier
                between affordability and excellence in healthcare.
              </p>
            </div>
          </article>
        </section>
      </Container>
    </section>
  );
}
