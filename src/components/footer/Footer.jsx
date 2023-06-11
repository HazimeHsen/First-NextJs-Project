import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>@2023 Hsen, All rights reversed.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src="/1.png"
          width={20}
          height={20}
          alt="facebool"
        />
        <Image
          className={styles.icon}
          src="/2.png"
          width={20}
          height={20}
          alt="instagram"
        />
        <Image
          className={styles.icon}
          src="/3.png"
          width={20}
          height={20}
          alt="twitter"
        />
        <Image
          className={styles.icon}
          src="/4.png"
          width={20}
          height={20}
          alt="youtube"
        />
      </div>
    </div>
  );
}

export default Footer;
