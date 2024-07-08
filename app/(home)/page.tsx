import Navbar from "@/app/(home)/components/navbar";
import Hero from "./components/hero";
import { checkUser } from "@/lib/checkUser";

export default function Home() {
  const user = checkUser();
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
    </div>
  );
}
