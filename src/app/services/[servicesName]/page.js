import React from "react";
import styles from "./page.module.css";
import SpecialitiesData from "@/components/Data/Specialities/specialities.json";
import Container from "@/components/Layouts/Container";
import SpecialityForm from "@/components/Assets/Ui/Forms/SpecialityForm/SpecialityForm";
import Image from "next/image";

export const generateMetadata = ({ params }) => {
  const filterSpeciality = SpecialitiesData.filter(
    (speciality) => speciality.link == params.servicesName
  );

  return {
    title: `${filterSpeciality[0]?.seoTitle?.title}`,
    description: `${filterSpeciality[0]?.seoTitle?.desc}`,
  };
};
export default function page({ params }) {
  const filterSpeciality = SpecialitiesData.filter(
    (speciality) => speciality.link == params.servicesName
  );

  if (filterSpeciality[0]) {
    return (
      <section className={styles.speciality_main_container}>
        {/* //banner  */}

        <section className={styles.BannerTitleContainer}>
          <Image
            src={`/images/specialities/banners/${filterSpeciality[0].banImg}`}
            width={1520}
            height={500}
            alt="Picture of the author"
            className={styles.about_img}
            style={{ objectFit: "cover" }}
          />

          <div className={styles.BannerBackground}></div>

          <Container width>
            <section className={styles.banner_content}>
              <div>
                <h1 className={styles.BannerTag}>
                  {filterSpeciality[0].deptTitle}
                </h1>
              </div>
              <div className={styles.banner_form}>
                <SpecialityForm />
              </div>
            </section>
          </Container>
        </section>

        <section className={styles.speciality_button}>
          <Container width>
            <ul>
              {filterSpeciality[0]?.topContent?.slice(0, 1).map((btn) => {
                return (
                  <li key={btn.id}>
                    <a
                      href={`#${btn.btnTitle
                        .replace(/\s/g, "-")
                        .toLowerCase()}`}
                    >
                      {btn.btnTitle}
                    </a>
                  </li>
                );
              })}
              {/* {filterSpeciality[0]?.showHospital && (
                <li>
                  <a href="#hospital">Hospital</a>
                </li>
              )} */}

              {filterSpeciality[0].topContent?.slice(1).map((btn) => {
                return (
                  <li key={btn.id}>
                    <a href={`#${btn.btnTitle.toLowerCase()}`}>
                      {btn.btnTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
        <section className={styles.speciality_content}>
          <Container width>
            <section className={styles.speciality_conent_title}>
              {filterSpeciality[0].topContent?.slice(0, 1).map((content) => {
                return (
                  <section
                    key={content.id}
                    id={`${content.btnTitle
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <h2>{content.title}</h2>
                    <section
                      className={styles.speciality_content}
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    ></section>
                  </section>
                );
              })}
            </section>
          </Container>

          <Container width>
            <section className={styles.speciality_conent_title}>
              {filterSpeciality[0].topContent?.slice(1).map((content) => {
                return (
                  <section
                    key={content.id}
                    id={`${content.btnTitle.toLowerCase()}`}
                  >
                    <h2>{content.title}</h2>
                    <section
                      className={styles.speciality_content}
                      dangerouslySetInnerHTML={{ __html: content.content }}
                    ></section>
                  </section>
                );
              })}
            </section>
          </Container>
        </section>
      </section>
    );
  }
}
