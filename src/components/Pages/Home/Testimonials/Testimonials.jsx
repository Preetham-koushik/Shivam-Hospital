"use client";
import Container from "@/components/Layouts/Container";
import styles from "./testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Swapna D R",
    location: "Bangalore",
    stars: 5,
    desc: "I was admitted to Shivam Hospital for fissure and hemorrhoids surgery. The surgery was very successful. The doctors, nurses, and all staff members are very kind, caring, and supportive. I have also been visiting for pregnancy checkups and my experience has always been very good.",
  },
  {
    id: 2,
    name: "Tulika Vishwakarma",
    location: "Bangalore",
    stars: 5,
    desc: "Extremely helpful and supportive staff with 24x7 care. Being a first time mother, all I needed was a supportive environment and I got everything. I am grateful to the entire team and specially Vanaja Mam for guiding me throughout my pregnancy journey. Going home with a beautiful baby girl. 😊",
  },
  {
    id: 3,
    name: "Swamy K",
    location: "Bangalore",
    stars: 5,
    desc: "I am extremely grateful to Shivam Hospital. My 5-day-old baby was admitted after complications at another hospital. Shivam Hospital responded immediately and treatment was started promptly. Thanks to the dedication of the doctors and staff, my baby is now stable and safe. Highly recommend for pediatric care.",
  },
  {
    id: 4,
    name: "Rek Prassi21",
    location: "Bangalore",
    stars: 5,
    desc: "Our experience with Dr. Vanaja Shivkumar has been truly life-changing. Every step was guided with care, clarity, and hope. Team Shivam, a heartfelt thank you — from the warmth and support to the cleanliness and positive environment. You didn't just provide treatment — you gave us hope and the joy of parenthood. ❤️",
  },
  {
    id: 5,
    name: "Pavana Naidu",
    location: "Bangalore",
    stars: 5,
    desc: "I have known Dr. Vanaja ma'am even before Shivam Hospital was built. She was very kind, friendly, and supportive. Every month during my scans, she gave me so much positivity and confidence. For my second baby, Shivam Hospital is ready and everything feels so well organized. I truly trust Dr. Vanaja ma'am and her team.",
  },
  {
    id: 6,
    name: "Vasanth Kumar",
    location: "Bangalore",
    stars: 5,
    desc: "Dr. Vanaja Shivkumar madam is highly experienced and gave me confidence regarding the treatment. Excellent doctor and very compassionate. The nursing team was very active and professional. The hospital is very hygienic, cleanly maintained and has a very positive atmosphere. 😊",
  },
  {
    id: 7,
    name: "Abhilash PK",
    location: "Bangalore",
    stars: 5,
    desc: "I admitted my son to Shivam Hospital for treatment, and I am truly grateful for the excellent care he received. The doctors are highly experienced and provided the right treatment with great attention. The nursing staff and support team were extremely caring and supportive throughout.",
  },
  {
    id: 8,
    name: "Puneeth Puni",
    location: "Bangalore",
    stars: 5,
    desc: "Shivam Hospital provides excellent medical care with very professional and supportive staff. The doctors are knowledgeable, patient, and take time to explain the treatment clearly. The nursing staff is caring and attentive, and the hospital is clean and well maintained. Highly recommended!",
  },
  {
    id: 9,
    name: "Annapurna Nagaraj",
    location: "Bangalore",
    stars: 5,
    desc: "I sincerely thank Dr. Vanaja Shivkumar and the entire hospital staff for the excellent care during and after my surgery. Dr. Vanaja's professionalism and expertise were reassuring, and the staff's attentive post-operative care made my recovery comfortable. I truly appreciate the dedication of the whole team. ❤️",
  },
  {
    id: 10,
    name: "Sudeep Venkatesh",
    location: "Bangalore",
    stars: 5,
    desc: "My mother was operated by Dr. Vanaja. She is a very gentle, kind hearted and professional person. She understood the root cause of our problem and gave a permanent solution. My mother had a painless surgery and is very happy. The hospital is hygienic with a good nursing staff. Highly recommend! 😊",
  },
  {
    id: 11,
    name: "Dr. Payal Mukherjee",
    location: "Bangalore",
    stars: 5,
    desc: "Shivam Hospital has amazing staff who care and nurture patients with utmost empathy. Dr. Vanaja, Dr. Niranjan and all the duty doctors and nurses are always available with positive energy and encouraging behaviour. Food is very well designed to suit the need of the patient and yet maintain good taste.",
  },
  {
    id: 12,
    name: "Tejas M",
    location: "Bangalore",
    stars: 5,
    desc: "I had a fantastic experience at this hospital's Physiotherapy department — staff were super friendly and patient care was top-notch! Dr. Amardeep, the orthopaedic doctor, is thorough and caring, providing excellent treatment and attention to his patients' needs. Highly recommended!",
  },
  {
    id: 13,
    name: "Nandish B R",
    location: "Bangalore",
    stars: 5,
    desc: "I'm very thankful to Dr. Vanaja ma'am and all the nurses at Shivam Hospital. The doctors are kind and treat patients very well. The nurses are caring, responsible and do their job properly. Overall service is very good and supportive. I highly recommend Shivam Hospital. Thank you 😍",
  },
];

export default function Testimonials() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <div className={styles.title_wrap}>
          <SectionTitle title="Our" strongTitle="Testimonials" />
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            0:   { slidesPerView: 1, spaceBetween: 16 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            900: { slidesPerView: 3, spaceBetween: 24 },
          }}
          modules={[Autoplay]}
          className={styles.swiper}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              {({ isActive }) => (
                <article className={`${styles.card} ${isActive ? styles.card_active : ""}`}>
                  <div className={styles.quote}>&ldquo;&rdquo;</div>
                  <div className={styles.stars}>
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.footer}>
                    <div className={styles.avatar}>
                      {item.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <h3 className={styles.name}>{item.name}</h3>
                      <p className={styles.location}>{item.location}</p>
                    </div>
                  </div>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}