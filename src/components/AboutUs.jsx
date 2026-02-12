import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="landing">
      {/* Navbar is already handled globally */}

      <div className="landing-body">
        {/* Left section 2/3 */}
        <div className="landing-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec euismod, nisl eget consectetur sagittis, nisl nunc 
            consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            Pellentesque habitant morbi tristique senectus et netus et 
            malesuada fames ac turpis egestas.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
          </p>
        </div>

        {/* Right section 1/3 */}
        <div className="landing-right">
          <h1>Paradise Nursery</h1>
          <Link to="/plants">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;