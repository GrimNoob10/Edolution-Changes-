import React from "react";
import '../pages/SkillCertification.css'

export function UseCasesSection({
  title,
  titleHighlight,
  cards,
  backgroundColor,
  iconBackgroundColor,
  hoverBackgroundColor,
  hoverIconBackgroundColor,
  hoverTitleColor,
  hoverTextColor,
  titleColor = "#197b55",
  textColor,
  hoverIconFilter,
}) {
  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <section id="use-cases" className="use-cases-section">
      <div className="section-container">
        <h2 className="section-title text-black relative">
          <span style={{ color: titleColor }}>{titleHighlight}</span> {title}
          <span
            style={{
              position: "absolute",
              right: "460px", // adjust px to fit your design
              top: "-4px", // adjust px to fit your design
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

        <div className="use-cases-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="use-case-card"
              style={{
                "--bg-color": backgroundColor,
                "--hover-bg-color": hoverBackgroundColor,
                "--icon-bg": iconBackgroundColor,
                "--hover-icon-bg": hoverIconBackgroundColor,
                "--title-color": titleColor,
                "--hover-title-color": hoverTitleColor,
                "--text-color": textColor,
                "--hover-text-color": hoverTextColor,
                "--hover-icon-filter": hoverIconFilter,
              }}
            >
              <div className="use-case-icon">
                {card.icon && <img src={card.icon} alt={card.title} />}
              </div>
              <h4 className="use-case-title">{card.title}</h4>
              <hr
                className="feature-card-sep"
                style={{ borderColor: iconBackgroundColor, width:300 }}

              />

              <p className="use-case-text">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
