"use client";
import Link from "next/link";
import Image from "next/image";
import githubLogo from "@/public/media/github logo.png";
import discordLogo from "@/public/media/discord logo.png";
import linkedInLogo from "@/public/media/linkdin logo.png";
import whiteLogo from "@/public/media/logowhite.png";
import styles from "@/styles/NavbarFooter.module.css";

const Icons = {
  width: "50px",
  height: "50px",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <div className={styles.locationInfo}>
            <h3>
              CONTACT
              <br />
            </h3>
            <Link href="mailto:BRANDEV22@GMAIL.COM">BRANDEV22@GMAIL.COM</Link>
            <br />
            <address>
              JACKSONVILLE
              <br />
              FL, 32256 <br />
            </address>
          </div>

          <div className={styles.socialMediaIcons}>
            <Link href="https://github.com/albertbrannan4" target="_blank">
              <Image
                style={Icons}
                className="githubLogo"
                src={githubLogo}
                alt=""
              />
            </Link>
            <Link href="https://discord.gg/8Xq5uR3b" target="_blank">
              <Image
                style={Icons}
                className="discordLogo"
                src={discordLogo}
                alt=""
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/albertbrannan4/"
              target="_blank"
            >
              <Image
                style={Icons}
                className="linkdinLogo"
                src={linkedInLogo}
                alt=""
              />
            </Link>
          </div>
        </div>

        <Image width={200} src={whiteLogo} alt="" />
      </div>
    </footer>
  );
}
