import React from "react";
import Head from "next/head";
import WithHeaderLayout from "@/components/layout/withHeaderLayout/withHeaderLayout";
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
      <WithHeaderLayout />
    </>
  );
};
export default Home;
