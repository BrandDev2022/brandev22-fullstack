import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import AboutHeader from "../components/AboutHeader";

import { useContext } from "react";
import { LanguageContext } from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const context = useContext(LanguageContext);
  return (
    <>
      <main>
        <AboutHeader />
        <section className={styles.missionStatement}>
          <div className={styles.missionText}>
            {context.pageData.missionStatement.map((each, idx) => (
              <p key={idx}>{each}</p>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
