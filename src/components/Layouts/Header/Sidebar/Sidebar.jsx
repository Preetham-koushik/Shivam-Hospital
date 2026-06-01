//styles
import styles from "./sidebar.module.css";

//icons
import { AiFillCloseSquare } from "react-icons/ai";
import NavbarData from "@/components/Data/Navbar/navbar.json";
import Link from "next/link";

export default function Sidebar({ show, setShow }) {
  return (
    <aside
      className={`${styles.sidebar_wrapper} ${
        show && styles.sidebar_wrapper_active
      }`}
    >
      <div className={styles.sidebar_wrapper_bg}></div>
      <div
        className={`${styles.sidebar_menu_content} ${
          show && styles.sidebar_menu_content_active
        }`}
      >
        <section className={styles.sidebar_menu_item}>
          <ul className={styles.menu_items}>
            {NavbarData.map((navItem) => {
              return (
                <li key={navItem.id}>
                  <Link href={navItem.link}>{navItem.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button
            onClick={() => setShow(!show)}
            className={styles.sidebar_close}
          >
            <AiFillCloseSquare />
          </button>
        </section>
      </div>
    </aside>
  );
}
