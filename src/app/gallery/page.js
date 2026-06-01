import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import styles from "./page.module.css";
import Image from "next/image";
import Container from "@/components/Layouts/Container";
export default function page() {
  return (
    <main>
      <BannerTitle
        title="Gallery"
        titleColor="#fff"
        tag="h1"
        alt="banner image"
      />
      <Container width>
        <section className={styles.gallery_items}>
          <article className={styles.gallery_item}>
            <Image
              src={"https://placehold.jp/370x340.png"}
              width={370}
              height={340}
              alt="Picture of the author"
              className={styles.about_img}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.gallery_content}>
              <h3>Dr. Andrew Bert</h3>
              <p className="ptag">
                {" "}
                Outpatient Surgery Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </article>
          <article className={styles.gallery_item}>
            <Image
              src={"https://placehold.jp/370x340.png"}
              width={370}
              height={340}
              alt="Picture of the author"
              className={styles.about_img}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.gallery_content}>
              <h3>Dr. Andrew Bert</h3>
              <p className="ptag">
                {" "}
                Outpatient Surgery Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </article>
          <article className={styles.gallery_item}>
            <Image
              src={"https://placehold.jp/370x340.png"}
              width={370}
              height={340}
              alt="Picture of the author"
              className={styles.about_img}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.gallery_content}>
              <h3>Dr. Andrew Bert</h3>
              <p className="ptag">
                {" "}
                Outpatient Surgery Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </article>
        </section>
      </Container>
    </main>
  );
}
