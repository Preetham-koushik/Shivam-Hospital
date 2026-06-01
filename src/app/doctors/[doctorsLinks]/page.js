import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Container from "@/components/Layouts/Container";
import styles from "./page.module.css";
import Image from "next/image";

import docData from "@/components/Data/Doctors/doctors.json";

export const generateMetadata = ({ params }) => {
  const filterDoc = docData.filter((item) => item.link == params.doctorsLinks);
  console.log(filterDoc);

  return {
    title: `${filterDoc[0].seoTitle.title}`,
    description: `${filterDoc[0].seoTitle.desc}`,
  };
};
export default function page({ params }) {
  const filterDoc = docData.filter((item) => item.link == params.doctorsLinks);

  if (filterDoc) {
    return (
      <main>
        <BannerTitle
          title={`${filterDoc[0].isDoctor && "Dr."} ${filterDoc[0].firstname} ${
            filterDoc[0].lastname
          }`}
          titleColor="#fff"
          tag="h1"
          alt="banner image"
          textAlignment="center"
        />
        <Container width>
          <div className={styles.top_space}></div>
          <SectionTitle title="Meet Our" strongTitle="Doctor" content="" />

          <section className={styles.doctor_wrapper}>
            <section className={styles.doctor_image}>
              <Image
                src={`/images/doctors/${filterDoc[0].image}`}
                width={370}
                height={370}
                alt="Picture of the author"
                style={{ objectFit: "cover" }}
              />
            </section>
            <section className={styles.doctor_content}>
              <section className={styles.doctor_title}>
                <h3>{`${filterDoc[0].isDoctor && "Dr."} ${
                  filterDoc[0].firstname
                } ${filterDoc[0].lastname}`}</h3>
                <p className="ptag">{filterDoc[0].designation}</p>
              </section>
              <section className={styles.doctor_list}>
                <ul>
                  {filterDoc[0].qualification && (
                    <li>
                      <div>
                        <p className="ptag">
                          <strong>Qualification</strong>
                        </p>
                      </div>
                      <div>
                        <p className="ptag">{filterDoc[0].qualification}</p>
                      </div>
                    </li>
                  )}

                  {filterDoc[0].workExperience && (
                    <li>
                      <div>
                        <p className="ptag">
                          <strong>Experience</strong>
                        </p>
                      </div>
                      <div>
                        <p className="ptag">{filterDoc[0].workExperience}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </section>
            </section>
          </section>

          <section
            className={`${styles.doctor_desc} ptag`}
            dangerouslySetInnerHTML={{ __html: filterDoc[0].content }}
          ></section>
        </Container>
      </main>
    );
  }
}
