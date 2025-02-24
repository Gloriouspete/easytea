"use client"
import Header from "@/components/header";
import Hero from "@/components/hero";
import Collection from "@/components/collection";
import Learn from "@/components/learn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Learn />
      <Collection />

    </div>
  );
}
