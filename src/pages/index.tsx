import Head from "next/head";
import { GetServerSideProps } from "next";
import styles from "../styles/pages/Home.module.css";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallanges } from "./components/CompletedChallanges";
import { Countdown } from "./components/Countdown";
import { ChallangeBox } from "./components/ChallangeBox";
import { CountdownProvider } from "./contexts/CountdownContext";
import { ChallangesProvider } from "../pages/contexts/ChallangesContext";



interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number,
}

export default function Home(props: HomeProps) {
  console.log(props);

  return (
    <ChallangesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
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
    </ChallangesProvider>
  );
}

// Tudo feito aqui executa no node, e não no browser para o usuário
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
