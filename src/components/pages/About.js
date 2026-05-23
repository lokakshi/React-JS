import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About Our Restaurant</h1>
          <p>
            Delicious food, fast delivery, and unforgettable dining experiences.
          </p>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
            alt="restaurant"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          <p className="small-title">WHO WE ARE</p>

          <h2>
            Bringing Happiness Through Food 🍔
          </h2>

          <p>
            Welcome to FoodieHub — your one-stop destination for discovering
            delicious meals from top restaurants around you.
          </p>

          <p>
            We started with one mission: to make ordering food simple,
            fast, and enjoyable. From pizzas and burgers to desserts and coffee,
            we connect food lovers with their favorite restaurants.
          </p>

          <p>
            Our platform focuses on quality food, seamless ordering,
            and quick delivery so every meal feels special.
          </p>

          {/* FEATURES */}
          <div className="about-features">

            <div className="feature-card">
              <h3>500+</h3>
              <p>Restaurants</p>
            </div>

            <div className="feature-card">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="feature-card">
              <h3>24/7</h3>
              <p>Fast Delivery</p>
            </div>

          </div>

          <button className="about-btn">
            Explore Restaurants
          </button>

        </div>

      </div>

    </div>
  );
};

export default About;