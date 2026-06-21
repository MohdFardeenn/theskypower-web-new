import "./Hero.css";
import heroImage from "../../assets/images/m1.jpeg";
import { href } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-small">
          We Are The Best
        </p>

        <h2 className="hero-red">
          Battery Supplier
        </h2>

        <h1 className="hero-title">
          In India
        </h1>

        <p className="hero-description">
          SKYPower is a leading battery manufacturing company
          delivering high-performance automotive, inverter,
          solar and industrial batteries across India and
          international markets.
        </p>

        <button className="hero-btn">
          Contact Us
        </button>

      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Battery" />
      </div>

    </section>
  );
}

export default Hero;