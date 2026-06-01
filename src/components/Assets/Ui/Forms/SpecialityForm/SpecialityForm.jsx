import React from "react";
import styles from "./specialityForm.module.css";
export default function SpecialityForm({ white }) {
  return (
    <form
      method="POST"
      action="https://brandeezy.in/forms/shivam/speciality.php"
      className={`${styles.banner_form} ${white && styles.banner_form_white}`}
    >
      <h3>Enquiry Form</h3>
      <div>
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div>
        <input type="email" name="email" placeholder="E-Mail" required />
      </div>
      <div>
        <input
          type="phone"
          pattern="^[6-9]\d{9}$"
          name="phone"
          placeholder="Phone Number"
          required
        />
      </div>
      <div>
        <input type="submit" value="Enquire Now" name="s  ubmit" />
      </div>
    </form>
  );
}
