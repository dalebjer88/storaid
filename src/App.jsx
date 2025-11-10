import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFoundPage";
import HeroImage from "./assets/hero-image.svg";

function App() {
  return (
    <Routes>
      {/* 1. HomePage */}
      <Route
        path="/"
        element={
          <MainLayout
            heroProps={{
              preTitle: "Welcome to StorAid",
              title: "Space Simplified, Storage Perfected",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.",
              ctaButton: (
                <a
                  href="/discover-more"
                  className="btn btn--primary btn--on-dark"
                >
                  Discover More
                </a>
              ),
              image: (
                <img
                  src={HeroImage}
                  alt="An illustration of smart storage solutions and boxes"
                  className="hero-image-placeholder"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/500x300/12372A/FFFFFF?text=Pic+Error";
                  }}
                />
              ),
            }}
          />
        }
      >
        <Route index element={<HomePage />} />
      </Route>

      {/* 2. AboutPage */}
      <Route
        path="/about"
        element={
          <MainLayout
            heroProps={{
              title: "About Us",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              variant: "about",
            }}
          />
        }
      >
        <Route index element={<AboutPage />} />
      </Route>

      {/* 3. ServicesPage */}
      <Route
        path="/services"
        element={
          <MainLayout
            heroProps={{
              title: "Services",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              variant: "services",
            }}
          />
        }
      >
        <Route index element={<ServicesPage />} />
      </Route>

      {/* 4. ContactPage */}
      <Route
        path="/contact"
        element={
          <MainLayout
            heroProps={{
              title: "Contact Us",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              variant: "contact",
            }}
          />
        }
      >
        <Route index element={<ContactPage />} />
      </Route>

      {/* 5. BookingPage */}
      <Route
        path="/booking"
        element={
          <MainLayout
            heroProps={{
              title: "Booking",
              subtitle:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
              variant: "booking",
            }}
          />
        }
      >
        <Route index element={<BookingPage />} />
      </Route>

      {/* 6. 404 Page */}
      <Route
        path="*"
        element={
          <MainLayout
            heroProps={{
              preTitle: "Oops!",
              title: "Page Not Found",
              subtitle:
                "Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.",
              ctaButton: (
                <a href="/" className="btn btn--primary btn--on-dark">
                  Back To Home
                </a>
              ),
              variant: "notfound",
            }}
          />
        }
      >
        <Route index element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
