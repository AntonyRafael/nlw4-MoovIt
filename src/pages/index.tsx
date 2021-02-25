import Head from "next/head";

import styles from "../styles/pages/Home.module.css";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallanges } from "./components/CompletedChallanges";
import { Countdown } from "./components/Countdown";
import { ChallangeBox } from "./components/ChallangeBox";
import { CountdownProvider } from "./contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Inicio | Moovit</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompleteChallanges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
