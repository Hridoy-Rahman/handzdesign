
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Home",
  description: "This is Home for H & Z Design",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Testimonials />
      <Products />
      <Contact />
    </>
  );
}
