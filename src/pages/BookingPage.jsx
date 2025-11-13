import WcuSection from "../components/WcuSection";
import SecureSection from "../components/SecureSection";
import FaqSection from "../components/FaqSection";
import BookingunitSection from "../components/BookingunitSection";

const BookingPage = () => {
  return (
    <>
      <BookingunitSection />
      <WcuSection bgVariant="booking" />
      <SecureSection />
      <FaqSection />
    </>
  );
};

export default BookingPage;
