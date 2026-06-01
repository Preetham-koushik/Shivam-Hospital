import React from "react";

//styles
import styles from "./pop.module.css";

export default function Popup({ show, setShow }) {
  const handleActiveClick = () => {
    setShow(!show);
  };

  return (
    <section
      className={`${styles.pop_up_container} ${
        show && styles.pop_up_container_active
      }`}
    >
      <div
        className={styles.pop_up_bg}
        onClick={() => handleActiveClick()}
      ></div>
      <div
        className={`${styles.pop_up_width}   ${
          show && styles.pop_up_form_show
        }`}
      >
        <div className={styles.pop_up_title_container}>
          <div className={styles.pop_up_title}>
            {/* <AiFillCloseCircle onClick={() => handleActiveClick()} /> */}
            <button onClick={() => handleActiveClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                />
              </svg>
            </button>
          </div>
          <div>
            <a href="https://wa.me/919606028161?text=Hello%20I'm%20looking%20for%20">
              <img src="/images/pop/shivam_pops.jpg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
