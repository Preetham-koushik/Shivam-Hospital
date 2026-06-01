import React from "react";
import styles from "./sectionTitle.module.css";
export default function SectionTitle({
  title,
  strongTitle,
  content,
  contentColor,
  titleColor,
}) {
  return (
    <section className={styles.titles}>
      <h2 className="title" style={{ color: titleColor && titleColor }}>
        {title} <strong>{strongTitle}</strong>
      </h2>
      <p className="ptag" style={{ color: contentColor && contentColor }}>
        {content}
      </p>
    </section>
  );
}
