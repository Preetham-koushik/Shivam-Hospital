"use client";
import React from "react";
//styles
import styles from "./counters.module.css";
import Container from "@/components/Layouts/Container";
import { useInView } from "react-intersection-observer";
//react counters
import CountUp from "react-countup";
import Image from "next/image";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";

export default function Counters() {
  const { ref, inView } = useInView();
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_counter}>
          <SectionTitle title="Shivam Hospital" strongTitle="In Numbers " />
        </div>
        <section className={styles.counters} ref={ref}>

        <article className={styles.counters_item}>
            <Image
              src={"/images/counters/deliveries.png"}
              width={70}
              height={70}
              alt="Babies Delivered"
            />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={10000}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            <h3>Number of Deliveries</h3>
          </article>

          <article className={styles.counters_item}>
            <Image
              src={"/images/counters/expirence.png"}
              width={70}
              height={70}
              alt="Number Of Years Of Experience"
            />
            <span>
              {inView && (
                <CountUp suffix="+" start={0} end={25} delay={0} duration={2} />
              )}
            </span>
            <h3>Years Of Experience</h3>
          </article>


         
          <article className={styles.counters_item}>
            <Image
              src={"/images/counters/patients.png"}
              width={70}
              height={70}
              alt="Percentage of satisified patients"
            />
            <span>
              {inView && (
                <CountUp suffix="%" start={0} end={95} delay={0} duration={2} />
              )}
            </span>
            <h3>Satisfied Patients</h3>
          </article>

          <article className={styles.counters_item}>
            <Image
              src={"/images/counters/deliveries.png"}
              width={70}
              height={70}
              alt="Happy Families"
            />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={5000}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            <h3>Happy Families</h3>
          </article>
          
          <article className={styles.counters_item}>
            <Image
              src={"/images/counters/patients.png"}
              width={70}
              height={70}
              alt="24/7 Emergency Support"
            />
            <span>24/7</span>
            <h3>Emergency Support</h3>
          </article>



        </section>
      </Container>
    </section>
  );
}