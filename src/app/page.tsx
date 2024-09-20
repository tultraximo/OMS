import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle
        // preTitle="Nextly Benefits"
        title="Why should you use this landing page"
      >
        Nextly is a free xxlanding page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        preTitle="Watch a video"
        title="Proof of our product in action."
      >
        Watch as we completely remove the mold from a house.
      </SectionTitle>

      <Video videoId="IZ2P8OLdm2o" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        {/* Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests. */}
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}
