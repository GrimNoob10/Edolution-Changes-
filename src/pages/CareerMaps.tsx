import React, { useState, useEffect } from "react";
import "./SkillCertification.css";
import { Header } from "@/components/Header";
import { PlatformPreviewSection } from "@/components/PlatformPreviewSection";
import { ImpactSection } from "@/components/impactSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { Footer } from "@/components/Footer";

export function CareerMaps() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const impactData = {
    title: "Building a Connected, Data-Driven Workforce Ecosystem",
    titleHighlights: ["Connected", "Workforce"],
    subtitle:
      "The Career Maps Tool connects skills, roles, and pathways through an interactive, data-driven ecosystem. It empowers governments, organizations, educators, and individuals to understand workforce trends, identify skill gaps, and design future-ready talent strategies.",
    description:
      "Built for scalability across sectors such as energy, manufacturing, and emerging technologies, the platform brings clarity, inclusivity, and intelligence to workforce development and career planning",
    color: "#197b55",
  };

  const valuePropositionData = {
    title: "Value Proposition",
    titleHighlight: "Business",
    titleIcon: "images/careerMaps/Business Value Proposition 01.svg",

    accentColor: "#698e45",
    backgroundColor: "#ffffff",
    iconBackgroundColor: "#698e45",
    hoverBackgroundColor: "#FEF0D7",
    hoverIconBackgroundColor: "#FAB029",
    titleColor: "#698e45",
    hoverTitleColor: "#FAB029",
    borderColor: "#E9F1E1",
    hoverBorderColor: "#698e45",
    textColor: "#698e45",
    hoverTextColor: "#FAB029",
    hoverBlobColor: "#FAB029",
    hoverIconFilter: "",
    cards: [
      {
        icon: "images/careerMaps/Business Value Proposition 01.svg",
        title: "Workforce Intelligence",
        description: "Unified view of roles, skills, and career transitions",
      },
      {
        icon: "images/careerMaps/Business Value Proposition 02.svg",
        title: "Career Transparency",
        description:
          "Enables citizens, graduates, and job seekers to explore data-backed growth paths",
      },
      {
        icon: "images/careerMaps/Business Value Proposition 03.svg",
        title: "AI Career Guidance",
        description:
          "Multilingual chatbot offers personalized, real-time career support",
      },
      {
        icon: "images/careerMaps/Business Value Proposition 04.svg",
        title: "Skill Insights",
        description:
          "Dashboards track demand, readiness, and emerging opportunities",
      },
    ],
  };

  const featuresData = {
    title: "Features",
    titleHighlight: "Key",
    accentColor: "#FAB029",
    accentColorB: "#FEF0D7",
    features: [
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Interactive Career Maps",
        previewImage: "images/careerMaps/Career Maps Image 02.png",
        previewClass: "preview-content",
        description: (
          <>
            Visualize career progressions, skill overlaps, and transitions.
            <br />
            <br />
            Explore real-world pathways and compare opportunities across
            multiple sectors
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Skill Ontology Framework",
        previewImage: "images/careerMaps/Career Maps Image 03.png",
        previewClass: "preview-content",
        description: (
          <>
            Centralized, metadata-driven database linking skills, roles, and
            career levels. Powers analytics, role matching, and AI-driven
            guidance
            <br />
            <br />
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Role Matching & Skill Gap Analysis",
        previewImage: "images/careerMaps/Career Maps Image 04.png",
        previewClass: "industry-preview",
        description: (
          <>
            Compare roles to identify shared competencies and missing skills.
            <br />
            <br />
            Export insights for workforce planning, HR reviews, or career
            guidance
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "AI Career Guidance Chatbot",
        previewImage: "images/careerMaps/Career Maps Image 05.png",
        previewClass: "certificate-preview",
        description: (
          <>
            Conversational assistant helps users explore job transitions and
            skill needs
            <br />
            <br />
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Admin Dashboard & Sector Management",
        previewImage: "images/careerMaps/Career Maps Image 06.png",
        previewClass: "chart-preview",
        description: (
          <>
            Manage industries, roles, and skills through an intuitive interface.
            <br />
            <br />
            Monitor usage, demand, and engagement with real-time dashboards
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Multilingual & Accessible",
        previewImage: "images/careerMaps/Career Maps Image 07.png",
        previewClass: "language-preview",
        description: (
          <>
            Supports diverse industries — from Energy and Manufacturing to
            Emerging Tech.
            <br />
            <br />
            Easily expandable through admin tools without redevelopment
          </>
        ),
      },
    ],
  };

  const useCasesData = {
    title: "Use Cases",
    titleHighlight: "Strategic",
    backgroundColor: "#E9F1E1",
    iconBackgroundColor: "#698E45",
    hoverBackgroundColor: "#dbeafe",
    hoverIconBackgroundColor: "#3b82f6",
    titleColor: "#047857",
    hoverTitleColor: "#1e40af",
    borderColor: "#059669",
    hoverBorderColor: "#3b82f6",
    textColor: "#4b5563",
    hoverTextColor: "#1e3a8a",
    cards: [],
  };

  return (
    <>
      <div className="app">
        <Header />

        <PlatformPreviewSection
          title="Skill Certification Platform"
          titleHighlight="Skill Certification"
          subtitle="Certify Skills With Speed, Scale, And Trust."
          previewImage="images/careerMaps/Career Maps Image 01.png"
          titleColor="#197b55"
          backgroundColor="#FAB029"
          outerBackgroundColor="#FEF0D7"
        />

        <ImpactSection {...impactData} />

        <ValuePropositionSection {...valuePropositionData} />

        <FeaturesSection {...featuresData} />

        <UseCasesSection {...(useCasesData||{})} />

        <section className="why-section">
          <div className="section-container">
            <h2 className="section-title text-black relative">
  <span className="text-green">Why</span> It Matters
  <span
    className="trend-icon"
    style={{
      position: "absolute",
      right: "506px", // adjust px for perfect alignment
      top: "-22px",   // adjust px for perfect alignment
      zIndex: 5,
    }}
  >
    <svg
      width="44"
      height="28"
      viewBox="0 0 43 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196"
        stroke="#19223F"
        strokeWidth="5.5"
        strokeMiterlimit="10"
      />
      <path
        d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678"
        stroke="#698E45"
        strokeWidth="5.5"
        strokeMiterlimit="10"
      />
    </svg>
  </span>
</h2>

            <p className="why-text">
              The Skill Certification Platform Transforms Fragmented Processes
              Into A Unified Ecosystem — Enabling Verified Credentials,
              Measurable Impact, And True Workforce Transformation
            </p>
          </div>
        </section>

    
      </div>

      <Footer />
    </>
  );
}
