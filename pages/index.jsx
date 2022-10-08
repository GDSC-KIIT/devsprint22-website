import Head from "next/head";
import { Main, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <div id="landing-page">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
