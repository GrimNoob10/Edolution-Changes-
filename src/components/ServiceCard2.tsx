import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSvg: string;
  decorationSvg: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, description, iconSvg, decorationSvg, className = "",
}) => (
  <article className={`relative bg-white rounded-[16px] shadow-[0_6px_24px_0_rgba(0,0,0,0.09)] py-8 px-7 w-[360px] h-[300px] flex flex-col justify-between ${className}`}>
    {/* Icon with background */}
    <div className="absolute left-6 top-6 z-10">
      <span className="inline-block w-10 h-10 rounded-full bg-[#E9F1E1] relative z-0">
        <span className="absolute z-10 left-[8px] top-[8px]" dangerouslySetInnerHTML={{ __html: iconSvg }}/>
      </span>
    </div>
    <div className="flex flex-col pl-[4px] pt-[58px] pr-[6px]">
      <h3 className="font-semibold text-[#3D733F] text-[1.11rem] leading-[1.3] mb-2">{title}</h3>
      <div className="border-b border-[#DEE5D6] w-[90%] mb-3"/>
      <p className="text-[#555] leading-[1.7] tracking-[-0.01em] text-[15px]">{description}</p>
    </div>
    {/* Decoration SVG */}
    <div className="absolute right-0 bottom-0 z-0">{decorationSvg && (<span dangerouslySetInnerHTML={{ __html: decorationSvg }}/>)}</div>
  </article>
);

export default ServiceCard;
