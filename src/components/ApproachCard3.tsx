import React from 'react';

interface ApproachCardProps {
  title: string;
  description: string;
  iconSvg: string;
  backgroundPatternSvg: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({
  title,
  description,
  iconSvg,
  backgroundPatternSvg
}) => {
  return (
    <article className="box-border w-80 h-[266px] relative shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#E9F1E1] m-0 p-0 rounded-[10px]">
      <div className="box-border relative z-[2] flex flex-col gap-3 h-[191px] m-0 p-[18px]">
        <div className="box-border w-[60px] h-[60px] relative m-0 p-0">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-icon-bg\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 60px; height: 60px; fill: var(--EDO-Light-Green, #698E45)\"> <circle cx=\"30\" cy=\"30\" r=\"30\" fill=\"#698E45\"></circle> </svg>",
            }}
          />
          <div
            className="absolute top-[11px] left-[11px] w-[38px] h-[38px]"
            dangerouslySetInnerHTML={{ __html: iconSvg }}
          />
        </div>
        <div className="box-border flex flex-col gap-2.5 flex-1 m-0 p-0">
          <h3 className="box-border text-[#698E45] text-lg font-semibold m-0 p-0 max-sm:text-base">
            {title}
          </h3>
          <div className="box-border w-[284px] h-[0.8px] bg-[#6D6D6D] m-0 p-0" />
          <p className="box-border text-[#545454] text-base font-normal w-[244px] m-0 p-0 max-sm:text-sm max-sm:w-full">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-[-71px] right-[-45px] w-[124px] h-[124px]">
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg width=\"79\" height=\"53\" viewBox=\"0 0 79 53\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"approach-bg-circle\" style=\"margin: 0; padding: 0; box-sizing: border-box; width: 124px; height: 124px; fill: var(--EDO-Light-Green, #698E45)\"> <circle cx=\"62\" cy=\"62\" r=\"62\" fill=\"#698E45\"></circle> </svg>",
          }}
        />
      </div>
      
      <div
        className="absolute bottom-[-50px] right-[-22px] w-[74px] h-[74px]"
        dangerouslySetInnerHTML={{ __html: backgroundPatternSvg }}
      />
    </article>
  );
};

export default ApproachCard;
