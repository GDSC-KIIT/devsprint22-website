import { About, Main, Navbar, Sponsors } from "../components";
export default function Home() {
  return (
    <>
      <div id="landing-page">
        <Navbar />
        <Main />
      </div>
      <About />
      <Sponsors />
    </>
  );
}
