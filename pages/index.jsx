import { About, Main, Navbar, Sponsors, Tracks, Rules, Timeline, Footer, FAQ } from "../components";
export default function Home() {
  return (
    <>
      <div id="landing-page">
        <Navbar />
        <Main />
      </div>
      <About />
      <Sponsors />
      <Tracks/>
      <Rules/>
      <Timeline/>
      <FAQ />
      <Footer/>
    </>
  );
}
