import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "अमित सिंह",
    role: "फ्लीट ओनर, धामपुर",
    review:
      "मैंने कई बैटरियों का उपयोग किया है, लेकिन SkyPower की बैटरी ने मुझे सबसे अच्छा प्रदर्शन दिया है। मेरी फ्लीट की रेंज और विश्वसनीयता में काफी सुधार हुआ है।",
  },
  {
    id: 2,
    name: "राजेश कुमार",
    role: "ई-रिक्शा ऑपरेटर, बिजनौर",
    review:
      "इस बैटरी ने मेरे ई-रिक्शा व्यवसाय को पूरी तरह से बदल दिया है। मैं चार्जिंग पर पैसे बचा रहा हूँ और अधिक ज़्यादा ट्रिप कर रहा हूँ।",
  },
  {
    id: 3,
    name: "विकास शर्मा",
    role: "डीलर, मेरठ",
    review:
      "उत्कृष्ट गुणवत्ता और शानदार सपोर्ट। हमारे ग्राहकों की संतुष्टि काफी बढ़ी है।",
  },
  {
    id: 4,
    name: "संदीप चौहान",
    role: "व्यवसायी, दिल्ली",
    review:
      "बैटरी बैकअप बहुत अच्छा है और सर्विस टीम हमेशा मदद के लिए उपलब्ध रहती है।",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <h2>TRUSTED STORIES FROM OUR CLIENTS</h2>

        <div className="divider"></div>

        <p className="subtitle">
          Don't just take our word for it. Explore what our diverse clients
          across India have to say about SkyPower reliable power solutions.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>

                <p className="review">"{item.review}"</p>

                <div className="user-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}