import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLongLine } from "react-icons/ri";
import Banner from "../components/Banner";

function About() {
  const navigate = useNavigate();
  const container = useRef();

  const stats = [
    { label: "Happy Clients", value: 100 },
    { label: "Projects", value: 150 },
    { label: "Hours of Support", value: 2500 },
    { label: "Hard Workers", value: 50 },
  ];

  useGSAP(
    () => {
      const counts = container.current.querySelectorAll(".stat-number");

      counts.forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target"));

        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "restart none none none",
            },
          },
        );
      });
    },
    { scope: container },
  );

  const team = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      img: "./images/team1.jpg",
    },
    {
      name: "Sarah Jhonson",
      role: "Product Manager",
      img: "./images/team2.jpg",
    },
    {
      name: "William Anderson",
      role: "CTO",
      img: "./images/team3.jpg",
    },
  ];
  return (
    <section className="min-h-dvh">
      <Banner title={"About Us"} />

      <div className="w-full bg-white/20 py-10">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] w-full mx-auto px-6 md:px-10">
          <span className="text-md font-bold text-red-600">Our info</span>
          <h2 className="text-4xl font-bold my-2 text-center">
            About Our ShoppyKart
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae
            asperiores deserunt nulla laboriosam. Itaque, ducimus suscipit at
            explicabo maxime nisi rem vel dicta? Recusandae voluptatibus commodi
            obcaecati eveniet? Tenetur unde illo iure quisquam dolor laborum
            excepturi quis dicta quidem, fugit consequatur molestiae nam
            tempora, nemo adipisci quo. Est blanditiis ea esse voluptatibus
            nisi, incidunt vel tempora reiciendis quo corrupti laborum
            praesentium, voluptas error iste! Nihil necessitatibus inventore
            similique sequi doloribus, corrupti cupiditate libero placeat quidem
            ab perspiciatis ut. Provident amet in minus laborum doloremque
            facilis aliquam nesciunt, voluptate dicta vero voluptatem sapiente
            necessitatibus repudiandae aliquid iusto ex quia dolor?
          </p>
        </div>
      </div>

      <div className="w-full bg-white/20 py-10">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] w-full mx-auto px-6 md:px-10">
          <span className="text-md font-bold text-red-600">OUR TEAM</span>
          <h2 className="text-4xl font-bold my-2 text-center">
            Our Creative Team.
          </h2>

          <div className="w-full py-12 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 place-items-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="relative w-full max-w-[320px] group pb-12"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[420px] object-cover rounded-xl group-hover:scale-99 transition-transform duration-300"
                  />

                  <div
                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center 
      opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <h2 className="text-white text-xl font-semibold">
                      {member.name}
                    </h2>

                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>

                  <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg p-5 transition duration-300 group-hover:shadow-2xl">
                    <h2 className="text-xl font-poppins font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h2>

                    <p className="text-gray-500 font-poppins text-sm mb-3">
                      {member.role}
                    </p>

                    <div className="flex justify-end gap-4 text-red-500 text-lg">
                      <FaFacebookF />
                      <BsTwitterX />
                      <IoLogoWhatsapp />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="px-6 py-2 bg-red-600 text-white rounded text-xl font-semibold mt-6 hover:bg-red-800 active:scale-95 transition-all duration-200 flex items-center gap-2"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <RiArrowRightLongLine size={30} />
          </button>
        </div>
      </div>

      {/* COUNTING NUMBERS */}
      <div ref={container} className="w-full bg-zinc-900 py-20 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span
                className="stat-number text-5xl font-bold text-red-600"
                data-target={item.value}
              >
                0
              </span>
              <p className="text-gray-400 mt-2 font-medium uppercase tracking-wider text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
