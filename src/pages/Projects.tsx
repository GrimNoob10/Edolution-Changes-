import React from 'react';
import { Header } from '@/components/Header';
import Hero3 from '@/components/Hero3';
import ProjectCard from '@/components/ProjectCard3';
import ApproachCard from '@/components/ApproachCard3';
import { Footer } from '@/components/Footer';

const flagshipSectionIcon = `
<svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 39px; height: 20px;">
  <path d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196" stroke="#19223F" stroke-width="5.52222" stroke-miterlimit="10"></path>
  <path d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678" stroke="#698E45" stroke-width="5.52222" stroke-miterlimit="10"></path>
</svg>`;

const approachSectionIcon = `
<svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 39px; height: 20px;">
  <path d="M39.1289 17.6464L29.0715 25.1544L26.0559 12.0815L15.3022 20.1117L12.2866 7.03308L1.67326 15.1195" stroke="#19223F" stroke-width="5.52222" stroke-miterlimit="10"></path>
  <path d="M40.6738 15.3947L30.6164 22.9027L27.6009 9.82974L16.8471 17.86L13.8315 4.78699L3.21818 12.8677" stroke="#698E45" stroke-width="5.52222" stroke-miterlimit="10"></path>
</svg>`;

const collaborativeDesignIcon = `
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 38px; height: 38px">
  <path d="M37.6738 25.4416L34.0734 21.8408L26.6251 29.2891C25.2955 30.6186 23.6268 31.4855 21.8142 31.8099L26.5598 36.5555C26.9945 36.9905 27.6996 36.9905 28.1341 36.5555L37.6738 27.0161C38.1087 26.5812 38.1087 25.8761 37.6738 25.4416ZM32.6067 20.1587C33.8617 18.904 33.862 16.862 32.6084 15.6064L32.6041 15.6021C32.2995 15.2968 31.9365 15.0558 31.5369 14.8935C31.879 14.0282 31.9512 12.5646 30.8179 11.4311C30.815 11.4281 30.8121 11.4249 30.8089 11.422C30.5055 11.1198 30.1449 10.8811 29.7481 10.7199C30.0902 9.85506 30.1626 8.39124 29.03 7.25829L29.0279 7.25628C28.7175 6.94575 28.3548 6.70632 27.9596 6.54653C28.3018 5.68114 28.3739 4.21732 27.2406 3.08378C27.2403 3.08378 27.2403 3.08348 27.24 3.08348L27.2392 3.08259C25.9835 1.82696 23.9407 1.82696 22.6851 3.08259L20.5743 5.19323L21.6536 6.27259C23.4522 8.07121 23.4522 10.9977 21.6539 12.7963C21.0486 13.4013 20.3049 13.8171 19.4943 14.0151C19.2945 14.8315 18.8741 15.5773 18.279 16.1709C17.6745 16.7754 16.932 17.1908 16.1223 17.3891C15.9243 18.1986 15.5085 18.9414 14.9044 19.5456C14.2999 20.15 13.5574 20.5655 12.7476 20.7638C12.5496 21.5732 12.1339 22.316 11.5297 22.9205C10.6585 23.7914 9.5 24.2715 8.26782 24.2715C7.03572 24.2715 5.87723 23.7916 5.00598 22.9202L3.92662 21.8408L0.326191 25.4416C-0.10873 25.8765 -0.10873 26.5812 0.326191 27.0161L9.86553 36.5555C10.3004 36.9905 11.0052 36.9902 11.4402 36.5555L18.2688 29.7271H20.1927C22.0279 29.7271 23.7532 29.0122 25.0508 27.7148L32.6067 20.1587Z" fill="white"></path>
  <path d="M6.58052 21.346C7.51234 22.278 9.02336 22.278 9.95517 21.346C10.8872 20.4142 10.8872 18.9035 9.95517 17.9713C10.8872 18.9035 12.398 18.9035 13.3301 17.9713C14.2619 17.0395 14.2619 15.5285 13.3301 14.5967C14.2619 15.5285 15.773 15.5285 16.7048 14.5967C17.6365 13.6649 17.6365 12.1539 16.7048 11.222C17.6365 12.1539 19.1475 12.1539 20.0794 11.222C21.0115 10.29 21.0115 8.77921 20.0794 7.8471L15.3212 3.08901C14.3894 2.15719 12.8784 2.15719 11.9466 3.08901C11.0148 4.02082 11.0148 5.53184 11.9466 6.46366L12.5427 7.06001C11.6108 6.12789 10.0998 6.12789 9.16801 7.06001C8.23627 7.99182 8.23627 9.50284 9.16801 10.4347L10.3605 11.6271C9.42867 10.6952 7.91765 10.6952 6.98583 11.6271C6.05372 12.5589 6.05372 14.0699 6.98583 15.0017L8.17823 16.1944C7.24619 15.2624 5.73539 15.2624 4.80335 16.1944C3.87154 17.1262 3.87154 18.6369 4.80335 19.5691L6.58052 21.346ZM21.1106 1.50807C21.2742 1.34514 21.4479 1.19264 21.6307 1.05148L20.9796 0.400358C20.8144 0.235156 20.6014 0.126102 20.3708 0.088633C20.1402 0.0511644 19.9036 0.0871796 19.6946 0.19158L16.9468 1.56552L19 3.619L21.1106 1.50807Z" fill="white"></path>
</svg>
`;

