import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AboutHeader from "../components/AboutHeader";
import UseLanguage from "@/static_data/data";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { pageData } = UseLanguage();

  return (
    <>
      <main>
        <AboutHeader />
        <section className={styles.missionStatement}>
          <div className={styles.missionText}>
            {pageData.missionStatement.map((each, idx) => (
              <p key={idx}>{each}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
