import React from 'react';import { Carousel } from 'react-bootstrap'; // Import Carousel from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/HomePage.css';
import { Link } from 'react-router-dom';
import Contact from '../user/Contact';
import Hero from './Hero'; // Import custom CSS

const services = [
  { img: 'https://www.sarvottamnoida.com/admin/AssetsUpload/BlogsImage/c0f9c8c7a3blog85.jpg', title: 'Primary Education', description: 'Enhance educational opportunities for children through innovative learning solutions.' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOFr-Xve6CMGgdiIrbXc42regqfj5jVyNTg&s', title: 'People’s Healthcare', description: 'Improve healthcare accessibility and services to promote community well-being.' },
  { img: 'https://transports-goevia.com/wp-content/uploads/2023/01/atouts-transport-routier-marchandises.jpg', title: 'Roads and Transportation', description: 'Develop infrastructure for efficient transportation and connectivity.' },
  { img: 'https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?cs=srgb&dl=pexels-pixabay-40784.jpg&fm=jpg', title: 'Drinking Water Facilities', description: 'Ensure clean and accessible drinking water sources for all villagers.' },
  { img: 'https://media.licdn.com/dms/image/D5612AQFtKyVDvbSgyg/article-cover_image-shrink_720_1280/0/1673246446728?e=2147483647&v=beta&t=vHW-cYq_Ibu8jqt1CjBWQTK3jSZdVz4BG-95_xTkMC8', title: 'Government Policies Awareness', description: 'Disseminate information on governmental policies and encourage civic engagement.' },
  { img: 'https://cdn.corporatefinanceinstitute.com/assets/public-infrastructure.jpeg', title: 'Basic Facilities/Infrastructure', description: 'Enhance the availability of basic amenities such as electricity and sanitation.' },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Hero/>
      </section>

      {/* What is Rural Edge Section */}
      <section className="rural-edge-section">
      <div className="container2">
          <div className="row">
              <div className="col-lg-6 animate-left">
                  <h2>What is Rural Edge?</h2>
                  <p>
                      Rural Edge is dedicated to enhancing the quality of life in rural communities by providing essential services and support. Our mission is to foster sustainable development and create opportunities for growth and improvement in underserved areas.
                  </p>
                  <p>
                      We offer a range of programs and resources designed to meet the unique needs of rural residents. From agricultural support and economic development to education and healthcare initiatives, Rural Edge is committed to making a positive impact.
                  </p>
                  <a href="/feedback" className="btn-read-more">Read More</a>
              </div>
              <div className="col-lg-6 animate-right">
                  <img src="http://siliconprairienews.com/wp-content/uploads/2018/12/agriculture-barn-buildings-248880.jpg" alt="Rural Edge" className="img-fluid" />
              </div>
          </div>
      </div>
  </section>
  

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className="service-card">
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="/admin-contact" className="btn1">Donate Now</a>
                </div>
                <br/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="donation-section">
      <div className="about-us-section">
      <div className="about-us-image">
        <img src="https://ekhumfoundation.com/wp-content/uploads/2022/02/Donate.jpeg" alt="About Us" width="500px" height="400px" class="img"/>
      </div>
      <div className="about-us-content">
      <h3>Support Rural Communities</h3>
      <h2>Donate to Rural Edge</h2>
      <p>
        Your generous donation helps us to empower and uplift rural communities by providing essential resources, education, and support. Together, we can create sustainable solutions and improve the quality of life for those in need. Thank you for your support.
      </p>
      <Link to="/admin-contact"><button className="learn-more-button">Donate Now</button></Link>
      </div>

    </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
      <div className="container1">
          <h2>Get in Touch</h2>
          <Contact/>
      </div>
  </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h4>About Us</h4>
              <p>
                Rural Edge is committed to providing support and services to rural communities. Our goal is to make a meaningful impact in the lives of those we serve.
              </p>
            </div>
            <div className="col-lg-4">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#"><img src="https://i.pinimg.com/474x/c7/40/a7/c740a7bd3b579212fe64d9f5b919890a.jpg" alt="Facebook" /></a>
                <a href="#"><img src="https://i.pinimg.com/236x/58/a2/be/58a2bec02ecb40d12e507e2a212c46c6.jpg" alt="Instagram" /></a>
                <a href="#"><img src="https://i.pinimg.com/originals/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.png" alt="Twitter" /></a>
                <a href="#"><img src="https://i.pinimg.com/736x/d0/24/2f/d0242fc3351571f8243a1db4ac0370c6.jpg" alt="LinkedIn" /></a>
              </div>
            </div>
            <div className="col-lg-4">
              <h4>Search</h4>
              <input type="text" className="search-bar" placeholder="Search..." />
            </div>
          </div>
          <p className="text-center">Copyright &copy; 2024 Rural Edge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
