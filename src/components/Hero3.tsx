import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="box-border relative mb-[120px] m-0 px-9 py-0 max-md:mb-20 max-md:px-5 max-md:py-0">
      <div className="box-border max-w-[1368px] text-center mx-auto my-0 p-0">
        <h1 className="box-border text-[#252525] text-3xl font-semibold capitalize mb-7 m-0 p-0 max-md:text-2xl max-sm:text-xl">
          At Edolution, every project is an opportunity to turn policy into
          measurable progress. We{' '}
          <span className="box-border text-[#197B55] font-bold m-0 p-0">
            design
          </span>{' '}
          and{' '}
          <span className="box-border text-[#197B55] font-bold m-0 p-0">
            implement large-scale
          </span>{' '}
          education, skilling, and livelihood{' '}
          <span className="box-border text-[#197B55] font-bold m-0 p-0">
            programs
          </span>{' '}
          that strengthen communities, empower individuals, and advance
          national priorities
        </h1>
        <p className="box-border text-[#252525] text-xl font-normal max-w-[1372px] mx-auto my-0 p-0 max-md:text-lg max-sm:text-base">
          Our initiatives bring together technology, governance, and
          on-ground execution — ensuring that impact is both scalable and
          sustainable
        </p>
      </div>
      <div className="absolute top-[-14px] right-[65px] max-md:hidden">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"43\" height=\"30\" viewBox=\"0 0 43 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"hero-icon\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 39px; height: 20px\"> <path d=\"M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1118L12.2866 7.03326L1.67326 15.1196\" stroke=\"#19223F\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> <path d=\"M40.6738 15.3948L30.6164 22.9028L27.6009 9.8298L16.8471 17.86L13.8315 4.78704L3.21818 12.8678\" stroke=\"#698E45\" stroke-width=\"5.52222\" stroke-miterlimit=\"10\"></path> </svg>",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
