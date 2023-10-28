import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import AboutHeader from "../components/AboutHeader";
import { useLanguage } from "@/hooks/useLanguage";
import { useContext } from "react";
import { LanguageContext } from "@/store/LanguageContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { missionStatement } = useContext(LanguageContext);

  return (
    <>
      <main>
        <AboutHeader />
        <section className={styles.missionStatement}>
          <div className={styles.missionText}>
            {missionStatement.map((each, idx) => (
              <p key={idx}>{each}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
