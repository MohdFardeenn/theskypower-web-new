import "./CEO.css";

function CEO() {
  return (
    <section className="ceo-section">
      <div className="ceo-container">
        {/* Left Side - CEO Image */}
        <div className="ceo-image">
          <img src="/ceo.jpg.jpeg" alt="CEO Zaid Zulfuqar" />
        </div>

        {/* Right Side - CEO Info */}
        <div className="ceo-info">
          <h2>Leadership</h2>
          
          <div className="divider"></div>

          <h3>Zaid Zulfuqar</h3>
          <p className="ceo-title">Chief Executive Officer</p>

          <p className="ceo-description">
            Under the visionary leadership of CEO Zaid Zulfuqar, SKYPower has 
            established itself as a trusted name in battery manufacturing across India. 
            With decades of industry expertise and commitment to innovation, he drives 
            the company's mission to deliver reliable power solutions to millions.
          </p>

          <div className="company-info">
            <div className="info-item">
              <h4>Company Established</h4>
              <p>Since <span>1994</span></p>
            </div>
            <div className="info-item">
              <h4>Years of Excellence</h4>
              <p><span>30+</span> Years</p>
            </div>
          </div>

          <p className="ceo-quote">
            "Our commitment is to provide the best battery solutions that power the 
            growth and prosperity of India."
          </p>
        </div>
      </div>
    </section>
  );
}

export default CEO;
