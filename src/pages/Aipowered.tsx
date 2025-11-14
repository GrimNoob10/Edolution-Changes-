import React, { useState, useEffect } from "react";
import "./SkillCertification.css";
import { Footer } from "@/components/Footer";
import { PlatformPreviewSection } from "@/components/PlatformPreviewSection";
import { ImpactSection } from "@/components/impactSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { Header } from "@/components/Header";

export function LearningPlatform() {
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
    title: "Empowering Organizations to Build Future-Ready Talent",
    titleHighlights: ["Organizations", "Future-Ready Talent"],
    subtitle: null,
    description: "In A Fast-Changing World, Organizations Must Continuously Develop Their Workforce. Our AI-Powered Learning Platform Provides A Centralized, Intelligent Ecosystem For Digital Learning and Skill Development — Helping Enterprises and Institutions Design and Deliver Impactful Learning at Speed and Scale.",
    color: "#197b55"
  };

  const valuePropositionData = {
    title: "Value Proposition",
    titleHighlight: "Business",
    titleIcon: "images/learningPlatform/Business Value element 01.svg",

    accentColor: "#698e45",
    backgroundColor: "#ffffff",
    iconBackgroundColor: "#698e45",
    hoverBackgroundColor: "#698e45",
    hoverIconBackgroundColor: "",
    titleColor: "#698e45",
    hoverTitleColor: "#ffffff",
    borderColor: "#E9F1E1",
    hoverBorderColor: "#698e45",
    textColor: "#698e45",
    hoverTextColor: "#ffffff",
    blobColor:"#698e45",
    hoverBlobColor: "#ffffff",
    hoverIconFilter: "",
    cards: [
      {
        icon: "images/learningPlatform/Business Value element 02.svg",
        title: "Accelerated Content Creation",
        description: "Use AI to build and launch learning programs faster",
      },
      {
        icon: "images/learningPlatform/Business Value element 03.svg",
        title: "Workforce Readiness",
        description: "Deliver outcome-driven training with industry needs",
      },
      {
        icon: "images/learningPlatform/Business Value element 04.svg",
        title: "Operational Efficiency",
        description: "Streamline course management, assessments, and tracking",
      },
      {
        icon: "images/learningPlatform/Business Value element 05.svg",
        title: "Actionable Insights",
        description: "Access real-time analytics on engagement and performance",
      },
      {
        icon: "images/learningPlatform/Business Value element 05.svg",
        title: "Engaging Learning Experience",
        description:
          "Offer an intuitive, multilingual platform accessible anytime, anywhere",
      },
    ],
  };

  const featuresData = {
    title: "Features",
    titleHighlight: "Key",
    accentColor: "#698E45",
    accentColorB: "#E9F1E1",
    // Hover colors
    features: [
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "AI-Enabled Content Creation",
        previewImage: "images/learningPlatform/Content using GenAI.png",
        previewClass: "preview-content",
        description: (
          <>
            Generate structured, high-quality learning content in minutes with
            built-in GenAI tools.
            <br />
            <br />
            Automated alignment and feedback ensure speed, accuracy, and
            consistency across teams
          </>
        ),
      },
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "Modular, Customizabe Design",
        previewImage: "images/learningPlatform/Frame 1321314637.png",
        previewClass: "preview-content",
        description: (
          <>
            Adapt the platform to your organization's learning framework.
            <br />
            <br />
            Configure courses, modules, and layouts for specific sectors or
            departments - easily scalable across divisions
          </>
        ),
      },
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "Seamless Course & Content Management",
        previewImage: "images/learningPlatform/Manage Content Flow.png",
        previewClass: "industry-preview",
        description: (
          <>
            Create and manage content with simple drag-and-drop tools.
            <br />
            <br />
            Supports all formats - video, PDFs, PPTs, and quizzes - with
            real-time editing and collaboration
          </>
        ),
      },
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "Personalized Learner Experience",
        previewImage: "images/learningPlatform/Frame 1321314641.png",
        previewClass: "certificate-preview",
        description: (
          <>
            Each learner gets a personalized dashboard to track progress and
            modules.
            <br />
            <br />
            Integrated quizzes and assignments promote active, anytime learning
            on desktop or mobile
          </>
        ),
      },
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "Real-Time Analytics & Reporting",
        previewImage: "images/learningPlatform/Frame 1321314642.png",
        previewClass: "chart-preview",
        description: (
          <>
            Dynamic dashboards provide insights on progress, completion, and
            skill readiness.
            <br />
            <br />
            Enable data-driven decisions and timely interventions for HR and L&D
            leaders
          </>
        ),
      },
      {
        icon: "images/learningPlatform/Key Features 01.svg",
        title: "Secure, Scalable & Multilingual",
        previewImage: "images/learningPlatform/Frame 1321314643.png",
        previewClass: "language-preview",
        description: (
          <>
            Built for scale with enterprise-grade security and GDPR compliance.
            <br />
            <br />
            Supports English, Arabic and other languages for global reach
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
    hoverIconBackgroundColor: "",
    hoverBackgroundColor: "#698E45",
    hoverTextColor: "#ffffffff",
    hoverTitleColor: "#ffffffff",
    titleColor: "#698E45",
    borderColor: "#698E45",
    textColor: "#698E45",
    hoverIconFilter: "#698E45",
    cards: [
      {
        icon: "images/learningPlatform/Strategic Use Cases element 01.svg",
        title: "Enterprises & Corporates",
        description:
          "Accelerate employee onboarding, upskilling, and leadership development",
      },
      {
        icon: "images/learningPlatform/Strategic Use Cases 02.svg",
        title: "Government Skill Initiatives",
        description:
          "Standardize internal delivery across sectors and monitor national learning progress",
      },
      {
        icon: "images/learningPlatform/Strategic Use Cases 03.svg",
        title: "Training Institutions",
        description:
          "Digitize curriculum delivery and automate performance analytics",
      },
      {
        icon: "images/learningPlatform/Strategic Use Cases 04.svg",
        title: "Industry Bodies",
        description:
          "Offer accredited, AI-enhanced learning programs aligned with evolving industry needs",
      },
    ],
  };

  return (
    <>
      <div className="app">
        <Header />

        <PlatformPreviewSection
          title="AI-Powered Learning Platform"
          titleHighlights={["AI-", "Learning"]}
          subtitle="Accelerating Workforce Capability Through Smart Learning."
          previewImage="images/learningPlatform/LUME-1-Dashboard.png"
          titleColor="#197b55"
          backgroundColor="#698E45"
          outerBackgroundColor="#E9F1E1"
        />

        <ImpactSection {...impactData} />

        <ValuePropositionSection {...valuePropositionData} />

        <FeaturesSection {...featuresData} />

        <UseCasesSection {...useCasesData} />

        <section className="why-section">
          <div className="section-container">
            <h2 className="section-title text-black">
              <span className="trend-icon "><svg className="w-[44px] md:ml-[850px]  h-[28px]" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196" stroke="#19223F" strokeWidth="5.5" strokeMiterlimit="10" />
                <path d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678" stroke="#698E45" strokeWidth="5.5" strokeMiterlimit="10" />
              </svg></span>
              <span style={{ color: "#197b55" }}>Why</span> It Matters

            </h2>
            <p className="why-text">
              By Uniting AI, Automation, And Analytics, It Empowers
              Organizations To Move From Training Management To Strategic
              Capability Building — Creating A Future-Ready Workforce
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
