import OrthoHero from "@/components/Pages/Ortho/OrthoHero";
import OrthoWhy from "@/components/Pages/Ortho/OrthoWhy";
import OrthoServices from "@/components/Pages/Ortho/OrthoServices";
import OrthoSigns from "@/components/Pages/Ortho/OrthoSigns";
import OrthoJourney from "@/components/Pages/Ortho/OrthoJourney";
import Testimonials from "@/components/Pages/Home/Testimonials/Testimonials";
import OrthoFaq from "@/components/Pages/Ortho/OrthoFaq";
import OrthoCta from "@/components/Pages/Ortho/OrthoCta";

export const metadata = {
  title: "Best Orthopaedic Treatment in Basaveshwaranagara, Bangalore | Shivam Hospital",
  description:
    "Shivam Hospital offers advanced orthopaedic care in Bangalore. Expert doctors, personalized treatment, physiotherapy & rehabilitation under one roof.",
};

export default function OrthoPage() {
  return (
    <main>
      <OrthoHero />
      <OrthoWhy />
      <OrthoServices />
      <OrthoSigns />
      <OrthoJourney />
      <Testimonials />
      <OrthoFaq />
      <OrthoCta />
    </main>
  );
}