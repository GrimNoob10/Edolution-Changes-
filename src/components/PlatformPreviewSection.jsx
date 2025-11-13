import React from "react";

export function PlatformPreviewSection({
  title,
  titleHighlight,
  subtitle,
  previewImage,
  titleColor = "#14b8a6",
  backgroundColor,
  outerBackgroundColor
}) {
  const renderTitle = () => {
    const parts = title.split(titleHighlight);
    if (parts.length === 1) {
      return (
        <h1>
          {title}
          <span className="trend-icon">📈</span>
        </h1>
      );
    }

    return (
      <h1 className="relative">
  <span style={{ color: titleColor }}>{titleHighlight}</span>
  <span className="title-black">{parts[1]}</span>
  {/* SVG positioned absolutely in px */}
  <span
    style={{
      position: "absolute",
      right: "-30px", // adjust px for exact placement
      top: "-3px",   // adjust px for exact placement
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
