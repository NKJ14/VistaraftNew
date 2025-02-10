import Card from "../Card/Card";
import Hero from "../Hero/Hero";
import SubHero from "../subHero/SubHero";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.jpg";

function Home() {
  return (
    <div className="w-screen max-w-full overflow-hidden m-3">
      <Hero />
      <br/>
      <br/>
      <SubHero />
      <br/>
      <br/>
      <h1 class="text-center mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Trips you will
          </span>{" "}
          (Love)
        </h1>
        <br/>
        <br/>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Card photo={photo1} />
        <Card photo={photo2} />
        <Card photo={photo3} />
        <Card photo={photo4} />
        <Card photo={photo5} />
        <Card photo={photo6} />
        <Card photo={photo7} />
        <Card photo={photo8} />
      </div>
    </div>
  );
}

export default Home;
