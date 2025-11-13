import React from 'react';

const flagshipSectionIcon = `<svg width="34" height="20" viewBox="0 0 34 20" fill="none"><path d="M1.5 18L10.5 2L17.5 18L24.5 2L32.5 18" stroke="#197B55" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

const ProjectCard = ({
  title,
  description,
  logoSrc,
  logoAlt = "",
  logoWidth = "99px",
  logoHeight = "99px",
  secondLogoSrc,
  secondLogoAlt = "",
  secondLogoWidth = "97px",
  secondLogoHeight = "85px"
}) => (
  <div className="relative flex-shrink-0 w-[525px] max-w-full">
    {/* Green accent background */}
    <div className="absolute -top-10 left-0 w-full h-[60px] bg-[#7DA55E] rounded-[28px] z-0 max-sm:h-[42px]" />
    <article className="relative z-[1] bg-white rounded-[28px] shadow-lg px-10 pt-10 pb-8 min-h-[410px] flex flex-col justify-between max-sm:px-4 max-sm:pb-4 max-sm:rounded-2xl">
      <div className="flex items-start justify-between mb-3">
        {/* Rocket icon */}
        <div className="w-[66px] h-[66px] flex items-center justify-center bg-[#698E45] rounded-full max-sm:w-12 max-sm:h-12">
          <svg width="40" height="40" viewBox="0 0 39 39" fill="none"><g><path d="M26.278 13.71C25.763 10.073 22.934 7.243 19.297 6.728M13.183 31.735 7.162 25.767m22.563-5.231-15.428 8.524a2.215 2.215 0 0 1-2.994-.836l-.715-1.235a2.217 2.217 0 0 1 .836-2.995l15.428-8.523m3.202-3.446a4.105 4.105 0 1 1-5.717-5.717 4.105 4.105 0 0 1 5.717 5.717Z" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.027 25.268c.672.672 1.763.672 2.435 0 .672-.672.672-1.763 0-2.435-.672-.672-1.763-.672-2.435 0-.672.672-.672 1.763 0 2.435Z" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>
        </div>
        {/* Logos to the top right */}
        <div className="flex items-center space-x-4 max-sm:space-x-2">
          {logoSrc &&
            <img src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} className="max-h-[55px] max-w-[128px] object-contain" />
          }
          {secondLogoSrc &&
            <img src={secondLogoSrc} alt={secondLogoAlt} width={secondLogoWidth} height={secondLogoHeight} className="max-h-[55px] max-w-[128px] object-contain" />
          }
        </div>
      </div>
      <h3 className="text-[24px] text-[#7DA55E] font-bold mb-2 leading-tight max-sm:text-[20px]">{title}</h3>
      <div className="w-full h-[1.5px] bg-[#C7D8C6] rounded-full my-2" />
      {/* Render description as JSX (ul/li) */}
      <div className="text-[18px] text-[#232323] font-medium leading-relaxed">
        {Array.isArray(description) ? (
          <ul className="list-disc pl-5 space-y-2">{description.map((d, i) => <li key={i}>{d}</li>)}</ul>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {description.split('. ').map((d, i) =>
              d.trim() && <li key={i}>{d.replace(/\.$/, '')}</li>
            )}
          </ul>
        )}
      </div>
    </article>
  </div>
);

const FlagshipInitiativesSection = () => (
  <section id="projects" className="relative bg-[#F8FCFF] py-12  px-0 max-sm:pt-8 max-sm:pb-[60px]">
    {/* Heading */}
    
    {/* Cards */}
    <div className="flex gap-20 justify-center m-0 px-[34px] max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-5">
      <ProjectCard
        title="Jharkhand Smart Schools Project"
        description={[
          "Partnered With The Jharkhand Government To Digitally Transform 700+ Government And Tribal Schools Into Engaging Learning Environments.",
          "Focus Areas Include ICT Infrastructure, Teacher Training, And Long-Term Support."
        ]}
        logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/84437c6264d3a8aff65cf62e3ef1bd8e194abfd0?width=198"
        logoAlt="Jharkhand Smart Schools Project Logo"
      />
      <ProjectCard
        title="PM Vishwakarma Yojana (MSME)"
        description={[
          "Supporting India's Traditional Artisans And Craftspeople Through The Mason Trade Program, Empowering Over 300,000 Masons With Toolkits, Training, And Digital Learning.",
          "Delivered Skilling Content Via WhatsApp Chatbot, Enabling Digital Inclusion And Scalable, Low-Cost Capacity Building."
        ]}
        logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/74ec791a3d8893f33bcef0ae880d76a5e29c239e?width=406"
        logoAlt="PM Vishwakarma Yojana Logo"
        secondLogoSrc="https://api.builder.io/api/v1/image/assets/TEMP/7b6efd1737e436a90a6a65cb3ebc313a54c3aa92?width=194"
        secondLogoAlt="MSME Logo"
      />
    </div>
  </section>
);

export default FlagshipInitiativesSection;
