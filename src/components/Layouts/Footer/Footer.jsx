import React from "react";
//styles
import styles from "./footer.module.css";
import Container from "../Container";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import specialities from "@/components/Data/Specialities/specialities.json";

import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import SeoFooter from "./SeoFooter/SeoFooter";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container width>
        <section className={styles.items}>
          <section className={styles.phone_number}>
            <FaPhoneSquareAlt />
            <p className="ptag">For Emergency Cases</p>
            <a href="tel:9606028161">9606028161</a>
          </section>
          <section className={styles.footer_link_wrapper}>
            <section className={styles.footer_logo}>
              <Link href="/">
                <Image
                  src={"/images/shivam_logo_1.png"}
                  width={150}
                  height={60}
                  alt="Shivam Hospital Logo"
                />
              </Link>
              <p className="ptag">
                At Shivam Women and Children Hospital and Shivam Advanced
                Orthocare Hospital, we are staffed with experienced consultants
                who offer professional care across various specialties and
                subspecialties
              </p>
            </section>
            <section className={styles.footer_links}>
              <h3>Specialities</h3>
              <ul className="ultag">
                {specialities.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={`/services/${item.link}`}>
                        {item.specialityName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className={styles.footer_address}>
              <h3>Contatct Us</h3>
              <div className={styles.footer_caller}>
                <a href="mailto:shivammotherchild@gmail.com">
                  <HiOutlineEnvelope />
                  shivammotherchild@gmail.com
                </a>
                <a href="">
                  <IoCall />
                  9606028162
                </a>
              </div>
            </section>
          </section>
          {/* <section className={styles.footer_link}>
            <div>
              <h3>Links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h3>Get In Touch</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h3>Get in Touch</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>
          </section> */}
        </section>
      </Container>
      <section className={styles.copyrights}>
        <Container width>
          <p>Copyrights &copy; 2025 Shivam Hospital</p>
        </Container>
      </section>
      <SeoFooter />
    </footer>
  );
}
