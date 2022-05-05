import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Donut Shop</title>
        <meta name='description' content='The Donut Shop' />
        <link rel='icon' href='/logo.svg' />
      </Head>

      <Header />

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
