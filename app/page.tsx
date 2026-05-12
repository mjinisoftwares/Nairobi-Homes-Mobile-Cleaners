import { AboutSection } from "@/components/about";
import Contact from "@/components/contact";
import { HeroCleaning } from "@/components/hero1";
import { ProjectsGallery } from "@/components/projects";
import { ServicesSection } from "@/components/services";
import { WhyChooseUs } from "@/components/WhyUs";


export default function Home() {
  return (
    <main className="">
  
   <HeroCleaning />
   <AboutSection />
   <ServicesSection />
   <WhyChooseUs />
   <ProjectsGallery />
   <Contact />

    </main>

  );
}
