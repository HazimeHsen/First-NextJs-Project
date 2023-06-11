import Image from "next/image";
import hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your idea int Reality. We bring together the teams from the
          global tect industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
