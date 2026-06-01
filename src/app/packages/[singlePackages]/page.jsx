"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import data from "@/components/Data/Packages/Packages.json";
import Container from "@/components/Layouts/Container";
import { useParams } from "next/navigation";

export default function page() {
  const [packageData, setPackageData] = useState([]);
  const { singlePackages } = useParams();

  useEffect(() => {
    const filterPackage = data.filter((item) => item.link == singlePackages);
    setPackageData(filterPackage);
  }, []);

  return (
    <section className={styles.speciality_main_container}>
      <Container width>
        <section className={styles.packages}>
          <section className={styles.package_img}>
            <img src={`/images/packages/${packageData[0]?.img}`} />
            <h3 className="">{packageData[0]?.title}</h3>
            <div
              className={styles.package_content_list}
              dangerouslySetInnerHTML={{ __html: packageData[0]?.content }}
            ></div>
          </section>
          <section className={styles.packages_price}>
            <div>
              <h3 className="">{packageData[0]?.title}</h3>
              <p>
                <span>Price: </span>
                {packageData[0]?.price}
              </p>
              <form
                className={styles.packages_form}
                method="POST"
                action="https://brandeezy.in/forms/shivam/package.php"
              >
                <h3>Enquiry Form</h3>
                <div>
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="E-Mail" />
                </div>
                <div>
                  <input
                    type="phone"
                    pattern="^[6-9]\d{9}$"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input type="submit" value="Enquire Now" name="submit" />
                </div>
                <input
                  type="hidden"
                  value={packageData[0]?.title}
                  name="packageTitle"
                />
              </form>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
}
