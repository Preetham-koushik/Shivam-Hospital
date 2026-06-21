import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import SectionTitle from "@/components/Assets/Ui/SectionTitle/SectionTitle";
import Container from "@/components/Layouts/Container";
import styles from "./page.module.css";
import Image from "next/image";
import docData from "@/components/Data/Doctors/doctors.json";

// Helper to get full name with/without "Dr."
const getFullName = (doc) => {
  const prefix = doc.isDoctor ? "Dr. " : "";
  const firstName = doc.firstname || "";
  const lastName = doc.lastname || "";
  return `${prefix}${firstName} ${lastName}`.trim();
};

export const generateMetadata = ({ params }) => {
  const filterDoc = docData.filter((item) => item.link == params.doctorsLinks);
  const doc = filterDoc[0];
  return {
    title: doc?.seoTitle?.title || "Doctor Profile",
    description: doc?.seoTitle?.desc || "",
  };
};

export default function Page({ params }) {
  const filterDoc = docData.filter((item) => item.link == params.doctorsLinks);
  const doc = filterDoc[0];

  if (!doc) {
    return <div>Doctor not found</div>;
  }

  return (
    <main>
      <BannerTitle
        title={getFullName(doc)}
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
              src={`/images/doctors/${doc.image}`}
              width={370}
              height={370}
              alt={doc.imageAlt || getFullName(doc)}
              style={{ objectFit: "cover" }}
            />
          </section>
          <section className={styles.doctor_content}>
            <section className={styles.doctor_title}>
              <h3>{getFullName(doc)}</h3>
              <p className="ptag">{doc.designation}</p>
            </section>
            <section className={styles.doctor_list}>
              <ul>
                {doc.qualification && (
                  <li>
                    <div>
                      <p className="ptag"><strong>Qualification</strong></p>
                    </div>
                    <div>
                      <p className="ptag">{doc.qualification}</p>
                    </div>
                  </li>
                )}
                {doc.workExperience && (
                  <li>
                    <div>
                      <p className="ptag"><strong>Experience</strong></p>
                    </div>
                    <div>
                      <p className="ptag">{doc.workExperience}</p>
                    </div>
                  </li>
                )}
              </ul>
            </section>
          </section>
        </section>

        <section
          className={`${styles.doctor_desc} ptag`}
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      </Container>
    </main>
  );
}