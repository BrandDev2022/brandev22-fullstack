import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Logo from "@/public/media/logowhite.png";
import AboutHeader from "../components/AboutHeader";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <AboutHeader />
        <section className={styles.missionStatement}>
          <div className={styles.missionText}>
            <p>
              At BRANDEV22 LLC, our unwavering mission is to revolutionize the
              digital landscape through pioneering web development practices. We
              stand as the vanguard of innovation, propelling businesses into a
              future where the intersection of design and functionality yields
              extraordinary digital experiences.
            </p>
            <p>
              We hold steadfast to the belief that the digital realm is not just
              a canvas but an immersive environment where businesses can thrive
              and connect with their audiences on profound levels. Our purpose
              is to empower enterprises with cutting-edge solutions that
              transcend the ordinary, seamlessly merging artistry and technology
              to craft captivating web experiences that resonate deeply.
            </p>
            <p>
              Fueled by an unquenchable thirst for technological advancement, we
              are driven to transcend conventional boundaries. Our dedicated
              team of seasoned developers, visionary designers, and strategic
              minds form an unparalleled synergy, enabling us to provide
              holistic solutions that transcend mere code. Through this
              synthesis of talent, we engineer websites and applications that
              transcend expectations, bridging the gap between dreams and
              reality.
            </p>
            <p>
              Our commitment to excellence is the cornerstone of our philosophy.
              We labor not just to meet but to surpass expectations, delivering
              solutions that redefine the benchmark of success. Each line of
              code is imbued with our passion for perfection and our dedication
              to pushing the boundaries of what is achievable.
            </p>
            <p>
              We approach our work with a profound sense of responsibility,
              recognizing that the digital ecosystem is a dynamic space that
              requires constant evolution. Through our collaborative spirit, we
              establish enduring partnerships with our clients, underpinned by
              mutual trust and shared victories. It is within these partnerships
              that our mission thrives, where dreams are nurtured and where
              technology is harnessed to drive growth.
            </p>
            <p>
              In every corner of the codebase, in every pixel of design, we are
              shaping the digital landscape. We view technology not just as
              tools, but as brushes that paint the future and architects that
              construct tomorrow. As we propel businesses forward in this
              ever-evolving technological realm, we do so with reverence for the
              past, an acute awareness of the present, and an unyielding vision
              for the future.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

{
  /* <div className={styles.wrapper}>
<div className={styles.staticText}>Build your</div>
<ul className={styles.dynamicTexts}>
  <li className={styles.choice}>
    <span>Website.</span>
  </li>
  <li className={styles.choice}>
    <span>Software.</span>
  </li>
  <li className={styles.choice}>
    <span>Brand.</span>
  </li>
</ul>
</div> */
}
