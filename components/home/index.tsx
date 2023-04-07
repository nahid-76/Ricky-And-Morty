import React from "react";
import Head from "next/head";
import Image from "next/image";
import WithHeaderLayout from "@/components/layout/withHeaderLayout/withHeaderLayout";
import styles from "@/styles/global.module.scss";
import { SITE_TITLE } from "@/constants/messages";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content="Rick And Morti app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithHeaderLayout>
        <div className={styles["image-container"]}>
          <Image
            src="/RickMorty.jpg"
            layout="fill"
            className={styles["image"]}
            alt="character image"
          />
        </div>
      </WithHeaderLayout>
    </>
  );
};
export default Home;
