import Navbar from "@/components/navbar.tsx";
import HomepageIntro from "@/components/homepage-intro.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomepageIntro className="mt-24"/>
    </>
  );
}
