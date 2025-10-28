import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import GallerySection from "@/components/home/GallerySection";
import ContactSection from "@/components/home/ContactSection";
import FloatingWhatsApp from "@/components/home/FloatingWhatsApp";
import RegistrationModal from "@/components/home/RegistrationModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <FloatingWhatsApp />
      <RegistrationModal />
    </div>
  );
}
