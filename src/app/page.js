import LandingPage from "@/component/LandingPage";
import styles from "./page.module.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/component/Navbar";
import About from "@/component/About";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={openSans.className}>
      <Navbar />
      <LandingPage />
      <div id="about" className={styles.aboutDiv}>
        <About />
      </div>
    </main>
  );
}
