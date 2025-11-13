import React from "react";

const HeroSection: React.FC = () => {
  const card =
    "rounded-[20px] shadow-[0_6px_18px_rgba(0,0,0,0.12)] object-cover";

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: "center",
        }}
      />

      {/* Content wrapper */}
      <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28">
        {/* Headline */}
        <h1
          className="text-center font-semibold leading-snug md:leading-tight text-[#252525] mx-auto max-w-[1100px]"
          style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
        >
          <span className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-semibold">
            We Bridge{" "}
            <span className="text-[#197B55] font-bold">Learning</span> And{" "}
            <span className="text-[#197B55] font-bold">Livelihoods</span> Through{" "}
            <span className="text-[#197B55] font-bold">
              Integrated Products And Services
            </span>{" "}
            That Address Every Layer Of The{" "}
            <span className="text-[#197B55] font-bold">Education</span> And{" "}
            <span className="relative inline-flex items-center gap-2">
              <span className="text-[#197B55] font-bold">Skilling</span>
              {/* Zig-zag accent */}
             
            </span>{" "}
            Value Chain
             <svg
                className="w-10 h-10 md:w-7 md:h-7 mb-6 inline-block"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 18L9 12L11 20L17 14L19 22L25 16"
                  stroke="#19223F"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
                <path
                  d="M4 17L10 11L12 19L18 13L20 21L26 15"
                  stroke="#698E45"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                />
              </svg>
          </span>
        </h1>

        {/* Spacing between text & images */}
        <div className="mt-16 md:mt-20"></div>

        {/* Collage Section */}
        <div className="relative">
          {/* Desktop Absolute Layout */}
          <div className="hidden md:block relative h-[700px]">
            {/* Center main image */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ad17d766e47a3d2ea8ecb887d040a57f1afe6a8c?width=672"
              alt="Workshop training"
              className={`${card} absolute w-[420px] h-[560px] left-1/2 -translate-x-1/2 top-[70px]`}
            />

            {/* Right column */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ea333cb663a3c6f92a4d39c5cb952b58569db719?width=406"
              alt="Skills development program"
              className={`${card} absolute w-[260px] h-[340px] right-[90px] top-[70px]`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9756d24e7926f48b370fe25addb6cfbba24b5ccd?width=406"
              alt="Digital learning platform"
              className={`${card} absolute w-[260px] h-[200px] right-[90px] bottom-[20px]`}
            />

            {/* Far right */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/887283382460caeb0268abc257b32af679a0ad84?width=406"
              alt="Technology integration"
              className={`${card} absolute w-[260px] h-[260px] right-0 top-[180px]`}
            />

            {/* Left column */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/99e524b36b5aff160378b5fd676eb8eb963a33b4?width=406"
              alt="Computer classroom"
              className={`${card} absolute w-[260px] h-[200px] left-[90px] top-[70px]`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eb877cdd4f47fc7226f3b881ce00d0c4381078fb?width=406"
              alt="Professional training session"
              className={`${card} absolute w-[260px] h-[340px] left-[90px] bottom-[20px]`}
            />

            {/* Far left */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2bd3fc46d8bfe0cb8144f24425ddc1f189787c8d?width=406"
              alt="Community learning"
              className={`${card} absolute w-[260px] h-[260px] left-0 top-[180px]`}
            />
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden grid grid-cols-2 gap-4 mt-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/99e524b36b5aff160378b5fd676eb8eb963a33b4?width=406"
              alt="Computer classroom"
              className={`${card} w-full h-40`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ea333cb663a3c6f92a4d39c5cb952b58569db719?width=406"
              alt="Skills development"
              className={`${card} w-full h-52`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2bd3fc46d8bfe0cb8144f24425ddc1f189787c8d?width=406"
              alt="Community learning"
              className={`${card} w-full h-44`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ad17d766e47a3d2ea8ecb887d040a57f1afe6a8c?width=672"
              alt="Workshop training"
              className={`${card} col-span-2 w-full h-[340px]`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/eb877cdd4f47fc7226f3b881ce00d0c4381078fb?width=406"
              alt="Professional training"
              className={`${card} w-full h-52`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/887283382460caeb0268abc257b32af679a0ad84?width=406"
              alt="Technology integration"
              className={`${card} w-full h-44`}
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9756d24e7926f48b370fe25addb6cfbba24b5ccd?width=406"
              alt="Digital learning"
              className={`${card} col-span-2 w-full h-40`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
