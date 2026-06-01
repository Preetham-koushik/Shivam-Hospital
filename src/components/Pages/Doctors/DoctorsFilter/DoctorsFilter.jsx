"use client";

import React, { useEffect, useState } from "react";
//styles
import styles from "./doctorsFilter.module.css";
import Container from "@/components/Layouts/Container";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import docData from "@/components/Data/Doctors/doctors.json";

import { DoctorsDepartment } from "@/components/Data/Doctors/DoctorsDepartments";
export default function DoctorsFilter() {
  const [doctors, setDoctors] = useState(docData);
  const [departmentButton, setDepartmentButton] = useState(null);
  const [activeDepartmentBtn, setActiveDepartmentBtn] = useState("allDoctors");

  useEffect(() => {
    let getSpecialities = [
      "allDoctors",
      ...new Set(
        docData
          .map((item) => item.speciality)
          .reduce(function (prev, curr) {
            return prev.concat(curr);
          })
      ),
    ];

    setDepartmentButton(getSpecialities);
  }, []);

  useEffect(() => {
    if (activeDepartmentBtn == "allDoctors") {
      setDoctors(docData);
    } else {
      let filterDoctorsbyDepartment = docData.filter((item) =>
        item.speciality.includes(activeDepartmentBtn)
      );

      setDoctors(filterDoctorsbyDepartment);
    }
  }, [activeDepartmentBtn]);

  return (
    <section className={`${styles.wrapper} margin`}>
      <Container width>
        <section className={styles.content_items}>
          <section className={styles.doctors_btns}>
            <ul>
              {departmentButton?.map((btn, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveDepartmentBtn(btn)}
                    className={
                      btn == activeDepartmentBtn && styles.doctors_btns_active
                    }
                  >
                    {DoctorsDepartment[btn]}
                  </li>
                );
              })}
            </ul>
          </section>
          <section className={styles.doctor_items}>
            {doctors.map((item) => {
              return (
                <article className={styles.doctor_item} key={item.id}>
                  <Image
                    src={`/images/doctors/${item.image}`}
                    width={370}
                    height={370}
                    alt="Picture of the author"
                    className={styles.about_img}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.doctor_item_content}>
                    <h3>
                      {item.isDoctor && "Dr."} {item.firstname} {item.lastname}
                    </h3>
                    <p className="ptag">{item.designation}</p>

                    <Link href={`/doctors/${item.link}`}>View Profile</Link>
                  </div>
                </article>
              );
            })}
          </section>
        </section>
      </Container>
    </section>
  );
}
