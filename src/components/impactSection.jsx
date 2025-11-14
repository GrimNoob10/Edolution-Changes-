import React from "react";

export function ImpactSection({ 
  title, 
  titleHighlights, 
  subtitle, 
  description,
  color
}) {
  const renderTitle = () => {
    if (titleHighlights.length === 0) {
      return <h2 className="text-black">{title}</h2>;
    }

    const parts = title.split(new RegExp(`(${titleHighlights.join("|")})`, "gi"));
    
    return (
      <h2 className="text-black relative flex items-center justify-center w-full">
  {parts.map((part, index) => {
    const isHighlight = titleHighlights.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    );
    return isHighlight ? (
      <span key={index} style={{ color: color || '#000', fontWeight: 'bold' }}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    );
  })}
  
</h2>

    );
  };

  return (
    <section className="impact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="relative">
            {title ? title.split(' ').map((word, index) => (
              titleHighlights.includes(word) ? (
                <span key={index} style={{ color: color || '#000', fontWeight: 'bold' }}>
                  {word}{' '}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )) : ''}
            {/* SVG positioned absolutely in px */}
            <span
              style={{
                position: "absolute",
                right: "-2vw",  // adjust for perfect fit, try -35px or -28px if needed
                top: "-2vh",    // adjust as needed, higher or lower as per screenshot
                zIndex: 5,
              }}
            >
              <svg
                width="44"
                height="28"
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
            </span>
          </h2>
          {subtitle ? <p className="section-description">{subtitle}</p> : ''}
        </div>

        <p className="impact-text">{description}</p>
      </div>
    </section>
  );
}
