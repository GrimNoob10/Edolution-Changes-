import React from "react";

export function PlatformPreviewSection({
  title,
  titleHighlight,
  titleHighlights = [],
  subtitle,
  previewImage,
  titleColor = "#197b55",
  backgroundColor,
  outerBackgroundColor
}) {
  const renderTitle = () => {
    // Support both single highlight and multiple highlights
    const highlightsArray = titleHighlights.length > 0 ? titleHighlights : (titleHighlight ? [titleHighlight] : []);
    
    if (highlightsArray.length === 0) {
      return (
        <h1>
          {title}
          <span className="trend-icon">📈</span>
        </h1>
      );
    }

    let lastIndex = 0;
    const elements = [];
    const regex = new RegExp(highlightsArray.join("|"), "gi");
    let match;
    
    while ((match = regex.exec(title)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        elements.push(title.substring(lastIndex, match.index));
      }
      // Add the highlighted match
      elements.push(
        <span key={match.index} style={{ color: titleColor, fontWeight: 'bold' }}>
          {match[0]}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }
    // Add remaining text after last match
    if (lastIndex < title.length) {
      elements.push(title.substring(lastIndex));
    }

    return (
      <h1 className="relative">
  {elements}
  {/* SVG positioned absolutely in px */}
  <span
    style={{
      position: "absolute",
      right: "-2vw", // adjust px for exact placement
      top: "-2vh",   // adjust px for exact placement
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
</h1>

    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-title  ">{renderTitle()}</div>
        <p className="hero-subtitle">{subtitle}</p>

        {/* Platform Preview */}
        <div className="platform-preview">
          <div
            className="preview-outer-shadow"
            style={{ backgroundColor: backgroundColor }}
          ></div>
          <div
            className="preview-outer"
            style={{ backgroundColor: outerBackgroundColor }}
          >
            <div
              className="large-blue-ring-outer"
              style={{ borderColor: backgroundColor }}
            ></div>
            <div
              className="grid-background-layer"
              style={{ backgroundColor: outerBackgroundColor }}
            ></div>
            <div
              className="preview-inner-image"
              style={{ borderColor: backgroundColor }}
            >
              <img src={previewImage} alt="Platform Preview" />
            </div>
            <div className="semicircle-overlay"></div>
            <div className="large-blue-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
