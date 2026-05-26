import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/myAdmin") ||
    location.pathname.startsWith("/product-create") ||
    location.pathname.startsWith("/all-products");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="w-full bg-black">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
