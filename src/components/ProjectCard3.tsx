import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: string;
  logoHeight?: string;
  secondLogoSrc?: string;
  secondLogoAlt?: string;
  secondLogoWidth?: string;
  secondLogoHeight?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
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
}) => {
  return (
    <article className="box-border w-[626px] relative m-0 p-0 max-md:w-full max-md:max-w-[500px]">
      <div className="box-border relative z-[2] flex flex-col gap-4 m-0 pt-[75px] pb-0 px-[61px] max-md:pt-10 max-md:pb-0 max-md:px-[30px]">
        <div className="box-border w-[84px] h-[84px] m-0 p-0">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"84\" height=\"84\" viewBox=\"0 0 84 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"project-icon\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 84px; height: 84px; fill: var(--EDO-Light-Green, #698E45)\"> <circle cx=\"42\" cy=\"42\" r=\"42\" fill=\"#698E45\"></circle> </svg>",
            }}
          />
        </div>
        <h3 className="box-border text-[#698E45] text-2xl font-bold m-0 p-0 max-sm:text-xl">
          {title}
        </h3>
        <div className="box-border w-[539px] h-[0.8px] bg-[#698E45] m-0 p-0 max-md:w-full" />
        
        {secondLogoSrc ? (
          <div className="box-border flex items-center gap-[26px] self-end -mr-1 -mt-3.5 m-0 p-0">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="box-border m-0 p-0"
              style={{ width: "203px", height: "60px" }}
            />
            <img
              src={secondLogoSrc}
              alt={secondLogoAlt}
              className="box-border m-0 p-0"
              style={{ width: secondLogoWidth, height: secondLogoHeight }}
            />
          </div>
        ) : logoSrc ? (
          <img
            src={logoSrc}
            alt={logoAlt}
            className="box-border self-end -mr-3.5 -mt-3.5 m-0 p-0"
            style={{ width: logoWidth, height: logoHeight }}
          />
        ) : null}
      </div>
      
      <div className="box-border relative z-[2] text-black text-xl font-normal capitalize w-[550px] mt-[21px] m-0 px-[50px] py-0 max-md:w-full max-md:px-[30px] max-md:py-0 max-sm:text-base">
        {description}
      </div>
      
      <div className="absolute bottom-[100px] left-[115px] z-[2]">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"44\" height=\"44\" viewBox=\"0 0 44 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"card-rocket-icon\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 44px; height: 44px\"> <g clip-path=\"url(#clip0_161_2202)\"> <path d=\"M6.42298 28.1942C6.30155 28.4364 6.25942 28.7106 6.30256 28.9781C6.3457 29.2455 6.47193 29.4926 6.66334 29.6843L6.97856 29.9996C7.88933 28.9203 8.95083 27.749 10.2382 26.462C10.3291 26.371 10.4228 26.3271 10.514 26.2432L8.48616 24.2149C7.30719 26.3472 6.61969 27.8041 6.42298 28.1942ZM17.5301 33.7539C16.2397 35.0444 15.0714 36.1078 13.9983 37.0193L14.4252 37.4462C14.6182 37.6394 14.8676 37.7662 15.1373 37.8085C15.4071 37.8507 15.6833 37.8062 15.9261 37.6813C16.5939 37.3372 17.6438 36.843 19.8729 35.6016L17.7494 33.4781C17.6654 33.5697 17.6213 33.663 17.5301 33.7539ZM16.8429 27.1509C15.9113 26.2193 13.2916 27.0545 12.061 28.2849C7.94398 32.4018 6.08464 35.3206 5.24976 37.0441C5.133 37.285 5.09417 37.5563 5.13868 37.8203C5.18319 38.0842 5.30882 38.3278 5.49812 38.5171C5.6877 38.7066 5.93163 38.8324 6.196 38.8769C6.46037 38.9214 6.73203 38.8825 6.97323 38.7654C8.65804 37.9474 11.5413 36.0967 15.7072 31.9311C17.0604 30.5773 17.7281 28.0364 16.8439 27.1519L16.8429 27.1509ZM4.02343 17.1626L0.377531 20.8087C0.176882 21.0093 0.0480502 21.2706 0.0110225 21.5519C-0.0260051 21.8332 0.0308409 22.1189 0.172742 22.3646C0.457711 22.8635 1.05455 23.1176 1.62251 22.9655C3.59305 22.4371 5.32693 22.2139 6.49448 22.5134C8.15548 19.5602 9.9404 16.8418 11.8307 14.3725C10.7373 13.6715 7.12423 14.0619 4.02343 17.1627V17.1626ZM21.8189 43.8616C22.0609 43.9839 22.3354 44.0266 22.6031 43.9836C22.8708 43.9407 23.1181 43.8142 23.3097 43.6223L26.956 39.9764C29.7789 37.1528 30.2757 33.5099 29.6352 32.3548C26.8812 34.4304 24.0912 36.183 21.4883 37.6503C21.6679 38.6645 21.5484 39.6484 21.1237 42.5219C21.0836 42.79 21.1293 43.0639 21.2542 43.3045C21.379 43.5451 21.5767 43.74 21.8189 43.8616ZM25.592 12.9309C24.0845 14.4389 24.0845 16.8918 25.592 18.3996C27.1001 19.9076 29.5533 19.9076 31.0612 18.3996C32.569 16.8917 32.5691 14.4388 31.0612 12.9309C29.5532 11.4231 27.1001 11.423 25.5921 12.9309H25.592ZM43.924 1.25751C43.8776 0.620025 43.3701 0.116173 42.7346 0.068478C39.5686 -0.169913 36.4152 0.219556 33.3241 1.16487C33.5567 3.28838 34.6552 5.58661 36.5303 7.46177C38.428 9.3591 40.7885 10.4572 42.9501 10.6626C43.7827 7.7451 44.1774 4.6205 43.924 1.25751Z\" fill=\"white\"></path> <path d=\"M34.7077 9.28492C32.5627 7.13984 31.2528 4.56713 30.8325 2.06213C23.0917 5.23684 15.6817 12.1695 9.82617 21.9086L12.7352 24.8178C14.723 24.0108 17.1358 23.7976 18.6663 25.3277C20.1987 26.8605 19.9816 29.2724 19.1749 31.2574L22.1797 34.2622C29.673 29.7461 38.397 22.6311 42.1068 13.1648C39.5407 12.7772 36.8878 11.465 34.7077 9.28492ZM32.8842 20.2228C30.3716 22.7355 26.2825 22.7355 23.7695 20.2228C21.2565 17.7098 21.2565 13.6204 23.7695 11.1077C26.2825 8.5951 30.3716 8.5951 32.8842 11.1077C35.3973 13.6207 35.3973 17.7098 32.8842 20.2228Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_161_2202\"> <rect width=\"44\" height=\"44\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
          }}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
