import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import PopularSports from "@/components/homepage/PopularSports";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularSports/>
      <Featured/>
    </div>
  );
}
