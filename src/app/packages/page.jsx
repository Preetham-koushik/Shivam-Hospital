import React from "react";
import styles from "./page.module.css";
import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import data from "@/components/Data/Packages/Packages.json";
import Link from "next/link";
import Container from "@/components/Layouts/Container";

const Packages = () => {
  return (
    <>
      <BannerTitle
        title="Our Packages"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <Container width>
        <section className={styles.packages}>
          {data.map((item) => {
            return (
              <article className={styles.packages_item} key={item.id}>
                <div>
                  <img src={`/images/packages/${item.img}`} />
                </div>
                <section className={styles.packages_content}>
                  <div className={styles.package_content_title}>
                    <h3>{item.title}</h3>
                    <p>{item.type}</p>
                  </div>
                  <div className={styles.packages_content_price}>
                    <p>{item.price}</p>
                    <Link href={`/packages/${item.link}`}> View</Link>
                  </div>
                </section>
              </article>
            );
          })}
        </section>
      </Container>
    </>
  );
};

export default Packages;
