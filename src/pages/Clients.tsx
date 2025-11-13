import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-[Poppins] text-[#252525]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center text-center px-4 py-16 md:py-20">
        <h1 className="max-w-[1200px] text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug">
          We Collaborate With{" "}
          <span className="text-[#197B55] font-bold">Governments</span>,{" "}
          <span className="text-[#197B55] font-bold">Public Sector Bodies</span>{" "}
          And Development Partners From{" "}
          <span className="text-[#197B55] font-bold">National Ministries</span>{" "}
          To <span className="text-[#197B55] font-bold">Local Communities</span>{" "}
          To Deliver Lasting Social Outcomes
          <svg
            className="inline-block w-[42px] h-[22px] ml-2 align-baseline"
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196"
              stroke="#19223F"
              strokeWidth="5.52222"
              strokeMiterlimit="10"
            />
            <path
              d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678"
              stroke="#698E45"
              strokeWidth="5.52222"
              strokeMiterlimit="10"
            />
          </svg>
        </h1>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-[#E8F5F1] py-16 md:py-20 px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-6 max-w-[1280px] mx-auto">
          {[
            "Central Ministries",
            "State Departments",
            "District Administrations",
            "Public Sector Bodies",
          ].map((title, i) => (
            <div
              key={i}
              className="w-[280px] h-[180px] bg-white rounded-xl border border-[#197B55] flex flex-col justify-center items-center shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative w-[70px] h-[70px] mb-4">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="45" cy="45" r="45" fill="#197B55" />
                </svg>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[12px] left-[12px]"
                >
                  <path
                    d="M49.6478 10.382H49.5318C42.1078 10.382 34.9158 7.25 29.8698 1.798C29.4058 1.334 28.5358 1.334 28.1298 1.798C23.0838 7.25 15.8918 10.382 8.46779 10.382H8.35179C7.71379 10.382 7.13379 10.904 7.13379 11.6V24.766C7.13379 35.612 12.5278 45.704 21.5178 51.736L28.3038 56.318C28.4778 56.434 28.7098 56.55 28.9998 56.55C29.2898 56.55 29.4638 56.492 29.6958 56.318L36.4818 51.736C40.9103 48.7679 44.5393 44.7545 47.048 40.0506C49.5568 35.3467 50.868 30.0971 50.8658 24.766V11.542C50.8078 10.904 50.2858 10.382 49.6478 10.382ZM37.0885 25.4829L28.6181 34.6794C28.1831 35.1631 27.5539 35.4049 26.9245 35.4049C26.2952 35.4049 25.6659 35.1149 25.2304 34.6794L20.9708 30.0811C20.0997 29.1125 20.1484 27.6608 21.1158 26.7896C22.0844 25.9185 23.5362 25.9672 24.4073 26.9346L26.9727 29.6937L33.7488 22.3857C34.62 21.4171 36.0723 21.3689 37.0403 22.2401C37.9115 23.0631 37.9602 24.5149 37.0885 25.4829Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-[1px] w-[80%] bg-[#197B55] mb-3" />
              <h3 className="text-[#197B55] text-lg font-bold text-center">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIARIES SECTION */}
      {/* BENEFICIARIES SECTION */}
<section className="bg-[#F9FCFF] py-20 px-4 md:px-12 text-center">
  <h2 className="text-[40px] md:text-[36px] font-bold mb-14">
    <span className="text-[#252525] font-semibold">Our </span>
    <span className="text-[#197B55] font-bold">Beneficiaries</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
    {[
      {
        title: "Students and Teachers",
        img: "/client/std_teach.png",
        bg: "#FEF0D7",
        color: "#EC9800",
      },
      {
        title: "Job Seekers",
        img: "/client/Jobseekers.png",
        bg: "#E9F1E1",
        color: "#197B55",
      },
      {
        title: "Vocational Learners",
        img: "/client/vocational.png",
        bg: "#E7F1FD",
        color: "#1E75D6",
      },
      {
        title: "Artisanal & Informal Workers",
        img: "/client/workers.png",
        bg: "#E9F1E1",
        color: "#197B55",
      },
      {
        title: "Rural Women",
        img: "/client/women.png",
        bg: "#E7F1FD",
        color: "#1E75D6",
      },
      {
        title: "Youth",
        img: "/client/youth.png",
        bg: "#FEF0D7",
        color: "#EC9800",
      },
    ].map((b, i) => (
      <div
        key={i}
        className="relative rounded-[12px] overflow-hidden h-full shadow-sm flex items-center justify-center"
        style={{ backgroundColor: b.bg }}
      >
        {/* Only the image, no text */}
        <img
          src={b.img}
          alt=""
          className="object-contain w-[92%] md:w-full h-[72%] md:h-full z-10"
        />
      </div>
    ))}
  </div>
</section>


      {/* PARTNERSHIP PHILOSOPHY */}
      <section className="text-center py-20 px-4 md:px-12">
        <h2 className="text-[40px] font-bold mb-6">
          <span className="text-[#252525] font-semibold">Our </span>
          <span className="text-[#197B55] font-bold">
            Partnership Philosophy
          </span>
          <svg
            className="inline-block w-[42px] h-[22px] ml-2 align-baseline"
            viewBox="0 0 43 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196"
              stroke="#19223F"
              strokeWidth="5.52222"
              strokeMiterlimit="10"
            />
            <path
              d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678"
              stroke="#698E45"
              strokeWidth="5.52222"
              strokeMiterlimit="10"
            />
          </svg>
        </h2>

        <p className="max-w-[900px] mx-auto text-lg md:text-xl leading-[30px] text-[#252525] font-normal">
          We believe in shared purpose and collective strength. Edolution works
          alongside trusted partners who bring complementary expertise to create
          holistic, sustainable programs. Together, we co-design and implement
          projects recognised by national institutions, state governments, and
          CSR partners for their impact and scale.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
