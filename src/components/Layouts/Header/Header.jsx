"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "../Container";
//styles
import styles from "./header.module.css";
//data
import NavbarData from "@/components/Data/Navbar/navbar.json";
import Link from "next/link";
import Sidebar from "./Sidebar/Sidebar";
import { LuMenu } from "react-icons/lu";
import { usePathname } from "next/navigation";
//icons
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [show, setShow] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setShow(false);
  }, [pathname]);
  return (
    <>
      <header className={styles.wrapper}>
        <section className={styles.top_bar}>
          <Container width>
            <ul className={styles.top_bar_items}>
              <li>
                <ul className={styles.top_bar_contact}>
                  <li>
                    <a href="tel:9606028161">
                      <FaPhone />
                      9606028161
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className={styles.top_bar_social}>
                  <li>
                    <a href="https://www.facebook.com/shivammotherandchildcare/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shivam.healthcare/">
                      <FaInstagram />
                    </a>
                  </li>
                  {/* <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="">
                  <FaXTwitter />
                </a>
              </li> */}
                </ul>
              </li>
            </ul>
          </Container>
        </section>
        <Container width>
          <section className={styles.header_items}>
            <section className={styles.logo}>
              <Link href="/">
                {" "}
                <Image
                  src={"/images/shivam_logo1.png"}
                  width={150}
                  height={60}
                  alt="Shivam Hospital Logo"
                />
              </Link>
            </section>
            <section className={styles.menu}>
              <ul>
                {NavbarData.map((menuItem) => {
                  return (
                    <li key={menuItem.id}>
                      <Link href={menuItem.link}>{menuItem.title}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className={styles.sidebar_icon}>
                <LuMenu onClick={() => setShow(!show)} />
              </div>
            </section>
          </section>
        </Container>
      </header>

      <Sidebar show={show} setShow={setShow} />
    </>
  );
}
