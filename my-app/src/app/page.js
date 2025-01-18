import Image from "next/image";
import styles from "./page.module.css";
import { CoverDemo } from "../components/CoverDemo"; // Make sure the import path is correct

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        {/* Use the CoverDemo component here */}
        <CoverDemo />
      </main>
    </div>
  );
}
