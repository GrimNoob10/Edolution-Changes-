import React from 'react';
import ServiceCard from './ServiceCard2';

const services = [
  {
    title: "Program Design & Strategic Advisory",
    description: "Designing large-scale, outcome-driven programs aligned with national priorities and ESG frameworks",
    iconSvg: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill="#E9F1E1"/><g><circle cx="13" cy="13" r="6" fill="#698E45"/><rect x="10" y="27" width="18" height="3" rx="1.5" fill="#698E45"/><rect x="10" y="33" width="10" height="3" rx="1.5" fill="#698E45"/></g></svg>`,
    decorationSvg: `<svg width="74" height="74"><circle cx="61" cy="61" r="13" fill="#698E45"/><circle cx="49" cy="37" r="13" fill="#E9F1E1"/><circle cx="37" cy="61" r="13" fill="#698E45"/></svg>`,
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "On-Ground Implementation",
    description: "Executing education and skilling programs at scale through field teams, partners, and digital tools",
    iconSvg: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill="#E9F1E1"/><g><circle cx="13" cy="13" r="6" fill="#698E45"/><rect x="12" y="22" width="20" height="3" rx="1.5" fill="#698E45"/><rect x="12" y="28" width="10" height="3" rx="1.5" fill="#698E45"/></g></svg>`,
    decorationSvg: `<svg width="74" height="74"><rect x="53" y="53" width="19" height="19" rx="5" fill="#698E45"/><rect x="53" y="53" width="13" height="13" rx="4" fill="#E9F1E1"/></svg>`,
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    title: "Government Engagement & Compliance",
    description: "Managing multi-stakeholder governance, reporting, and alignment with national and state mandates",
    iconSvg: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill="#E9F1E1"/><g><rect x="13" y="13" width="20" height="8" rx="4" fill="#698E45"/><rect x="13" y="25" width="10" height="3" rx="1.5" fill="#698E45"/></g></svg>`,
    decorationSvg: `<svg width="74" height="74"><rect x="13" y="61" width="24" height="10" rx="4" fill="#698E45"/><rect x="55" y="61" width="12" height="10" rx="3" fill="#E9F1E1"/></svg>`,
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Monitoring, Reporting & Impact Measurement",
    description: "Ensuring transparency and data-driven decision-making through robust tracking systems",
    iconSvg: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill="#E9F1E1"/><g><rect x="13" y="13" width="20" height="8" rx="4" fill="#698E45"/><rect x="13" y="25" width="10" height="3" rx="1.5" fill="#698E45"/></g></svg>`,
    decorationSvg: `<svg width="74" height="74"><rect x="13" y="61" width="24" height="10" rx="4" fill="#698E45"/><rect x="55" y="61" width="12" height="10" rx="3" fill="#E9F1E1"/></svg>`,
    className: "lg:col-start-1 lg:row-start-2 mt-10",
  },
  {
    title: "Technology & System Integration",
    description: "Developing and integrating digital platforms to support seamless program execution and reporting",
    iconSvg: `<svg width="46" height="46" viewBox="0 0 46 46" fill="none"><circle cx="23" cy="23" r="23" fill="#E9F1E1"/><g><rect x="13" y="13" width="20" height="8" rx="4" fill="#698E45"/><rect x="13" y="25" width="10" height="3" rx="1.5" fill="#698E45"/></g></svg>`,
    decorationSvg: `<svg width="74" height="74"><circle cx="61" cy="61" r="13" fill="#698E45"/><circle cx="37" cy="37" r="13" fill="#698E45"/></svg>`,
    className: "lg:col-start-2 lg:row-start-2 mt-10",
  },
];

const accentSvg = `<svg width="43" height="30"><path d="M39.1289 17.6464L29.0715 25.1544L26.0559 12.0815L15.3022 20.1117L12.2866 7.03308L1.67326 15.1195" stroke="#19223F" stroke-width="5.52222"/><path d="M40.6738 15.3947L30.6164 22.9027L27.6009 9.82974L16.8471 17.86L13.8315 4.78699L3.21818 12.8677" stroke="#698E45" stroke-width="5.52222"/></svg>`;

const ServicesSection: React.FC = () => (
  <section className="w-full min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-white gap-10" style={{backgroundImage:"url('/pattern-grid-bg.png')",backgroundSize:"contain"}}>
    <div className="max-w-[990px] mx-auto flex flex-col items-center mb-8">
      <h2 className="text-[#252525] text-center font-semibold leading-[1.1]">
        <span className="block text-[40px] md:text-[44px]">Our</span>
        <span className="relative inline-block text-[40px] md:text-[44px] font-extrabold text-[#197B55] ml-2 align-middle">Services
          <span className="absolute -right-8 -top-3 hidden md:block" dangerouslySetInnerHTML={{ __html: `<svg width="34" height="20"><path d="M1.5 18L10.5 2L17.5 18L24.5 2L32.5 18" stroke="#197B55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>` }} />
        </span>
      </h2>
      <div className="mt-2" dangerouslySetInnerHTML={{ __html: accentSvg }} />
      <p className="mt-1 text-center text-[#6D6D6D] text-[14px] md:text-sm font-medium leading-relaxed w-full max-w-xl">
        End-to-end program solutions that turn policy into measurable impact through strategy, execution, and technology
      </p>
    </div>
    <div className="mx-auto w-full flex justify-center">
      <div className="
        grid
        lg:grid-cols-3
        lg:grid-rows-2
        gap-x-[40px]
        gap-y-[40px]
        relative
        justify-center
      ">
        {/* Place cards with correct grid stagger */}
        <ServiceCard {...services[0]} />
        <ServiceCard {...services[1]} />
        <ServiceCard {...services[2]} />
        <div className="lg:col-start-1 lg:row-start-2">
          <ServiceCard {...services[3]} />
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <ServiceCard {...services[4]} />
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
