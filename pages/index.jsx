import Head from "next/head";
import { Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
    </>
  );
}
