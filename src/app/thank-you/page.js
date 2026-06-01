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
      <Container width>
        <section className={styles.facilities_container}>
          <p>Thanks for connecting with us will get in touch with shortly</p>
        </section>
      </Container>
    </main>
  );
}
