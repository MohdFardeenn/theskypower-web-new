import "./Products.css";

import inverter from "../../assets/images/m2.jpeg";
import automotive from "../../assets/images/m3.jpg";
import solar from "../../assets/images/m4.jpg";
import lithium from "../../assets/images/m5.jpg";
import erickshaw from "../../assets/images/m6.jpg";
import industrial from "../../assets/images/m1.jpeg";

const products = [
  {
    title: "Inverter Batteries ",
    image: inverter,
  },
  {
    title: "AutoMotive SkyPower",
    image: automotive,
  },
  {
    title: "Infinite SkyPower",
    image: solar,
  },
  {
    title: "Maz Zone",
    image: lithium,
  },
  {
    title: " Lithium Batteries",
    image: erickshaw,
  },
  {
    title: "Automotive Batteries",
    image: industrial,
  },
];

function Products() {
  return (
    <section className="products-section">

      <div className="products-heading">
        <h2>
          Our Versatile Range Of <span>Products</span>
        </h2>

        <p>
          SKYPower provides reliable battery solutions for
          automotive, inverter, solar, industrial and
          commercial applications.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>

            <img
              src={product.image}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <button>
              Read More →
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Products;