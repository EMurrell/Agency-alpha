import FadeIn from "../animations/FadeIn";
import FadeUp from "../animations/FadeUp";
import FadeRight from "../animations/FadeRight";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../components/Arrow.js";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col px-8 py-10 md:py-24 md:px-24 lg:px-60 2xl:px-80 text-neutral-900 font-display"
    >
      <FadeUp>
        <div className="flex lg:justify-center">
          <span className="py-4 text-4xl font-medium md:text-5xl lg:text-6xl">
            Why Choose Us?
          </span>
        </div>
      </FadeUp>

      <div className="pt-4 text-2xl font-normal md:text-3xl lg:text-4xl font-body">
        <div className="flex flex-col pb-4">
          <FadeRight>
            <div className="py-8">
              <h2 className="flex flex-row pb-2">
                <Arrow />
                Ultra-Fast
              </h2>

              <p className="pb-2 pl-2 text-base md:text-lg lg:text-xl ">
                Our websites are built on modern web technologies&nbsp;
                <a
                  href="https://jamstack.org/what-is-jamstack/"
                  className="italic text-highlight1 hover:text-highlight1"
                >
                  (Jamstack)
                </a>
                , and are optimized for incredibly fast load times. This means
                better conversion rates for your business, and a better
                experience for your patrons.
              </p>
            </div>
          </FadeRight>

          <FadeRight>
            <div className="py-8">
              <h2 className="flex flex-row pb-2 ">
                <Arrow />
                Fully Responsive
              </h2>

              <p className="pb-2 pl-2 text-base md:text-lg lg:text-xl ">
                Now more than ever, it is essential that your website looks good
                on a mobile browser. We deliver pixel-perfect design that looks
                and works great on all devices, guaranteed.
              </p>
            </div>
          </FadeRight>
          <FadeRight>
            <div className="py-8">
              <h2 className="flex flex-row pb-2 ">
                <Arrow />
                Intuitive Design
              </h2>

              <p className="pb-2 pl-2 text-base md:text-lg lg:text-xl ">
                Clear navigation and concise presentation of information are
                cornerstones of our design process.
              </p>
            </div>
          </FadeRight>

          <FadeRight>
            <div className="py-8 ">
              <h2 className="flex flex-row pb-2 ">
                <Arrow />
                Transparent Pricing
              </h2>

              <p className="pb-2 pl-2 text-base md:text-lg lg:text-xl ">
                Our pricing structure was devised with affordability and
                convenience in mind. We&apos;re here to get you online so you
                can focus on running your business.
              </p>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
