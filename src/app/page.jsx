import HomeHero from "@/components/HomeHero";
import HomeHeroCards from "@/components/HomeHeroCards";
import Context from "../context/context";

const page = ({ Component, pageProps }) => {
  return (
    <div>
      <HomeHero></HomeHero>
      <HomeHeroCards></HomeHeroCards>
    </div>
  );
};

export default page;
