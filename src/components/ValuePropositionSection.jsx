import React from "react";

export function ValuePropositionSection({
  title,
  titleHighlight,
  titleIcon,
  cards,
  accentColor = "#197b55",
  showBlob = true,
  backgroundColor,
  iconBackgroundColor,
  hoverBackgroundColor,
  hoverIconBackgroundColor,
  titleColor,
  hoverTitleColor,
  textColor,
  hoverTextColor,
  hoverBlobColor,
  blobColor,
  hoverIconFilter,
}) {
  return (
    <section className="value-section">
      <div className="section-container">
        <h3 className="value-title text-black">
          <span style={{ color: accentColor }}>{titleHighlight}</span> {title}
          {titleIcon && (
            <div className="trend-icon">
              <img src={titleIcon} alt="" />
            </div>
          )}
        </h3>

        <div className="value-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className="value-card"
              style={{
                "--bg-color": backgroundColor,
                "--hover-bg-color": hoverBackgroundColor,
                "--icon-bg": iconBackgroundColor,
                "--hover-icon-bg": hoverIconBackgroundColor,
                "--title-color": titleColor,
                "--hover-title-color": hoverTitleColor,
                "--text-color": textColor,
                "--hover-text-color": hoverTextColor,
                "--blob-color": blobColor,
                "--hover-blob-color": hoverBlobColor,
                "--icon-filter": "none",
                "--hover-icon-filter": hoverIconFilter || "none",
              }}
            >
              <div className="value-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h4 className="value-heading">{card.title}</h4>
              <hr
                className="feature-card-sep"
                style={{ borderColor: accentColor , width:200}}
              />

              <p className="value-text">{card.description}</p>
              {showBlob && <div className="blob"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
