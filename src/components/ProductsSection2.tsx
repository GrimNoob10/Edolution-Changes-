import React from "react";
import ProductCard2 from "./ProductCard2";

const ProductsSection: React.FC = () => {
  const products = [
    {
      title: "Skill Certification Platform",
      description:
        "Comprehensive digital system enabling credentialing, tracking, and validation of skills across trades and industries — aligned with national standards and sectoral frameworks",
      iconSvg:
        '<svg id="161:863" layer-name="Our Offerings​ Icon 1" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-icon" style="margin: 0; padding: 0; box-sizing: border-box; width: 64px; height: 64px"> <path d="M51.2422 5.81818H11.3036C8.279 5.81818 5.81836 8.33 5.81836 11.4174V42.4009C5.81836 45.4883 8.279 48 11.3036 48H34.7862V41.5854C34.7862 36.3694 38.9434 32.126 44.0532 32.126C49.163 32.126 53.3201 36.3695 53.3201 41.5854V47.5814C55.3171 46.7438 56.7275 44.7377 56.7275 42.4009V11.4174C56.7275 8.33 54.2667 5.81818 51.2422 5.81818ZM20.0901 12.4492H42.4557C43.2793 12.4492 43.9472 13.1309 43.9472 13.9717C43.9472 14.8125 43.2793 15.4941 42.4557 15.4941H20.0901C19.2665 15.4941 18.5986 14.8125 18.5986 13.9717C18.5986 13.1309 19.2665 12.4492 20.0901 12.4492ZM29.8874 39.8465H13.6999C12.8763 39.8465 12.2084 39.1649 12.2084 38.3241C12.2084 37.4833 12.8763 36.8016 13.6999 36.8016H29.8875C30.7113 36.8016 31.379 37.4833 31.379 38.3241C31.379 39.1649 30.7113 39.8465 29.8874 39.8465ZM48.8457 28.5398H13.6999C12.8763 28.5398 12.2084 27.8582 12.2084 27.0174C12.2084 26.1766 12.8763 25.4949 13.6999 25.4949H48.8458C49.6696 25.4949 50.3373 26.1766 50.3373 27.0174C50.3372 27.8582 49.6696 28.5398 48.8457 28.5398ZM48.8457 22.017H13.6999C12.8763 22.017 12.2084 21.3353 12.2084 20.4945C12.2084 19.6537 12.8763 18.9721 13.6999 18.9721H48.8458C49.6696 18.9721 50.3373 19.6537 50.3373 20.4945C50.3372 21.3353 49.6696 22.017 48.8457 22.017Z" fill="white"></path> <path d="M44.3638 34.9091C40.7546 34.9091 37.8184 37.6855 37.8184 41.098C37.8184 44.5106 40.7547 47.2869 44.3638 47.2869C47.9731 47.2869 50.9093 44.5106 50.9093 41.098C50.9093 37.6855 47.9731 34.9091 44.3638 34.9091ZM37.8184 47.7994V55.2583C37.8183 55.5242 37.8946 55.7851 38.0391 56.0132C38.1836 56.2413 38.3908 56.428 38.6388 56.5535C38.8867 56.6789 39.166 56.7384 39.4469 56.7255C39.7277 56.7127 39.9996 56.6279 40.2336 56.4804L44.3638 53.8769L48.494 56.4804C48.7492 56.6414 49.0492 56.7272 49.3559 56.7272C49.5599 56.7272 49.7619 56.6892 49.9504 56.6154C50.1389 56.5415 50.3101 56.4333 50.4544 56.2969C50.5986 56.1605 50.713 55.9986 50.7911 55.8204C50.8691 55.6422 50.9093 55.4512 50.9093 55.2583V47.7994C49.1876 49.3038 46.8875 50.2248 44.3638 50.2248C41.8401 50.2248 39.54 49.3038 37.8184 47.7994Z" fill="white"></path> </svg>',
      backgroundColor: "bg-[#064789]",
      titleColor: "text-[#064789]",
      buttonColor: "bg-[#064789]",
    },
    {
      title: "AI-Powered Learning Platform",
      description:
        "Multilingual, device-agnostic platform designed for foundational learning, teacher capacity building, and vocational training — adaptable for diverse learners and low-connectivity environments",
      iconSvg:
        '<svg id="161:868" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-icon" style="margin: 0; padding: 0; box-sizing: border-box; width: 64px; height: 64px"> <path d="M60 45V20C60 18.4087 59.3679 16.8826 58.2426 15.7574C57.1174 14.6321 55.5913 14 54 14C53.4696 14 52.9609 14.2107 52.5858 14.5858C52.2107 14.9609 52 15.4696 52 16C52 16.5304 52.2107 17.0391 52.5858 17.4142C52.9609 17.7893 53.4696 18 54 18C54.5304 18 55.0391 18.2107 55.4142 18.5858C55.7893 18.9609 56 19.4696 56 20V45H43C42.4696 45 41.9609 45.2107 41.5858 45.5858C41.2107 45.9609 41 46.4696 41 47V48H23V47C23.0002 46.7361 22.9482 46.4747 22.8469 46.231C22.7457 45.9873 22.5972 45.7661 22.41 45.58C22.035 45.2081 21.5281 44.9996 21 45H8V20C8 19.4696 8.21071 18.9609 8.58579 18.5858C8.96086 18.2107 9.46957 18 10 18H18V20H16C15.4696 20 14.9609 20.2107 14.5858 20.5858C14.2107 20.9609 14 21.4696 14 22C14 22.5304 14.2107 23.0391 14.5858 23.4142C14.9609 23.7893 15.4696 24 16 24H18V26H16C15.4696 26 14.9609 26.2107 14.5858 26.5858C14.2107 26.9609 14 27.4696 14 28C14 28.5304 14.2107 29.0391 14.5858 29.4142C14.9609 29.7893 15.4696 30 16 30H18.08C18.2971 31.4929 18.9906 32.8758 20.0574 33.9426C21.1242 35.0094 22.5071 35.7029 24 35.92V38C24 38.5304 24.2107 39.0391 24.5858 39.4142C24.9609 39.7893 25.4696 40 26 40C26.5304 40 27.0391 39.7893 27.4142 39.4142C27.7893 39.0391 28 38.5304 28 38V36H30V38C30 38.5304 30.2107 39.0391 30.5858 39.4142C30.9609 39.7893 31.4696 40 32 40C32.5304 40 33.0391 39.7893 33.4142 39.4142C33.7893 39.0391 34 38.5304 34 38V36H36V38C36 38.5304 36.2107 39.0391 36.5858 39.4142C36.9609 39.7893 37.4696 40 38 40C38.5304 40 39.0391 39.7893 39.4142 39.4142C39.7893 39.0391 40 38.5304 40 38V35.92C41.4929 35.7029 42.8758 35.0094 43.9426 33.9426C45.0094 32.8758 45.7029 31.4929 45.92 30H48C48.5304 30 49.0391 29.7893 49.4142 29.4142C49.7893 29.0391 50 28.5304 50 28C50 27.4696 49.7893 26.9609 49.4142 26.5858C49.0391 26.2107 48.5304 26 48 26H46V24H48C48.5304 24 49.0391 23.7893 49.4142 23.4142C49.7893 23.0391 50 22.5304 50 22C50 21.4696 49.7893 20.9609 49.4142 20.5858C49.0391 20.2107 48.5304 20 48 20H46V18H48C48.5304 18 49.0391 17.7893 49.4142 17.4142C49.7893 17.0391 50 16.5304 50 16C50 15.4696 49.7893 14.9609 49.4142 14.5858C49.0391 14.2107 48.5304 14 48 14H45.92C45.7029 12.5071 45.0094 11.1242 43.9426 10.0574C42.8758 8.99065 41.4929 8.29706 40 8.08V6C40 5.46957 39.7893 4.96086 39.4142 4.58579C39.0391 4.21071 38.5304 4 38 4C37.4696 4 36.9609 4.21071 36.5858 4.58579C36.2107 4.96086 36 5.46957 36 6V8H34V6C34 5.46957 33.7893 4.96086 33.4142 4.58579C33.0391 4.21071 32.5304 4 32 4C31.4696 4 30.9609 4.21071 30.5858 4.58579C30.2107 4.96086 30 5.46957 30 6V8H28V6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4C25.4696 4 24.9609 4.21071 24.5858 4.58579C24.2107 4.96086 24 5.46957 24 6V8.08C22.5071 8.29706 21.1242 8.99065 20.0574 10.0574C18.9906 11.1242 18.2971 12.5071 18.08 14H10C8.4087 14 6.88258 14.6321 5.75736 15.7574C4.63214 16.8826 4 18.4087 4 20V45C3.1935 45.031 2.43041 45.3734 1.871 45.9552C1.31159 46.537 0.999404 47.3129 1 48.12V51C1 52.5913 1.63214 54.1174 2.75736 55.2426C3.88258 56.3679 5.4087 57 7 57H57.14C58.6934 56.9974 60.1823 56.3791 61.2807 55.2807C62.3791 54.1823 62.9974 52.6934 63 51.14V48.07C63.0093 47.6702 62.9386 47.2725 62.792 46.9004C62.6455 46.5283 62.426 46.1893 62.1465 45.9033C61.8669 45.6172 61.5331 45.39 61.1645 45.2349C60.7958 45.0797 60.3999 44.9999 60 45Z" fill="white"></path> </svg>',
      backgroundColor: "bg-[#197B55]",
      titleColor: "text-[#197B55]",
      buttonColor: "bg-[#197B55]",
    },
    {
      title: "Career Maps",
      description:
        "AI-enabled tool that visualize occupational pathways, identify skill gaps, and provide personalized learning and employment recommendations for learners and professionals",
      iconSvg:
        '<svg id="161:872" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-icon" style="margin: 0; padding: 0; box-sizing: border-box; width: 64px; height: 64px"> <path d="M36.5121 10.5875C33.2246 7.3 28.6621 5.25 23.6371 5.25C18.6121 5.25 14.0496 7.3 10.7496 10.5875C7.44961 13.8875 5.41211 18.4375 5.41211 23.475C5.41211 28.5125 7.44961 33.0625 10.7496 36.3625C14.0496 39.6625 18.5996 41.7 23.6371 41.7C28.6746 41.7 33.2246 39.6625 36.5246 36.3625C39.8246 33.0625 41.8621 28.5125 41.8621 23.475Z" fill="white"></path> </svg>',
      backgroundColor: "bg-[#FAB029]",
      titleColor: "text-[#FAB029]",
      buttonColor: "bg-[#FAB029]",
    },
  ];

  return (
    <section className="w-full bg-[#F8FBFD] py-16 md:py-20">
      {/* Heading + Subtitle */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          {/* Title: Our (black) + Products (green) + accent */}
          <h2
            className="flex items-center justify-center gap-2 text-center text-[44px] leading-[1.1] font-semibold text-[#252525] 
                       md:text-[40px] sm:text-[34px]"
            style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
          >
            <span>Our</span>
            <span className="text-[#197B55] font-bold">Products</span>
            <svg
              className="w-[40px] h-[24px] translate-y-[4px]"
              viewBox="0 0 43 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196"
                stroke="#19223F"
                strokeWidth="5.5"
                strokeMiterlimit="10"
              />
              <path
                d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678"
                stroke="#698E45"
                strokeWidth="5.5"
                strokeMiterlimit="10"
              />
            </svg>
          </h2>

          {/* Subtitle */}
          <p
            className="text-[#6D6D6D] text-center font-medium capitalize 
                       text-[14px] md:text-[15px] max-w-[880px]"
            style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
          >
            Innovative suite of digital products designed to make learning and
            skilling accessible, data-driven, and measurable:
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1250px] mx-auto mt-8 md:mt-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard2
              key={i}
              title={p.title}
              description={p.description}
              iconSvg={p.iconSvg}
              backgroundColor={p.backgroundColor}
              titleColor={p.titleColor}
              buttonColor={p.buttonColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
