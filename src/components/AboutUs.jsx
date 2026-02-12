import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>
        Paradise Nursery brings nature into your home with a curated collection
        of healthy, beautiful houseplants for every lifestyle.
      </p>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default AboutUs;