"use client";
import React from "react";
//styles
import styles from "./appiontment.module.css";
import Container from "@/components/Layouts/Container";
import specialities from "@/components/Data/Specialities/specialities.json";
//react counters
import CountUp from "react-countup";
import Image from "next/image";
export default function Appiontment() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <form
          className={styles.contact_form_container}
          method="POST"
          action="https://brandeezy.in/forms/shivam/home.php"
        >
          <h2>Book an Appointment</h2>
          <div>
            <label htmlFor="fname"> Name</label>

            <input
              type="text"
              id="fname"
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
            <label htmlFor="speciality_name"> Select Your Speciality</label>
            <select
              id="speciality_name"
              name="speciality_name"
              required

              // size={specialitySize}
            >
              <option value="" disabled selected>
                Select Speciality
              </option>
              {specialities?.map((item, index) => {
                return (
                  <option key={index} value={item.specialityName}>
                    {item.specialityName}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            {" "}
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Container>
    </section>
  );
}
