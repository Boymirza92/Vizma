import React from "react";
import Header from "./components/header/page";
import ServiceCard from "./components/section/serviseCard/page";
import Footer from "./components/footer/page";
import Section from "./components/section/section/page";
import SectionInfo from "./components/section/sectionInfo/page";
import "./globals.css"
export default function Home() {
  return (
    <div>
      <Header />
      <ServiceCard/>
      <Section/> 
      <SectionInfo/>
      <Footer />
       
    </div>
  );
};