const collaborativeDesignBg = `
<svg layer-name="ellipse" width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 74px; height: 74px;">
  <g clip-path="url(#clip0_111104_1247)">
    <path d="M74 12.3333C74 19.1448 68.4782 24.6667 61.6667 24.6667C54.8552 24.6667 49.3333 19.1448 49.3333 12.3333C49.3333 5.52182 54.8552 0 61.6667 0C68.4782 0 74 5.52182 74 12.3333Z" fill="#698E45"></path>
    <path d="M74 37C74 43.8115 68.4782 49.3333 61.6667 49.3333C54.8552 49.3333 49.3333 43.8115 49.3333 37C49.3333 30.1885 54.8552 24.6667 61.6667 24.6667C68.4782 24.6667 74 30.1885 74 37Z" fill="#698E45"></path>
    <path d="M74 61.6667C74 68.4782 68.4782 74 61.6667 74C54.8552 74 49.3333 68.4782 49.3333 61.6667C49.3333 54.8552 54.8552 49.3333 61.6667 49.3333C68.4782 49.3333 74 54.8552 74 61.6667Z" fill="#698E45"></path>
    <path d="M49.3333 12.3333C49.3333 19.1448 43.8115 24.6667 37 24.6667C30.1885 24.6667 24.6667 19.1448 24.6667 12.3333C24.6667 5.52182 30.1885 0 37 0C43.8115 0 49.3333 5.52182 49.3333 12.3333Z" fill="#698E45"></path>
    <path d="M49.3333 37C49.3333 43.8115 43.8115 49.3333 37 49.3333C30.1885 49.3333 24.6667 43.8115 24.6667 37C24.6667 30.1885 30.1885 24.6667 37 24.6667C43.8115 24.6667 49.3333 30.1885 49.3333 37Z" fill="#698E45"></path>
    <path d="M49.3333 61.6667C49.3333 68.4782 43.8115 74 37 74C30.1885 74 24.6667 68.4782 24.6667 61.6667C24.6667 54.8552 30.1885 49.3333 37 49.3333C43.8115 49.3333 49.3333 54.8552 49.3333 61.6667Z" fill="#698E45"></path>
    <path d="M24.6667 12.3333C24.6667 19.1448 19.1448 24.6667 12.3333 24.6667C5.52182 24.6667 0 19.1448 0 12.3333C0 5.52182 5.52182 0 12.3333 0C19.1448 0 24.6667 5.52182 24.6667 12.3333Z" fill="#698E45"></path>
    <path d="M24.6667 37C24.6667 43.8115 19.1448 49.3333 12.3333 49.3333C5.52182 49.3333 0 43.8115 0 37C0 30.1885 5.52182 24.6667 12.3333 24.6667C19.1448 24.6667 24.6667 30.1885 24.6667 37Z" fill="#698E45"></path>
    <path d="M24.6667 61.6667C24.6667 68.4782 19.1448 74 12.3333 74C5.52182 74 0 68.4782 0 61.6667C0 54.8552 5.52182 49.3333 12.3333 49.3333C19.1448 49.3333 24.6667 54.8552 24.6667 61.6667Z" fill="#698E45"></path>
  </g>
  <defs>
    <clipPath id="clip0_111104_1247">
      <rect width="74" height="74" fill="white"></rect>
    </clipPath>
  </defs>
</svg>
`;

