import FadeUp from "@/components/Transitions/FadeUp";
import LinkRoute from "@/components/ui/LinkRoute";
import Link from "next/link";
import { BiRocket, BiStar } from "react-icons/bi";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-20 bg-gradient-to-r transition-all duration-100">
      <FadeUp>
        <h1 className="text-3xl md:text-6xl mb-2 md:mb-5">Build new apps</h1>
      </FadeUp>
      <FadeUp delay={0.2}>
        <h3 className="text-2xl mb-6 text-gray-400">
          Hassle-free template for building simple and minimalist react apps
        </h3>
      </FadeUp>
      <FadeUp delay={0.4}>
        <div className="flex">
          <LinkRoute href="/">
            <BiRocket className="mr-2" />
            Getting Started
          </LinkRoute>
          <Link
            href="https://github.com/chikaof/react-starter"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-gray-300 duration-200 transition-all ml-6"
          >
            <BiStar className="mr-2" />
            Star on GitHub
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
