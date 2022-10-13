import {
  About,
  Main,
  Navbar,
  Sponsors,
  Tracks,
  Rules,
  Timeline,
  Footer,
  FAQ,
} from "../components";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />
      <Main />
      <About />
      <Sponsors />
      <Tracks />
      <Rules />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
}
