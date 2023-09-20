import Head from "next/head";
import { Element as Section } from "react-scroll";
import {
  AboutSection,
  HeroSection,
  ResumeSection,
  ContactSection
} from "../components/containers";
import { Layout } from "../components/layout";
import { SectionHeading } from "../components/utils";

const Homepage1 = () => {
  return (
    <Layout>
      <Head>
        <title>Veronica Eulenberg</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection typed={false} />
      </Section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section
        name="section-about"
        className="about-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="About Me" watermark="" />
          <AboutSection />
        </div>
      </Section>
      {/* End About Section */}

      {/* Start Resume Section */}
      <Section
        name="section-resume"
        className="resume-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="My Experience" watermark="" />
          <ResumeSection />
        </div>
      </Section>
      {/* End Resume Section */}

      {/* Start Contact Section */}
      <Section
        name="section-contact"
        className="contact-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading title="Contact Me" watermark="" />
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default Homepage1;

export async function getStaticProps() {
  return {
    props: {
    },
    revalidate: 10,
  };
}
