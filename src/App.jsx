import "./App.css";
import { Button } from "@/components/ui/button";
import HeroImage from "../src/assets/image/Herobanner.jpg";
import PerformanceImage from "../src/assets/image/dash2.jpg";
import InvestorsImage from "../src/assets/image/dash5.jpg";
import ManagersImage from "../src/assets/image/dash6.jpg";
import AssestsImage from "../src/assets/image/dash4.jpg";
import Benefits1 from "../src/assets/image/built.svg";
import Benefits2 from "../src/assets/image/design.svg";
import Benefits3 from "../src/assets/image/advisory.svg";
import Benefits4 from "../src/assets/image/compare.svg";
import Benefits5 from "../src/assets/image/share.svg";
import Benefits6 from "../src/assets/image/track.svg";
import Benefits7 from "../src/assets/image/verfy.svg";
import AboutLogo_1 from "../src/assets/image/customer_1.jpg";
import AboutLogo_2 from "../src/assets/image/customer_2.jpg";
import AboutLogo_3 from "../src/assets/image/customer_3.jpg";
import AboutLogo_4 from "../src/assets/image/customer_4.jpg";
import AboutLogo_5 from "../src/assets/image/customer_5.jpg";
import AboutLogo_6 from "../src/assets/image/customer_6.jpg";
import SocialImage1 from "../src/assets/image/twitter.svg";
import SocialImage2 from "../src/assets/image/linkdin.svg";
import SocialImage3 from "../src/assets/image/insta.svg";
import SocialImage4 from "../src/assets/image/icons8-whatsapp.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="light">
      <nav className="flex justify-between items-center p-5 text-white bg-foreground">
        <div className="font-bold text-3xl">
          <span className="text-primary">Biz</span>
          <span>Grow</span>
        </div>
        <div className="flex gap-3">
          <a
            href="#about"
            className="hover:bg-white hover:text-foreground text-center rounded transition duration-150 p-2 text-lg"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:bg-white hover:text-foreground text-center rounded transition duration-150 p-2 text-lg"
          >
            Features
          </a>
          <a
            href="#reviews"
            className="hover:bg-white hover:text-foreground text-center rounded transition duration-150 p-2 text-lg"
          >
            Testemonials
          </a>
          <a
            href="#contact"
            className="hover:bg-white hover:text-foreground text-center rounded transition duration-150 p-2 text-lg"
          >
            Conatct Us
          </a>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger className="text-lg text-black px-5 rounded-sm border-none bg-primary p-2 hover:opacity-85 transition">
              {/* <Button className="text-lg text-black px-5 rounded-sm border-none"> */}
              Sign Up
              {/* </Button> */}
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                <p className="font-bold text-2xl text-center mb-2 text-slate-700">
                  Register to{" "}
                  <span className="text-primary font-extrabold">Biz</span>
                  <span className="font-extrabold">Grow</span>
                </p>
              </DialogTitle>
              <SignUp />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="text-lg text-black px-5 rounded-sm border-none bg-primary p-2 hover:opacity-85 transition">
              {/* <Button className="text-lg text-black px-5 rounded-sm border-none"> */}
              Log In
              {/* </Button> */}
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                <p className="font-bold text-2xl text-center mb-2 text-slate-700">
                  Welcom back!
                </p>
              </DialogTitle>
              <Login />
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      <section>
        <div className="hero-section">
          <div className="hero-banner">
            <div className="hero-text">
              <h1>Make Your Sales Analytics</h1>
              <h1>
                More<span> Actionable</span>
              </h1>
              <p>
                {" "}
                Boost your Sales and see how data can be used to surface key
              </p>
              <p>sales insights that help you build revenue</p>
              <button>Get Started</button>
            </div>

            <div className="hero-image">
              {/* <img src={HeroImage} alt='HeroImage'></img> */}
              <img src={HeroImage} alt="HeroImage"></img>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="trust-section">
          <div className="trust-text">
            <h2>Benefits for Your Business</h2>
            <h1>Growth</h1>
            <p>
              Strenthening customer connections,streamlining
              oprations,optimizing data organization.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="performance-section">
          <div className="performance-grid">
            <div className="performance-image">
              <img src={PerformanceImage} alt="PerformanceImage"></img>
            </div>
            <div className="performance-text">
              <h3>
                Looking for a simple, hands-off, and affordable CRM solution
              </h3>
              <p>
                BizGrow offers an all-in-one platform for effortless product
                management, customer relations, and billing processes. Perfect
                for wholesalers, BizGrow provides a streamlined approach that
                lets you focus on what matters most—growing your business.
              </p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="investors-section">
          <div className="investors-grid">
            <div className="investors-text">
              <h3>For Users</h3>
              <p>
                We evaluate your product management, customer interactions, and
                billing processes. Our dashboard offers a unified view, allowing
                you to easily navigate and assess individual items, customer
                data, and billing details.
              </p>
              <button>Learn more</button>
            </div>
            <div className="investors-image">
              <img src={InvestorsImage} alt="InvestorsImage"></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="managers-section">
          <div className="managers-grid">
            <div className="managers-image">
              <img src={ManagersImage} alt="ManagersImage"></img>
            </div>
            <div className="managers-text">
              <h3>For Managers</h3>
              <p>
                We conduct a detailed assessment of your inventory, customer
                data, and billing processes to pinpoint opportunities and risks.
                This evaluation can be tailored to your specific needs. Our
                platform consolidates data and delivers a comprehensive summary
                of key performance indicators, giving you valuable insights into
                your operations.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="assests-section">
          <div className="assests-grid">
            <div className="assests-text">
              <h3>Our Reports</h3>
              <p>
                We analyze your reporting processes, identify areas for
                improvement, and provide actionable insights. Our platform
                generates detailed, data-driven reports to help you make
                informed decisions and enhance overall reporting efficiency
              </p>
            </div>
            <div className="assests-image">
              <img src={AssestsImage} alt="AssestsImage"></img>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="benefits-section">
          <div className="benefits-grid">
            <div className="benefits-item">
              <span>Why BizGrow</span>
              <h2>Key Benefits</h2>
            </div>
            <div className="benefits-item">
              <button>Get started</button>
            </div>
          </div>

          <div className="benefits-card">
            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits2} alt="Benefits2"></img>
              </div>
              <h3>Dashboard</h3>
              <p>
                Access real-time data and insights through a centralized
                display.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits1} alt="Benefits1"></img>
              </div>
              <h3>Product Details </h3>
              <p>View and manage comprehensive product information.</p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits3} alt="Benefits3"></img>
              </div>
              <h3>Customer Profiles</h3>
              <p>
                Keep contact details, purchase history, and preferences all in
                one place.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits4} alt="Benefits4"></img>
              </div>
              <h3>Sales Reports</h3>
              <p>
                Generate reports to analyze sales trends and guide data-driven
                decisions.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits5} alt="Benefits5"></img>
              </div>
              <h3>Share output</h3>
              <p>
                Generate and share clear, insightful reports on business
                performance with your team.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits6} alt="Benefits6"></img>
              </div>
              <h3>Track progress</h3>
              <p>
                Continuously track and visualize business progress to meet goals
                effectively.
              </p>
            </div>

            <div className="card-item">
              <div className="card-icon">
                <img src={Benefits7} alt="Benefits7"></img>
              </div>
              <h3>Verify Data Accuracy</h3>
              <p>Ensure data correctness to avoid misleading claims.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews">
        <div className="about-section">
          <div className="about-container">
            <h2>What people say about us</h2>

            <div className="about-card-grid">
              <div className="about-card-item">
                <h3>
                  “The CRM system makes tracking our goals simple and clear.
                  We’re seeing great results!”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_1} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p>Emily Clark</p>
                    <span>CEO at Business</span>
                  </div>
                </div>
              </div>

              <div className="about-card-item">
                <h3>
                  “CRM gives us a straightforward view of our progress, helping
                  us stay on target.”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_2} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p>Ryan Patel</p>
                    <span>Director at Firm</span>
                  </div>
                </div>
              </div>

              <div className="about-card-item">
                <h3>
                  “With the CRM, monitoring our performance and meeting goals
                  has never been easier.”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_3} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p>Samantha Lee</p>
                    <span>Head of Operations at Company</span>
                  </div>
                </div>
              </div>

              <div className="about-card-item">
                <h3>
                  “The CRM’s reporting features are perfect for tracking our
                  success and improving efficiency.”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_4} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p>Liam Turner</p>
                    <span>VP of Sales at Enterprise</span>
                  </div>
                </div>
              </div>

              <div className="about-card-item">
                <h3>
                  “We love how the CRM helps us visualize our progress and stay
                  focused on our objectives.”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_5} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p> Ava Robinson</p>
                    <span>Managing Director at Organization</span>
                  </div>
                </div>
              </div>

              <div className="about-card-item">
                <h3>
                  “Thanks to the CRM, we have a clear picture of our performance
                  and goal achievement.”
                </h3>
                <div className="about-grid">
                  <div className="about-item">
                    <img src={AboutLogo_6} alt="AboutLogo"></img>
                  </div>
                  <div className="about-item">
                    <p>Noah Smith</p>
                    <span>CFO at Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="footer-section">
          <div className="footer-grid">
            <div className="footer-grid-item-1">
              <div className="footer-logo">
                <h2>
                  <span>Biz</span>Grow
                </h2>
              </div>
              <div className="footer-social-flex">
                <a
                  className="footer-social-icon"
                  target="_blank"
                  href="https://x.com/_aryan0808?s=08"
                >
                  <img src={SocialImage1} alt="SocialImage1"></img>
                </a>
                <a
                  className="footer-social-icon"
                  target="_blank"
                  href="https://in.linkedin.com/in/korat-aryan-3b4688242"
                >
                  <img src={SocialImage2} alt="SocialImage2"></img>
                </a>
                <a
                  className="footer-social-icon"
                  target="_blank"
                  href="https://www.instagram.com/_aryan0808?igsh=Zm0wejgzZnhkeGI5"
                >
                  <img src={SocialImage3} alt="SocialImage2"></img>
                </a>
                <a
                  className="footer-social-icon"
                  target="_blank"
                  href="https://wa.me/qr/DTCGUICKZMALM1"
                >
                  <img src={SocialImage4} alt="SocialImage2"></img>
                </a>
              </div>
            </div>
            <div className="footer-grid-item-2">
              <div className="footer-sub-grid">
                <div className="footer-sub-grid-item">
                  <h5>BizGrow</h5>
                  <div className="footer-menu">
                    <p>About</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Feedback</p>
                  </div>
                </div>
                <div className="footer-sub-grid-item">
                  <h5>Company</h5>
                  <div className="footer-menu">
                    <p>About Us</p>
                    <p>Contact</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-grid-item-3">
              <div className="footer-grid-item-logo">
                <h6>Newsletter</h6>
              </div>
              <div className="footer-text-v">
                <p>Join our Newsletter to stay up to date on features.</p>
              </div>

              <div className="footer-input">
                <input type="text" placeholder="Email"></input>
                <button>Subscribe</button>
                {/* <div className='footer-input-img'><img src={ArrowImage} alt='ArrowImage'></img></div> */}
              </div>

              <div className="footer-text">
                <p>
                  By Subscribing you agree to with our privacy policy and
                  provide consent to receive updates from our company.
                </p>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="footer-copyright">
            <p>Copyright ©2024 BizGrow.All rights reserved</p>

            <div className="line-bottom">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
