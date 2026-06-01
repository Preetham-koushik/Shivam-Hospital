import WCHero from "@/components/Pages/WomensCare/WCHero";
import WCTrust from "@/components/Pages/WomensCare/WCTrust";
import WCFertility from "@/components/Pages/WomensCare/WCFertility";
import WCPregnancy from "@/components/Pages/WomensCare/WCPregnancy";
import WCChildCare from "@/components/Pages/WomensCare/WCChildCare";
import WCJourney from "@/components/Pages/WomensCare/WCJourney";
import WCDoctors from "@/components/Pages/WomensCare/WCDoctors";
import Testimonials from "@/components/Pages/Home/Testimonials/Testimonials";
import WCFaq from "@/components/Pages/WomensCare/WCFaq";
import WCLeadForm from "@/components/Pages/WomensCare/WCLeadForm";

export const metadata = {
  title: "Women, IVF & Child Care Hospital in Basaveshwaranagara | Shivam Hospital",
  description:
    "Shivam Hospital offers complete care for fertility, pregnancy and child care in Bangalore. Expert specialists, advanced facilities and personalised care under one roof.",
};

export default function WomensCare() {
  return (
    <main>
      <WCHero />
      <WCTrust />
      <WCFertility />
      <WCPregnancy />
      <WCChildCare />
      <WCJourney />
      <WCDoctors />
      <Testimonials />
      <WCFaq />
      <WCLeadForm />
    </main>
  );
}