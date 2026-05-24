import gsap from "gsap";
import Navbar from "./components/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full bg-black">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
