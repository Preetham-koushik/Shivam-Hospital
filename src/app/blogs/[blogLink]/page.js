import React from "react";
import data from "@/components/Data/Blogs/blogs.json";
import BannerTitle from "@/components/Assets/Ui/BannerTitle/BannerTitle";
import Container from "@/components/Layouts/Container";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
export const generateMetadata = ({ params }) => {
  const filterSpeciality = data.filter(
    (speciality) => speciality.link == params.blogLink
  );

  return {
    title: `${filterSpeciality[0]?.seoTitle?.title}`,
    description: `${filterSpeciality[0]?.seoTitle?.desc}`,
  };
};
export default function page({ params }) {
  const filterBlog = data.filter(
    (speciality) => speciality.link == params.blogLink
  );

  if (filterBlog[0]) {
    return (
      <>
        <div className={styles.title_tag}>
          <BannerTitle
            title={filterBlog[0].title}
            titleColor="#fff"
            tag="h1"
            alt="banner image"
            textAlignment="center"
          />
        </div>

        <Container width>
          <section className={styles.single_blog_content_container}>
            <section className={styles.single_blog_content_img}>
              <div>
                <Image
                  src={`/images/blogs/${filterBlog[0].img}`}
                  width={750}
                  height={400}
                  alt="Picture of the author"
                  className={styles.about_img}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className={styles.single_blog_contents}
                dangerouslySetInnerHTML={{ __html: filterBlog[0].content }}
              ></div>
            </section>
            <section className={styles.single_blog_sidebar}>
              <aside>
                <ul>
                  {data?.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={`/blogs/${item.link}`}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </section>
          </section>
        </Container>
      </>
    );
  }
}
