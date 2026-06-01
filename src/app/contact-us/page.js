import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import React from "react";
//icons
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
//styles
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us - Shivam Multispeciality Hospital, Basaveshwarnagar",
  description:
    "Reach Shivam Hospital Basaveshwarnagar, Bangalore to experience the world-class healthcare diagnosis and treatments. Book An Appointment.!",
};
export default function page() {
  return (
    <main>
      <BannerTitle
        title="Contact Us"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <section className={styles.contact_container}>
        <section className={styles.contact_width}>
          <section className={styles.contact_cards}>
            <div className={styles.contact_card}>
              <IoMdCall />
              <div>
                <a>9606028162 </a>
              </div>
            </div>
            <div
              className={`${styles.contact_card} ${styles.contact_card_mail}`}
            >
              <BiEnvelope />
              <a>shivammotherchild@gmail.com</a>
            </div>
            <div className={styles.contact_card}>
              <IoLocationSharp />
              <p>
                12, 8th Main Rd, Sharada Colony, SBI Staff Colony, Basaveshwar
                Nagar, Bengaluru, Karnataka 560079
              </p>
            </div>
          </section>
          <section className={styles.contact_form}>
            <div className={styles.contact_content}>
              <p>
                We are one of the top multispeciality hospitals in Bangalore,
                known for rendering quality health care services and speedy
                recovery of patients.
              </p>
              <form
                className={styles.contact_form_container}
                method="POST"
                action="https://brandeezy.in/forms/shivam/contact.php"
              >
                <h2>Send us a message:</h2>
                <div>
                  <label htmlFor="full_name"> Name</label>

                  <input
                    type="text"
                    id="full_name"
                    name="fname"
                    placeholder="Enter Your First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>

                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone_number">Phone Number</label>

                  <input
                    type="tel"
                    pattern="^[6-9]\d{9}$"
                    minLength="10"
                    maxLength="10"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Enter Your Phone Numer"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message"> Message</label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <div>
                  {" "}
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
            <div className={styles.contact_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6821272929974!2d77.53206577367192!3d12.992171614429772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4724c6ca07%3A0x46080607b6dea998!2sShivam%20Women%20and%20Child%20Care%20Basaveshwar%20Nagar%20%7C%20Best%20Gynaecologist%2C%20Obstetrician%2C%20Paediatrician%20%26%20Maternity%20Hospital!5e0!3m2!1sen!2sin!4v1720358610430!5m2!1sen!2sin"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
