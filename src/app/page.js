import PopUpIndex from "@/components/Assets/Ui/PopUp/Index";
import About from "@/components/Pages/Home/About/About";
import Appiontment from "@/components/Pages/Home/Appiontment/Appiontment";
import Banner from "@/components/Pages/Home/Banner/Banner";
import Blogs from "@/components/Pages/Home/Blogs/Blogs";
import Counters from "@/components/Pages/Home/Counters/Counters";
import Facilities from "@/components/Pages/Home/Facilities/Facilities";
import Insurance from "@/components/Pages/Home/Insurance/Insurance";
import OurSpecialists from "@/components/Pages/Home/OurSpecialists/OurSpecialists";
import Services from "@/components/Pages/Home/Services/Services";
import Testimonials from "@/components/Pages/Home/Testimonials/Testimonials";
import Faq from "@/components/Pages/Home/Faq/faq";
import WhyTrust from "@/components/Pages/Home/WhyTrust/WhyTrust";
import infostrip from "@/components/Pages/Home/infostrip/infostrip"
export const metadata = {
  title: "Shivam Hospital | Best Hospital in Basaveshwarnagar, Bangalore",
  description:
    "Shivam Hospital is one of the best multispeciality hospitals in Basaveshwar Nagar, Bangalore. We provide world-class treatment to our patients.",
};

export default function Home() {
  return (
    <main>
      {/* <PopUpIndex /> */}
      <Banner />
      <Counters />
      <About />
      <infostrip />
      <WhyTrust />
      <Services />
      <OurSpecialists />
      <Appiontment />  
      <Facilities />
      <Insurance />
      <Testimonials />
      
      <Faq />

      {/* <Blogs /> */}
    </main>
  );
}
//  <Image
//    src={"/assets/home/ourdesign/about-uss.jpg"}
//    width={750}
//    height={400}
//    alt="Picture of the author"
//    className={styles.about_img}
//    style={{ objectFit: "cover" }}
//  />;
