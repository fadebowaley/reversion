"use client";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Benefit from "@/components/home-1/Benefit";
import Hero from "@/components/home-4/Hero";
import NewListing from "@/components/home-1/NewListing";
import Services from "@/components/home-1/Services";
import Testimonial from "@/components/home-1/Testimonial";
import MobileMenu from "@/components/MobileMenu";
import Facilities from "@/components/home-4/Facilities";
import Featured from  "@/components/home-4/Featured";


export default function Home() {
  return (
    <main>
      <HeaderTop />
      <CommonHeader />
      <MobileMenu />
      <Hero />
      <Services />
      <Facilities />
      <Featured />
      <NewListing />
      <Benefit />
      <Testimonial />
      <Footer />
    </main>
  );
}
