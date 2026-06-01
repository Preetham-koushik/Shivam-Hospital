import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import Services from "@/components/Pages/Services/Services/Services";
import React from "react";
export const metadata = {
  title: "Services Offered at Shivam Hospital",
  description:
    "At Shivam Hospital Basaveshwarnagar, we have various services offering high-quality care and the best treatment to our patients. Book An Appointment",
};
export default function page() {
  return (
    <main>
      <BannerTitle
        title="Services"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <Services />
    </main>
  );
}
