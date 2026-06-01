import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import AboutUs from "@/components/Pages/About/AboutUs/AboutUs";
import Ceo from "@/components/Pages/About/Ceo/Ceo";
import Principles from "@/components/Pages/About/Principles/Principles";
import Vision from "@/components/Pages/About/Vision/Vision";
import React from "react";
export const metadata = {
  title: "About Shivam Hospital Basaveshwarnagar Bangalore",
  description:
    "Shivam Hospital has the finest combination of experience, expertise, and state-of-the-art technology. We believing in providing the best  treatment and care.",
};
export default function page() {
  return (
    <main>
      <BannerTitle
        title="About Us"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <AboutUs />
      <Ceo />
      <Vision />
      <Principles />
    </main>
  );
}
