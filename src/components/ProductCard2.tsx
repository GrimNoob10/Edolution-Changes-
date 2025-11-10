import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  iconSvg: string;
  backgroundColor: string;
  titleColor: string;
  buttonColor: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  iconSvg,
  backgroundColor,
  titleColor,
  buttonColor,
}) => {
  return (
    <article className="box-border w-[443px] h-[430px] relative flex flex-col m-0 p-0 rounded-[14px] max-md:w-full max-md:max-w-[443px] max-sm:h-auto max-sm:pb-20">
      <div className={`box-border w-[84px] h-[84px] shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] absolute flex items-center justify-center ${backgroundColor} m-0 p-0 rounded-[10px] left-6 top-[26px]`}>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: iconSvg,
            }}
          />
        </div>
      </div>
      <div className="box-border flex w-[395px] flex-col items-start gap-3 absolute m-0 p-0 left-6 top-36 max-sm:w-[calc(100%_-_48px)] max-sm:static max-sm:mt-[130px] max-sm:mb-6 max-sm:mx-6">
        <h3 className={`box-border self-stretch text-[22px] font-semibold ${titleColor} m-0 p-0`}>
          {title}
        </h3>
        <div className={`box-border w-[395px] h-[1.4px] ${titleColor.replace('text-', 'bg-')} m-0 p-0`} />
        <p className="box-border text-black text-base font-normal m-0 p-0">
          {description}
        </p>
      </div>
      <button className={`box-border flex w-[395px] justify-center items-center gap-3.5 shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] absolute h-12 cursor-pointer ${buttonColor} m-0 px-[34px] py-3 rounded-[50px] left-6 top-[339px] max-sm:w-[calc(100%_-_48px)] max-sm:static max-sm:mt-0 max-sm:mb-6 max-sm:mx-6 hover:opacity-90 transition-opacity`}>
        <span className="box-border text-white text-center text-base font-semibold capitalize m-0 p-0">
          Click to Know More
        </span>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"button-arrow\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 24px; height: 24px\"> <g clip-path=\"url(#clip0_111104_895)\"> <path d=\"M12 0C5.38298 0 0 5.38298 0 12C0 18.617 5.38298 24 12 24C18.617 24 24 18.617 24 12C24 5.38298 18.617 0 12 0ZM15.707 12.707L10.707 17.707C10.6143 17.8 10.504 17.8737 10.3827 17.924C10.2614 17.9743 10.1313 18.0001 9.99998 18C9.86865 18.0001 9.73858 17.9743 9.61725 17.924C9.49592 17.8737 9.38572 17.8 9.29297 17.707C8.90198 17.316 8.90198 16.684 9.29297 16.293L13.586 12L9.29302 7.707C8.90203 7.31602 8.90203 6.684 9.29302 6.29302C9.684 5.90203 10.316 5.90203 10.707 6.29302L15.707 11.293C16.098 11.684 16.098 12.316 15.707 12.707Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_111104_895\"> <rect width=\"24\" height=\"24\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
            }}
          />
        </div>
      </button>
    </article>
  );
};

export default ProductCard;
