import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Index = () => {
  const shieldIcon = (
    <>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"90\" height=\"90\" viewBox=\"0 0 90 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-circle\" style=\"width: 90px; height: 90px; position: absolute; top: 0; left: 0\"> <circle cx=\"45\" cy=\"45\" r=\"45\" fill=\"#197B55\"></circle> </svg>",
          }}
        />
      </div>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"58\" height=\"58\" viewBox=\"0 0 58 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-shield\" style=\"width: 58px; height: 58px; position: absolute; top: 16px; left: 16px\"> <path d=\"M49.6478 10.382H49.5318C42.1078 10.382 34.9158 7.25 29.8698 1.798C29.4058 1.334 28.5358 1.334 28.1298 1.798C23.0838 7.25 15.8918 10.382 8.46779 10.382H8.35179C7.71379 10.382 7.13379 10.904 7.13379 11.6V24.766C7.13379 35.612 12.5278 45.704 21.5178 51.736L28.3038 56.318C28.4778 56.434 28.7098 56.55 28.9998 56.55C29.2898 56.55 29.4638 56.492 29.6958 56.318L36.4818 51.736C40.9103 48.7679 44.5393 44.7545 47.048 40.0506C49.5568 35.3467 50.868 30.0971 50.8658 24.766V11.542C50.8078 10.904 50.2858 10.382 49.6478 10.382ZM37.0885 25.4829L28.6181 34.6794C28.1831 35.1631 27.5539 35.4049 26.9245 35.4049C26.2952 35.4049 25.6659 35.1149 25.2304 34.6794L20.9708 30.0811C20.0997 29.1125 20.1484 27.6608 21.1158 26.7896C22.0844 25.9185 23.5362 25.9672 24.4073 26.9346L26.9727 29.6937L33.7488 22.3857C34.62 21.4171 36.0723 21.3689 37.0403 22.2401C37.9115 23.0631 37.9602 24.5149 37.0885 25.4829Z\" fill=\"white\"></path> </svg>",
          }}
        />
      </div>
    </>
  );

  const circleIcon = (
    <div className="w-[90px] h-[90px] bg-primary rounded-[50%]" />
  );

  const yellowLampIcon = (
    <>
      <div className="absolute w-[38px] h-11 left-[50px] top-0">
        <div className="w-[3px] h-4 absolute bg-black left-[18px] top-0" />
        <div className="w-2 h-2 absolute bg-black rounded-[10px_10px_0_0] left-[15px] top-[15px]" />
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"36\" height=\"15\" viewBox=\"0 0 36 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"lamp-shade\" style=\"width: 38px; height: 14px; position: absolute; left: 1px; top: 24px\"> <path d=\"M12.8479 0H22.2965L34.9122 12.6951C35.5391 13.326 35.0923 14.4 34.2029 14.4H1.00188C0.113646 14.4 -0.333719 13.3284 0.290873 12.6968L12.8479 0Z\" fill=\"#EC9800\"></path> </svg>",
            }}
          />
        </div>
      </div>
    </>
  );

  const greenLampIcon = (
    <>
      <div className="absolute w-[38px] h-11 left-[50px] top-0">
        <div className="w-[3px] h-4 absolute bg-black left-[18px] top-0" />
        <div className="w-2 h-2 absolute bg-black rounded-[10px_10px_0_0] left-[15px] top-[15px]" />
        <div className="w-[38px] h-3.5 absolute bg-brand-green-olive left-px top-6" />
      </div>
    </>
  );

  const blueLampIcon = (
    <>
      <div className="absolute w-[38px] h-11 left-[50px] top-0">
        <div className="w-[3px] h-4 absolute bg-black left-[18px] top-0" />
        <div className="w-2 h-2 absolute bg-black rounded-[10px_10px_0_0] left-[15px] top-[15px]" />
        <div className="w-[38px] h-3.5 absolute bg-brand-blue-medium left-px top-6" />
      </div>
    </>
  );

  const yellowBackgroundPattern = (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<svg width=\"443\" height=\"466\" viewBox=\"0 0 443 466\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"card-background\" style=\"width: 443px; height: 466px; position: absolute; top: 0; left: 0\"> <g clip-path=\"url(#clip0_161_877)\"> <rect width=\"443\" height=\"466\" rx=\"10\" fill=\"#FEF0D7\"></rect> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M-43 122H471V572H-43V122ZM-42.1969 122.804H20.4469V185.482H-42.1969V122.804ZM22.0531 122.804H84.6969V185.482H22.0531V122.804ZM148.947 122.804H86.3031V185.482H148.947V122.804ZM150.553 122.804H213.197V185.482H150.553V122.804ZM277.447 122.804H214.803V185.482H277.447V122.804ZM279.053 122.804H341.697V185.482H279.053V122.804ZM405.947 122.804H343.303V185.482H405.947V122.804ZM407.553 122.804H470.197V185.482H407.553V122.804ZM20.4469 187.089H-42.1969V249.768H20.4469V187.089ZM22.0531 187.089H84.6969V249.768H22.0531V187.089ZM148.947 187.089H86.3031V249.768H148.947V187.089ZM150.553 187.089H213.197V249.768H150.553V187.089ZM277.447 187.089H214.803V249.768H277.447V187.089ZM279.053 187.089H341.697V249.768H279.053V187.089ZM405.947 187.089H343.303V249.768H405.947V187.089ZM407.553 187.089H470.197V249.768H407.553V187.089ZM20.4469 251.375H-42.1969V314.054H20.4469V251.375ZM22.0531 251.375H84.6969V314.054H22.0531V251.375ZM148.947 251.375H86.3031V314.054H148.947V251.375ZM150.553 251.375H213.197V314.054H150.553V251.375ZM277.447 251.375H214.803V314.054H277.447V251.375ZM279.053 251.375H341.697V314.054H279.053V251.375ZM405.947 251.375H343.303V314.054H405.947V251.375ZM407.553 251.375H470.197V314.054H407.553V251.375ZM20.4469 315.661H-42.1969V378.339H20.4469V315.661ZM22.0531 315.661H84.6969V378.339H22.0531V315.661ZM148.947 315.661H86.3031V378.339H148.947V315.661ZM150.553 315.661H213.197V378.339H150.553V315.661ZM277.447 315.661H214.803V378.339H277.447V315.661ZM279.053 315.661H341.697V378.339H279.053V315.661ZM405.947 315.661H343.303V378.339H405.947V315.661ZM407.553 315.661H470.197V378.339H407.553V315.661ZM20.4469 379.946H-42.1969V442.625H20.4469V379.946ZM22.0531 379.946H84.6969V442.625H22.0531V379.946ZM148.947 379.946H86.3031V442.625H148.947V379.946ZM150.553 379.946H213.197V442.625H150.553V379.946ZM277.447 379.946H214.803V442.625H277.447V379.946ZM279.053 379.946H341.697V442.625H279.053V379.946ZM405.947 379.946H343.303V442.625H405.947V379.946ZM407.553 379.946H470.197V442.625H407.553V379.946ZM20.4469 444.232H-42.1969V506.911H20.4469V444.232ZM22.0531 444.232H84.6969V506.911H22.0531V444.232ZM148.947 444.232H86.3031V506.911H148.947V444.232ZM150.553 444.232H213.197V506.911H150.553V444.232ZM277.447 444.232H214.803V506.911H277.447V444.232ZM279.053 444.232H341.697V506.911H279.053V444.232ZM405.947 444.232H343.303V506.911H405.947V444.232ZM407.553 444.232H470.197V506.911H407.553V444.232ZM20.4469 508.518H-42.1969V571.196H20.4469V508.518ZM22.0531 508.518H84.6969V571.196H22.0531V508.518ZM148.947 508.518H86.3031V571.196H148.947V508.518ZM150.553 508.518H213.197V571.196H150.553V508.518ZM277.447 508.518H214.803V571.196H277.447V508.518ZM279.053 508.518H341.697V571.196H279.053V508.518ZM405.947 508.518H343.303V571.196H405.947V508.518ZM407.553 508.518H470.197V571.196H407.553V508.518Z\" fill=\"#FAB029\" fill-opacity=\"0.12\"></path> <path d=\"M206.97 39L237.713 39L291 87H153L206.97 39Z\" fill=\"url(#paint0_linear_161_877)\"></path> <rect x=\"221.094\" y=\"-0.199219\" width=\"2.71429\" height=\"16.2\" fill=\"black\"></rect> <path d=\"M218.383 19.173C218.383 16.9244 220.206 15.1016 222.454 15.1016C224.703 15.1016 226.526 16.9244 226.526 19.173V23.2016H218.383V19.173Z\" fill=\"black\"></path> <path d=\"M218.148 24.1016H227.596L240.212 36.7967C240.839 37.4275 240.392 38.5016 239.503 38.5016H206.302C205.413 38.5016 204.966 37.4299 205.591 36.7984L218.148 24.1016Z\" fill=\"#EC9800\"></path> </g> <defs> <linearGradient id=\"paint0_linear_161_877\" x1=\"222\" y1=\"42.3333\" x2=\"222\" y2=\"87\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#FFC45B\"></stop> <stop offset=\"1\" stop-color=\"#FCFCFC\" stop-opacity=\"0\"></stop> </linearGradient> <clipPath id=\"clip0_161_877\"> <rect width=\"443\" height=\"466\" rx=\"10\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
      }}
    />
  );

  const partners = [
    { title: "Central Ministries", icon: shieldIcon },
    { title: "State Departments", icon: shieldIcon },
    { title: "District Administrations", icon: shieldIcon },
    { title: "Public Sector Bodies", icon: shieldIcon },
    { title: "Government-aligned Collectives", icon: circleIcon }
  ];

  const beneficiaries = [
    {
      title: "Students and teachers",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9dc22059214900c0334626c30352d3145e1ea314?width=898",
      altText: "Students and teachers",
      backgroundColor: "bg-brand-yellow-light",
      textColor: "text-brand-yellow",
      lampIcon: yellowLampIcon,
      backgroundPattern: yellowBackgroundPattern,
      imageStyles: { width: "449px", height: "304px", left: "32px", top: "156px" }
    },
    {
      title: "Job Seekers",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4b4a61255aa1b55e0e87edaf0e0654f163b71aa7?width=426",
      altText: "Job Seekers",
      backgroundColor: "bg-secondary",
      textColor: "text-primary",
      lampIcon: greenLampIcon,
      imageStyles: { width: "213px", height: "310px", left: "30px", top: "156px" },
      extraImage: "https://api.builder.io/api/v1/image/assets/TEMP/33cb9a6e4119544207e88dda45450bf8ac10c36a?width=484"
    },
    {
      title: "Vocational Learners",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5f3390f43b825ccb21ce0c125599fbbd5483f44a?width=806",
      altText: "Vocational Learners",
      backgroundColor: "bg-brand-blue-pale",
      textColor: "text-brand-blue-dark",
      lampIcon: blueLampIcon,
      imageStyles: { width: "403px", height: "403px", left: "20px", top: "63px" }
    },
    {
      title: "Artisanal & Informal Workers",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6990ce7830e909c82690642853ac4046b917de04?width=854",
      altText: "Artisanal & Informal Workers",
      backgroundColor: "bg-accent",
      textColor: "text-primary",
      lampIcon: greenLampIcon,
      imageStyles: { width: "427px", height: "343px", left: "8px", top: "123px" }
    },
    {
      title: "Rural Women",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/49693db4a6cb9ba13abf9062499dd0c8a4a7db3a?width=876",
      altText: "Rural Women",
      backgroundColor: "bg-brand-blue-pale",
      textColor: "text-brand-blue-dark",
      lampIcon: blueLampIcon,
      imageStyles: { width: "438px", height: "321px", left: "3px", top: "145px" }
    },
    {
      title: "Youth",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7c98563d16f81da0c5a4de7b1e5c81d907f7bb17?width=904",
      altText: "Youth",
      backgroundColor: "bg-brand-yellow-light",
      textColor: "text-brand-yellow",
      lampIcon: yellowLampIcon,
      imageStyles: { width: "452px", height: "452px", left: "-7px", top: "44px" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;600;700&family=IBM+Plex+Sans:wght@400&display=swap"
      />
      <Header />
      <main>
      {/* Hero Section */}
      <section className="flex flex-col items-center relative px-[34px] py-20 max-sm:px-5 max-sm:py-10">
        <div className="flex flex-col items-center gap-3.5 w-full max-w-[1368px]">
          <h1 className="text-text-dark text-center text-4xl font-semibold leading-[54px] tracking-[0px] max-md:text-[28px] max-md:leading-[42px] max-sm:text-2xl max-sm:leading-9">
            <span className="text-text-dark">We Collaborate With </span>
            <span className="text-primary font-bold">Governments</span>
            <span className="text-text-dark">, </span>
            <span className="text-primary font-bold">Public Sector Bodies</span>
            <span className="text-text-dark"> And Development Partners From </span>
            <span className="text-primary font-bold">National Ministries</span>
            <span className="text-text-dark"> To </span>
            <span className="text-primary font-bold">Local Communities</span>
            <span className="text-text-dark"> To Deliver Lasting Social Outcomes</span>
          </h1>
        </div>
          <div className="mt-5">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"78:1155\" width=\"1368\" height=\"162\" viewBox=\"0 0 1368 162\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"hero-decoration\" style=\"width: 1368px; height: 162px; margin-top: 20px\"> <path d=\"M1006.46 122.86L996.398 130.368L993.382 117.295L982.628 125.325L979.613 112.246L968.999 120.333\" stroke=\"#19223F\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> <path d=\"M1008 120.608L997.943 128.116L994.927 115.043L984.173 123.073L981.158 110L970.544 118.081\" stroke=\"#698E45\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> <text fill=\"#252525\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Poppins\" font-size=\"36\" font-weight=\"600\" letter-spacing=\"0px\"><tspan x=\"127.143\" y=\"39.6\">We Collaborate With </tspan><tspan x=\"768.111\" y=\"39.6\">, </tspan><tspan x=\"1158.31\" y=\"39.6\"> And </tspan><tspan x=\"4.92188\" y=\"93.6\">Development Partners  From </tspan><tspan x=\"883.547\" y=\"93.6\"> To </tspan><tspan x=\"1302.19\" y=\"93.6\">  To </tspan><tspan x=\"390.99\" y=\"147.6\">Deliver Lasting Social Outcomes</tspan></text> <text fill=\"#197B55\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Poppins\" font-size=\"36\" font-weight=\"bold\" letter-spacing=\"0px\"><tspan x=\"514.143\" y=\"39.6\">Governments</tspan><tspan x=\"785.83\" y=\"39.6\">Public Sector Bodies</tspan><tspan x=\"535.43\" y=\"93.6\">National Ministries</tspan><tspan x=\"944.438\" y=\"93.6\">Local Communities</tspan></text> </svg>",
              }}
            />
          </div>
        </section>

      {/* Partners Section */}
      <section className="relative bg-brand-blue-light px-[34px] py-20 max-sm:px-5 max-sm:py-10">
        <div className="flex gap-[26px] overflow-x-auto justify-center max-w-[1372px] mx-auto my-0 px-11 py-0 max-md:flex-col max-md:items-center max-md:px-5 max-md:py-0">
          {partners.map((partner, index) => (
            <div key={index} className="w-[348px] h-[191px] shrink-0 shadow-[0_6px_18px_0_rgba(0,0,0,0.06)] relative flex flex-col items-center justify-center bg-accent rounded-[10px] border-[0.6px] border-solid border-primary max-md:w-full max-md:max-w-[348px]">
              <div className="w-[90px] h-[90px] relative mb-5">
                {partner.icon}
              </div>
              <div className="w-[304px] h-px bg-primary mb-5" />
              <div className="text-primary text-xl font-bold text-center">
                {partner.title}
              </div>
            </div>
          ))}
        </div>
          <div className="absolute -translate-y-2/4 w-full flex justify-between pointer-events-none px-[34px] py-0 top-2/4">
            <button className="w-10 h-10 flex justify-center items-center backdrop-blur-[2px] cursor-pointer bg-accent p-[3px] rounded-[100px] pointer-events-auto hover:bg-accent/80 transition-colors">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 34px; height: 34px\"> <path d=\"M20.1879 25.5C20.3956 25.4947 20.5972 25.4292 20.7685 25.3116C20.9397 25.1939 21.0732 25.0292 21.1527 24.8372C21.2322 24.6453 21.2543 24.4344 21.2164 24.2301C21.1785 24.0258 21.0821 23.8369 20.939 23.6863L14.2527 17L20.939 10.3137C21.1326 10.1133 21.2397 9.84491 21.2373 9.56633C21.2348 9.28775 21.1231 9.02126 20.9261 8.82426C20.7291 8.62726 20.4626 8.51552 20.184 8.5131C19.9055 8.51068 19.6371 8.61777 19.4367 8.81132L11.9992 16.2488C11.8 16.4481 11.6881 16.7183 11.6881 17C11.6881 17.2817 11.8 17.5519 11.9992 17.7512L19.4367 25.1887C19.6359 25.388 19.9061 25.4999 20.1879 25.5Z\" fill=\"white\"></path> </svg>",
                  }}
                />
              </div>
            </button>
            <button className="w-10 h-10 flex justify-center items-center backdrop-blur-[2px] cursor-pointer bg-accent p-[3px] rounded-[100px] pointer-events-auto hover:bg-accent/80 transition-colors">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 34px; height: 34px\"> <path d=\"M13.8121 25.5C13.6044 25.4947 13.4028 25.4292 13.2315 25.3116C13.0603 25.1939 12.9268 25.0292 12.8473 24.8372C12.7678 24.6453 12.7457 24.4344 12.7836 24.2301C12.8215 24.0258 12.9179 23.8369 13.061 23.6863L19.7473 17L13.061 10.3137C12.8674 10.1133 12.7603 9.84491 12.7627 9.56633C12.7652 9.28775 12.8769 9.02126 13.0739 8.82426C13.2709 8.62726 13.5374 8.51552 13.816 8.5131C14.0945 8.51068 14.3629 8.61777 14.5633 8.81132L22.0008 16.2488C22.2 16.4481 22.3119 16.7183 22.3119 17C22.3119 17.2817 22.2 17.5519 22.0008 17.7512L14.5633 25.1887C14.3641 25.388 14.0939 25.4999 13.8121 25.5Z\" fill=\"white\"></path> </svg>",
                  }}
                />
              </div>
            </button>
          </div>
        </section>

        {/* Beneficiaries Section */}
        <section className="bg-white px-[34px] py-20 max-sm:px-5 max-sm:py-10">
          <h2 className="text-center text-[40px] font-bold mb-[60px] max-sm:text-[32px] max-sm:mb-10">
            <span className="text-text-dark font-semibold">Our </span>
            <span className="text-primary font-bold">Beneficiaries</span>
          </h2>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-5 max-w-[1372px] mx-auto my-0 max-md:grid-cols-[repeat(2,1fr)] max-md:gap-[15px] max-sm:grid-cols-[1fr] max-sm:gap-5">
            {beneficiaries.map((beneficiary, index) => (
              <div key={index} className={`w-[443px] h-[466px] relative overflow-hidden ${beneficiary.backgroundColor} rounded-[10px] max-md:w-full max-md:max-w-[400px] max-md:h-[400px] max-sm:h-[350px]`}>
                {beneficiary.backgroundPattern}
                {beneficiary.lampIcon && (
                  <div className="absolute -translate-x-2/4 w-[138px] h-[87px] left-2/4 top-0">
                    {beneficiary.lampIcon}
                  </div>
                )}
                <img
                  src={beneficiary.image}
                  alt={beneficiary.altText}
                  className="absolute object-cover"
                  style={beneficiary.imageStyles}
                />
                {beneficiary.extraImage && (
                  <img
                    src={beneficiary.extraImage}
                    alt={beneficiary.altText}
                    className="w-[242px] h-[327px] absolute object-cover left-[199px] top-[141px]"
                  />
                )}
                <div className={`absolute -translate-x-2/4 text-[28px] font-bold text-center whitespace-nowrap ${beneficiary.textColor} left-2/4 bottom-[60px] max-sm:text-2xl max-sm:bottom-10`}>
                  {beneficiary.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="text-center bg-white px-[34px] py-20 max-sm:px-5 max-sm:py-10">
          <div className="mb-10">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg width=\"604\" height=\"85\" viewBox=\"0 0 604 85\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"philosophy-decoration\" style=\"width: 604px; height: 85px; margin: 0 auto\"> <text fill=\"#252525\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Poppins\" font-size=\"40\" font-weight=\"600\" letter-spacing=\"0px\"><tspan x=\"10.2305\" y=\"58.787\">Our </tspan></text> <text fill=\"#197B55\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Poppins\" font-size=\"40\" font-weight=\"bold\" letter-spacing=\"0px\"><tspan x=\"93.7852\" y=\"58.787\">Partnership Philosophy </tspan></text> <path d=\"M600.456 17.6464L590.399 25.1544L587.383 12.0815L576.629 20.1117L573.614 7.03308L563 15.1195\" stroke=\"#19223F\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> <path d=\"M602.001 15.3947L591.944 22.9027L588.928 9.82974L578.174 17.86L575.159 4.78699L564.545 12.8677\" stroke=\"#698E45\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> </svg>",
                }}
              />
            </div>
          </div>
          <p className="w-full max-w-[1372px] text-text-dark text-center text-xl font-normal leading-[30px] mx-auto my-0 max-sm:text-lg max-sm:leading-[27px]">
            We believe in shared purpose and collective strength. Edolution works alongside trusted partners who bring complementary expertise to create holistic, sustainable programs. Together, we co-design and implement projects recognised by national institutions, state governments, and CSR partners for their impact and scale
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
