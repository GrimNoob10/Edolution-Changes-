import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSvg: string;
  decorationSvg: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSvg,
  decorationSvg,
  className = "",
}) => {
  return (
    <article className={`box-border w-80 h-80 shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] relative bg-white m-0 p-0 rounded-[10px] max-md:w-full max-md:max-w-xs max-md:justify-self-center max-sm:h-auto max-sm:pb-5 ${className}`}>
      <div className="box-border w-[60px] h-[60px] absolute m-0 p-0 left-[18px] top-[18px]">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"service-icon-bg\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 60px; height: 60px; position: absolute; left: 0; top: 0\"> <circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#E9F1E1\"></circle> </svg>",
            }}
          />
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: iconSvg,
            }}
          />
        </div>
      </div>
      <div className="box-border flex w-[284px] flex-col items-start gap-3 absolute m-0 p-0 left-[18px] top-[90px] max-sm:w-[calc(100%_-_36px)] max-sm:static max-sm:mt-[90px] max-sm:mb-[18px] max-sm:mx-[18px]">
        <h3 className="box-border text-[#698E45] text-lg font-semibold m-0 p-0">
          {title}
        </h3>
        <div className="box-border w-[284px] h-[0.8px] bg-[#252525] m-0 p-0" />
        <p className="box-border text-[#545454] text-base font-normal m-0 p-0">
          {description}
        </p>
      </div>
      <div className="box-border absolute right-[-62px] bottom-[-87px] m-0 p-0 max-sm:hidden">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"79\" height=\"87\" viewBox=\"0 0 79 87\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"service-decoration-bg\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 124px; height: 124px; position: absolute; left: 0; top: 0\"> <circle cx=\"62\" cy=\"62\" r=\"62\" fill=\"#E9F1E1\"></circle> </svg>",
            }}
          />
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: decorationSvg,
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
