import React, { useState, useEffect } from "react";
import "./SkillCertification.css";
import { Header } from "@/components/Header";
import { PlatformPreviewSection } from "@/components/PlatformPreviewSection";
import { ImpactSection } from "@/components/impactSection";
import { ValuePropositionSection } from "@/components/ValuePropositionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { Footer } from "@/components/Footer";

export function SkillCertification() {
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
    title: "Driving Workforce Readiness & Business Impact",
    titleHighlights: ["Workforce", "Business"],
    subtitle: "Empower Businesses And Governments To Build A Skilled, Certified Workforce.",
    description: "The Skill Certification Platform Bridges This Gap By Digitizing The Entire Certification Lifecycle — From Eligibility Checks To Assessment, Issuance, And Verification — Through A Single, Scalable Solution",
    color: "#197b55",
  };

  const valuePropositionData = {
    title: "Value Proposition",
    titleHighlight: "Business",
    titleIcon: "images/skillCertification/Business Value Proposition 01.svg",
    backgroundColor: "#ffffff",
    iconBackgroundColor: "#698e45",
    hoverBackgroundColor: "#DDEDFE",
    hoverIconBackgroundColor: "#064789",
    hoverTitleColor: "#064789",
    borderColor: "#DDEDFE",
    hoverBorderColor: "#064789",
    textColor: "#698e45",
    hoverTextColor: "#064789",
    blobColor: "#698e45",
    hoverBlobColor: "#064789",
    hoverIconFilter: "#ffffff",
    cards: [
      {
        icon: "images/skillCertification/Business Value Proposition 01.svg",
        title: "Faster Credentialing",
        description: "Cut certification time from weeks to hours",
      },
      {
        icon: "images/skillCertification/Business Value Proposition 02.svg",
        title: "Scalable Operations",
        description: "Manage enterprise or national programs on one platform",
      },
      {
        icon: "images/skillCertification/Business Value Proposition 03.svg",
        title: "Verified Skills",
        description: "Issue tamper-proof, trackable digital certificates",
      },
      {
        icon: "images/skillCertification/Business Value Proposition 04.svg",
        title: "Actionable Insights",
        description:
          "Use real-time analytics to identify skill gaps and performance trends",
      },
      {
        icon: "images/skillCertification/Business Value Proposition 05.svg",
        title: "Workforce Readiness",
        description: "Ensure globally compliant, job-ready talent",
      },
    ],
  };

  const featuresData = {
    title: "Features",
    titleHighlight: "Key",
    accentColor: "#064789",
    accentColorB: "#DDEDFE",
    features: [
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "End-to-End Certification Management",
        previewImage: "images/skillCertification/Skill Cerificate image 02.png",
        previewClass: "preview-content",
        description: (
          <>
            Digitize the full certification lifecycle — from registration and
            assessment to issuance and verification.
            <br />
            <br />
            Automated workflows reduce admin effort, supporting both online and
            offline assessments
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Advanced Assessment Engine",
        previewImage: "images/skillCertification/Skill Cerificate image 03.png",
        previewClass: "preview-content",
        description: (
          <>
            Create and deliver assessments in minutes with an integrated builder
            and exam proctoring.
            <br />
            <br />
            Supports multiple formats with automated and manual scoring options
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Industry Alignment",
        previewImage: "images/skillCertification/Skill Cerificate image 04.png",
        previewClass: "industry-preview",
        description: (
          <>
            Align certifications with national and global competency frameworks.
            <br />
            <br />
            Tag and benchmark skills for accurate reporting and real-world job
            relevance
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Secure Digital Certificates",
        previewImage: "images/skillCertification/Skill Cerificate image 05.png",
        previewClass: "certificate-preview",
        description: (
          <>
            Generate branded, tamper-proof certificates instantly.
            <br />
            <br />
            Each includes a unique verification link or QR code, with automated
            renewals and expiry tracking
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Real-Time Intelligence & Analytics",
        previewImage: "images/skillCertification/Skill Cerificate image 06.png",
        previewClass: "chart-preview",
        description: (
          <>
            Track completion trends, pass rates, and regional readiness.
            <br />
            <br />
            Identify skill gaps and generate reports to support data-driven
            policy and HR decisions
          </>
        ),
      },
      {
        icon: "images/skillCertification/Key Features 01.svg",
        title: "Multilingual & Accessible",
        previewImage: "images/skillCertification/Skill Cerificate image 07.png",
        previewClass: "language-preview",
        description: (
          <>
            Available in English, Arabic & other languages.
            <br />
            <br />
            Optimized for low-bandwidth environments, ensuring accessibility
            anywhere
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
    hoverIconBackgroundColor: "#064789",
    hoverBackgroundColor: "#DDEDFE",
    hoverTextColor: "#064789",
    hoverTitleColor: "#064789",
    borderColor: "#064789",
    textColor: "#698E45",
    cards: [
      {
        icon: "images/skillCertification/Strategic Use Cases 01.svg",
        title: "Government & National Programs",
        description:
          "Enable large-scale workforce certification drives under national skill missions or sector development programs",
      },
      {
        icon: "images/skillCertification/Strategic Use Cases 02.svg",
        title: "Enterprises & Industry Bodies",
        description:
          "Standardize internal competency frameworks and ensure continuous employee upskilling",
      },
      {
        icon: "images/skillCertification/Strategic Use Cases 03.svg",
        title: "Training Providers",
        description:
          "Offer credentialed learning experiences with automated verification and renewals.",
      },
      {
        icon: "images/skillCertification/Strategic Use Cases 04.svg",
        title: "Regulatory & Accreditation Agencies",
        description:
          "Gain real-time visibility into certified professionals and maintain compliance oversight",
      },
    ],
  };

  return (
    <>
      <div className="app">
        <Header />

        <PlatformPreviewSection
          title="Skill Certification Platform"
          titleHighlight="Skill Certification"
          subtitle="Certify Skills With Speed, Scale, And Trust. "
          previewImage="images/skillCertification/preview-skill.png"
        />

        <ImpactSection {...impactData} />

        <ValuePropositionSection {...valuePropositionData} />

        <FeaturesSection {...featuresData} />

        <UseCasesSection {...useCasesData} />

        <section className="why-section">
          <div className="section-container">
            <h2 className="section-title text-black">
              <span className="text-green">Why</span> It Matters
              <span className="trend-icon">📈</span>
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
