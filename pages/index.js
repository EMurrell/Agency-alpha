import Head from "next/head";
import Image from "next/image";
import Meta from "../components/Meta";
import Nav from "../components/Nav.js";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <About />

      <Pricing />
      <Contact />
    </>
  );
}
