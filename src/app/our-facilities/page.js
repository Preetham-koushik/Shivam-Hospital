import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import React from "react";
import styles from "./page.module.css";
import OurFacilitiesData from "@/components/Data/Facilities/facilities.json";
import Container from "@/components/Layouts/Container";
import Image from "next/image";
export const metadata = {
  title: "Advanced Facilities Offered At Shivam Hospital",
  description:
    "Shivam Hospital has highly advanced facilities such as 3D/4D ultrasound, Digital X-Ray, Laboratory, Physiotherapy, 24/7 Emergency Services, Pharmacy and Ambulance Facilities.",
};
export default function page() {
  return (
    <main>
      <BannerTitle
        title="Our Facilities"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <Container width>
        <section className={styles.facilities_container}>
          {OurFacilitiesData.map((item, index) => {
            return (
              <article
                className={`${styles.facilities_item} ${
                  index % 2 == 0
                    ? styles.facilities_item_even
                    : styles.facilities_item_odd
                }`}
                key={item.id}
              >
                <div>
                  <Image
                    src={`/images/facilities/${item.img}`}
                    width={450}
                    height={300}
                    alt="Picture of the author"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h2>{item.title}</h2>

                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              </article>
            );
          })}
        </section>
      </Container>
    </main>
  );
}