const Index = () => (
  <div className="box-border w-full bg-white m-0 p-0">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;600&family:IBM+Plex+Sans:wght@400&display=swap"
    />
    <Header />
    <main>
      <Hero3 />

      {/* Flagship Initiatives Section */}
      <section id="projects" className="box-border relative bg-[#F8FCFF] m-0 pt-[25px] pb-[244px] px-0 max-sm:pt-5 max-sm:pb-[100px] max-sm:px-0">
        <div className="box-border flex items-center justify-center gap-5 mb-20 m-0 p-0">
          <h2 className="box-border text-[#252525] text-[40px] font-semibold m-0 p-0 max-md:text-[32px] max-sm:text-[28px]">
            <span className="box-border text-[#197B55] font-bold m-0 p-0">
              Flagship
            </span>{' '}
            Initiatives
          </h2>
          <div dangerouslySetInnerHTML={{ __html: flagshipSectionIcon }} />
        </div>
        <div className="box-border flex gap-40 justify-center m-0 px-[34px] py-0 max-md:flex-col max-md:gap-10 max-md:items-center max-md:px-5 max-md:py-0">
          <ProjectCard
            title="Jharkhand Smart Schools Project"
            description="Partnered with the Jharkhand Government to digitally transform 700+ government and tribal schools into engaging learning environments. Focus areas include ICT infrastructure, teacher training, and long-term support."
            logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/84437c6264d3a8aff65cf62e3ef1bd8e194abfd0?width=198"
            logoAlt="Jharkhand Smart Schools Project Logo"
          />

          <ProjectCard
            title="PM Vishwakarma Yojana (MSME)"
            description="Supporting India's traditional artisans and craftspeople through the Mason Trade Program, empowering over 300,000 masons with toolkits, training, and digital learning. Delivered skilling content via WhatsApp chatbot, enabling digital inclusion and scalable, low-cost capacity building."
            logoSrc="https://api.builder.io/api/v1/image/assets/TEMP/74ec791a3d8893f33bcef0ae880d76a5e29c239e?width=406"
            logoAlt="PM Vishwakarma Yojana Logo"
            secondLogoSrc="https://api.builder.io/api/v1/image/assets/TEMP/7b6efd1737e436a90a6a65cb3ebc313a54c3aa92?width=194"
            secondLogoAlt="MSME Logo"
          />
        </div>
      </section>

      {/* Approach to Delivery Section */}
      <section id="approach" className="box-border relative m-0 px-0 py-[100px] max-sm:px-0 max-sm:py-[60px]">
       <div className="box-border flex flex-row items-center justify-center gap-5 mb-20 m-0 p-0 max-sm:flex-col max-sm:gap-3 max-sm:mb-10">
  <h2 className="box-border text-[#252525] text-[40px] font-semibold m-0 p-0 max-md:text-[32px] max-sm:text-[20px] text-center">
    Our{' '}
    <span className="box-border text-[#197B55] font-bold m-0 p-0">
      Approach
    </span>{' '}
    to{' '}
    <span className="box-border text-[#197B55] font-bold m-0 p-0">
      Delivery
    </span>
  </h2>
  <div className="max-sm:mt-2 max-sm:flex max-sm:justify-center" dangerouslySetInnerHTML={{ __html: approachSectionIcon }} />
</div>

        <div className="box-border flex gap-10 justify-center m-0 px-[180px] py-0 max-md:flex-col max-md:gap-[30px] max-md:items-center max-md:px-5 max-md:py-0">
          <ApproachCard
            title="Collaborative Design"
            description="Co-created with government and development partners to align with policy priorities"
            iconSvg={collaborativeDesignIcon}
            backgroundPatternSvg={collaborativeDesignBg}
          />
          <ApproachCard
              title="Data-Driven Execution"
              description="Every initiative is backed by real-time monitoring and measurable outcomes"
              iconSvg={"<svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-icon-content\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 38px; height: 38px\"> <path d=\"M4.78167 17.6658C4.68381 17.5681 4.60618 17.4521 4.55321 17.3244C4.50024 17.1967 4.47298 17.0599 4.47298 16.9216C4.47298 16.7834 4.50024 16.6465 4.55321 16.5188C4.60618 16.3911 4.68381 16.2751 4.78167 16.1775L12.7511 8.20801C13.6906 7.26856 15.1367 7.01523 16.34 7.58523L22.6311 10.5408C23.0217 10.7308 23.5072 10.6463 23.8239 10.3297L31.7194 2.43412C32.1311 2.02245 32.8067 2.02245 33.2183 2.43412C33.63 2.84578 33.63 3.51078 33.2183 3.92245L25.3122 11.8286C24.3728 12.768 22.9267 13.0213 21.7233 12.4513L15.4428 9.49578C15.0417 9.30578 14.5561 9.39023 14.2394 9.69634L6.28056 17.6658C6.06944 17.8769 5.80556 17.9719 5.53111 17.9719C5.25667 17.9719 4.99278 17.8769 4.78167 17.6658ZM17.6806 20.6741V33.763C17.6806 34.3229 17.4581 34.8599 17.0622 35.2558C16.6663 35.6517 16.1293 35.8741 15.5694 35.8741H13.4583C12.8984 35.8741 12.3615 35.6517 11.9656 35.2558C11.5696 34.8599 11.3472 34.3229 11.3472 33.763V20.6741C11.3472 19.513 12.2972 18.563 13.4583 18.563H15.5694C16.7306 18.563 17.6806 19.513 17.6806 20.6741ZM35.625 13.2641V33.763C35.625 34.3229 35.4026 34.8599 35.0067 35.2558C34.6108 35.6517 34.0738 35.8741 33.5139 35.8741H31.4028C30.8429 35.8741 30.3059 35.6517 29.91 35.2558C29.5141 34.8599 29.2917 34.3229 29.2917 33.763V13.2641C29.2917 12.103 30.2417 11.153 31.4028 11.153H33.5139C34.675 11.153 35.625 12.103 35.625 13.2641ZM8.70833 30.1108V33.763C8.70833 34.0402 8.65373 34.3148 8.54764 34.5709C8.44154 34.827 8.28604 35.0598 8.09 35.2558C7.89397 35.4518 7.66124 35.6073 7.40511 35.7134C7.14898 35.8195 6.87446 35.8741 6.59722 35.8741H4.48611C3.92621 35.8741 3.38924 35.6517 2.99333 35.2558C2.59742 34.8599 2.375 34.3229 2.375 33.763V30.1108C2.375 28.9497 3.325 27.9997 4.48611 27.9997H6.59722C7.75833 27.9997 8.70833 28.9497 8.70833 30.1108ZM26.6528 24.3475V33.763C26.6528 34.3229 26.4304 34.8599 26.0344 35.2558C25.6385 35.6517 25.1016 35.8741 24.5417 35.8741H22.4306C21.8707 35.8741 21.3337 35.6517 20.9378 35.2558C20.5419 34.8599 20.3194 34.3229 20.3194 33.763V24.3475C20.3194 23.1863 21.2694 22.2363 22.4306 22.2363H24.5417C25.7028 22.2363 26.6528 23.1863 26.6528 24.3475Z\" fill=\"white\"></path> </svg>"}
              backgroundPatternSvg={"<svg layer-name=\"ellipse\" width=\"56\" height=\"32\" viewBox=\"0 0 56 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-bg-pattern\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 74px; height: 74px\"> <path d=\"M73.9803 37.74H0.0195313C0.0796559 40.8059 0.512573 43.7804 1.27481 46.62H72.725C73.4873 43.7804 73.9202 40.8059 73.9803 37.74Z\" fill=\"white\"></path> <path d=\"M72.2943 48.1H1.70558C2.52265 50.7023 3.61939 53.1807 4.96057 55.5H69.0393C70.3805 53.1807 71.4772 50.7023 72.2943 48.1Z\" fill=\"white\"></path> <path d=\"M68.1365 56.98H5.86335C7.23427 59.1134 8.81834 61.0968 10.5854 62.9H63.4144C65.1815 61.0968 66.7656 59.1134 68.1365 56.98Z\" fill=\"white\"></path> <path d=\"M61.8785 64.38H12.1214C14.3264 66.3861 16.7747 68.1292 19.4168 69.56H54.583C57.2251 68.1292 59.6734 66.3861 61.8785 64.38Z\" fill=\"white\"></path> <path d=\"M51.5203 71.04H22.4795C26.9375 72.9453 31.8456 74 36.9999 74C42.1543 74 47.0623 72.9453 51.5203 71.04Z\" fill=\"white\"></path> <path d=\"M73.9803 36.26H0.0195312C0.098217 32.2476 0.815394 28.3918 2.07362 24.79H71.9262C73.1845 28.3918 73.9016 32.2476 73.9803 36.26Z\" fill=\"white\"></path> <path d=\"M71.3732 23.31C65.9326 9.65237 52.5931 0 36.9999 0C21.4067 0 8.06723 9.65237 2.62662 23.31H71.3732Z\" fill=\"white\"></path> </svg>"}
            />
            
            <ApproachCard
              title="Inclusive Implementation"
              description="Ensuring access for learners, workers, and communities across geographies and backgrounds"
              iconSvg={"<svg width=\"38\" height=\"38\" viewBox=\"0 0 38 38\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-icon-content\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 38px; height: 38px\"> <g clip-path=\"url(#clip0_111104_569)\"> <path d=\"M37.6737 29.7272L34.986 27.1136L34.9825 27.0191C34.8578 23.3885 33.5422 19.948 31.246 17.1785V19C31.246 20.8415 29.7477 22.3399 27.9062 22.3399C27.0962 22.3399 26.3351 22.1224 25.6796 21.7417V21.9696C27.6525 23.8034 27.8656 27.452 25.5903 29.7272L23.7476 31.5723C23.0022 32.3171 22.1977 32.9868 21.3506 33.5878C23.1148 34.2903 24.9794 34.7164 26.8981 34.7706L29.7271 37.6738C29.8304 37.7774 29.9531 37.8595 30.0882 37.9155C30.2232 37.9715 30.3681 38.0002 30.5143 38C30.799 38 31.0839 37.8913 31.3014 37.6738L37.6735 31.3015C38.1087 30.8666 38.1087 30.1621 37.6737 29.7273V29.7272Z\" fill=\"white\"></path> <path d=\"M23.5914 28.5783C23.013 28.8743 22.3836 29.0195 21.7832 29.0195C20.6937 29.0195 19.7077 28.5705 19 27.8476C18.2923 28.5705 17.306 29.0195 16.2168 29.0195C14.0685 29.0195 12.3203 27.2713 12.3203 25.1231V24.1904C11.7987 24.4387 11.2281 24.5671 10.6504 24.5664C8.50213 24.5664 6.75391 22.8182 6.75391 20.6699V17.2463C6.75391 17.2222 6.75621 17.1999 6.75621 17.1758C4.45862 19.9457 3.14183 23.3873 3.01714 27.0191L0.326191 29.7272C-0.10873 30.1621 -0.10873 30.8666 0.326191 31.3015L6.69854 37.6739C7.13309 38.1087 7.83787 38.1087 8.27272 37.6739L11.1015 34.7706C15.2839 34.6532 19.2 32.9693 22.1723 29.998L23.5914 28.5783Z\" fill=\"white\"></path> <path d=\"M10.6504 22.3398C11.5726 22.3398 12.3203 21.5922 12.3203 20.6699V16.6517C12.3203 16.0463 12.8109 15.5558 13.4162 15.5558H13.451C14.0564 15.5558 14.5469 16.0464 14.5469 16.6516V25.123C14.5469 26.0453 15.2946 26.793 16.2168 26.793C17.139 26.793 17.8867 26.0453 17.8867 25.123V16.6691C17.8867 15.3218 20.1133 15.3163 20.1133 16.6691V25.123C20.1133 26.0453 20.861 26.793 21.7832 26.793C22.7669 26.793 23.4531 26.194 23.4531 24.5664V14.4425C23.4531 13.0952 25.6797 13.0897 25.6797 14.4425V17.8867C25.6797 19.1162 26.6761 20.113 27.9062 20.1133C28.5217 20.1133 29.0195 19.6153 29.0195 19V16.0863C29.0195 11.9388 27.4615 7.98579 24.6316 4.95239L24.5664 1.11328C24.5664 0.498008 24.0684 0 23.4531 0H14.5469C13.9314 0 13.4336 0.498008 13.4336 1.11328V5.18834C10.0807 8.73406 8.98047 12.7312 8.98047 17.2469V20.6699C8.98047 21.5922 9.72815 22.3398 10.6504 22.3398Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_111104_569\"> <rect width=\"38\" height=\"38\" fill=\"white\"></rect> </clipPath> </defs> </svg>"}
              backgroundPatternSvg={"<svg layer-name=\"rectangle\" width=\"50\" height=\"32\" viewBox=\"0 0 50 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-bg-pattern\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 74px; height: 74px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.5 22.5C55.5 20.2909 53.7091 18.5 51.5 18.5H22.5C20.2909 18.5 18.5 20.2909 18.5 22.5V51.5C18.5 53.7091 20.2909 55.5 22.5 55.5H51.5C53.7091 55.5 55.5 53.7091 55.5 51.5V22.5ZM4 0C1.79086 0 0 1.79086 0 4V70C0 72.2091 1.79086 74 4 74H70C72.2091 74 74 72.2091 74 70V4C74 1.79086 72.2091 0 70 0H4Z\" fill=\"white\"></path> </svg>"}
            />

          {/* Add the other 2 ApproachCard SVG and backgroundSvg the same way */}
          {/* Use your existing SVG code for Data-Driven Execution and Inclusive Implementation */}
          {/* ... */}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Index;
