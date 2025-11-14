import React from "react";

export function FeaturesSection({ 
  title, 
  titleHighlight, 
  features,
  accentColor = "#197b55",
  accentColorB
}) {
  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <h2 className="section-title text-black">
          <span className="trend-icon "><svg className="w-[44px] md:ml-[850px]  h-[28px]" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196" stroke="#19223F" strokeWidth="5.5" strokeMiterlimit="10"/>
    <path d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678" stroke="#698E45" strokeWidth="5.5" strokeMiterlimit="10"/>
  </svg></span>
          <span className="text-green">{titleHighlight}</span> {title}
        </h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{backgroundColor:accentColorB}}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon icon-design">
                  <img src={feature.icon} alt={feature.title} />
                </div>
              </div>
              <div className="feature-header" style={{backgroundColor:accentColor}}>{feature.title}</div>
              <div className="feature-preview">
                <div className={feature.previewClass || "chart-preview"}>
                  <img
                    className="content-image"
                    src={feature.previewImage}
                    alt={feature.title}
                    style={{borderColor:accentColorB}}
                  />
                </div>
              </div>
              <hr className="feature-card-sep" style={{borderColor:accentColor}}/>
              <div className="feature-description">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
