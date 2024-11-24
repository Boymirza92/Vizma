import React from "react";
import Header from "./components/header/page";
import ServiceCard from "./components/serviseCard/page";
import Footer from "./components/footer/page";
import Section from "./components/section/page";
import "./globals.css"
export default function Home() {
  return (
    <div>
      <Header />
      <ServiceCard/>
      <Section/> 
      <Footer />
       
    </div>
  );
};
