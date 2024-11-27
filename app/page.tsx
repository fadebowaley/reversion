"use client";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
import Benefit from "@/components/main/Benefit";
import Hero from "@/components/main/Hero";
import NewListing from "@/components/main/NewListing";
import Services from "@/components/main/Services";
import Testimonial from "@/components/main/Testimonial";
import MobileMenu from "@/components/MobileMenu";
import Facilities from "@/components/main/Facilities";
import Featured from "@/components/main/Featured";
import DiscoverLocation from "@/components/home-2/DiscoverLocation";


export default function Home() {
  return (
    <main>
      <HeaderTop />
      <CommonHeader />
      <MobileMenu />
      <Hero />
      {/* <DiscoverLocation /> */}
      {/* <Services /> */}
      <Facilities />
      <Featured />
      <NewListing />
      <Benefit />
      <Testimonial />
      <Footer />
    </main>
  );
}
