import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt=""
            className={styles.image}
          />
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            cols={30}
            rows={10}
            placeholder="message"
            className={styles.textArea}></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
}
