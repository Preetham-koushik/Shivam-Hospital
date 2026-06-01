import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import DoctorsFilter from "@/components/Pages/Doctors/DoctorsFilter/DoctorsFilter";
import React from "react";
export const metadata = {
  title: "Doctors and Surgeons At Shivam Hospital Basaveshwarnagar",
  description:
    "Shivam Hospital has highly experienced and skilled doctors in Basaveshwarnagar Bangalore. Book an appointment with our well-trained and top doctors in Basaveshwarnagar Bangalore. ",
};
export default function page() {
  return (
    <main>
      <BannerTitle
        title="Doctors"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <DoctorsFilter />
    </main>
  );
}
