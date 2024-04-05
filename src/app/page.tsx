import Hero from "./components/hero";
import NewProducts from "./components/product";
import Testimonial from "./components/testimonial";

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <Testimonial />
    </div>
  );
}

export default Home