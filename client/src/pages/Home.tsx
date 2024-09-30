import { Link } from "react-router-dom";
import arrow_right from "../assets/arrow_right.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <section className="h-[75vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold">
          Effortlessly Explore County Data with Our API.
        </h1>
        <p className="text-2xl text-center mt-4">
          Our simple and intuitive API makes it easy to access the information
          you need.
        </p>
        <Link
          to="/login"
          className="text-white text-xl bg-[#357de8] pl-6 pr-4 py-2 rounded-sm hover:bg-[#7298ee] my-4 flex items-center"
        >
          Get Started
          <img
            src={arrow_right}
            alt="arrow right"
            className="inline-block ml-2 w-8 h-8"
          />
        </Link>
      </section>

      <section className="bg-[#F3F4F6] h-[60vh] pt-8 pb-4 py-4">
        <h1 className="text-center text-5xl font-semibold flex justify-center flex-col my-16 items-center">
          Key Features
        </h1>

        <div className="flex flex-row gap-4">
          <div className="bg-white border-0 shadow-sm rounded-md px-4 py-2 h-1/3 ml-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              laboriosam! Aliquam eos illo deserunt veritatis non suscipit sed
              dignissimos reiciendis, officia officiis nulla atque expedita ea
              aliquid eligendi consectetur facilis.
            </p>
          </div>
          <div className="bg-white border-0 shadow-sm rounded-md px-4 py-2 h-1/3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              laboriosam! Aliquam eos illo deserunt veritatis non suscipit sed
              dignissimos reiciendis, officia officiis nulla atque expedita ea
              aliquid eligendi consectetur facilis.
            </p>
          </div>
          <div className="bg-white border-0 shadow-sm rounded-md px-4 py-2 h-1/3 mr-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              laboriosam! Aliquam eos illo deserunt veritatis non suscipit sed
              dignissimos reiciendis, officia officiis nulla atque expedita ea
              aliquid eligendi consectetur facilis.
            </p>
          </div>
        </div>
      </section>

      <section className=" h-[60vh] pt-8 pb-4 py-4">
        <h1 className="text-center text-5xl font-semibold flex justify-center flex-col my-16 items-center">
          Pricing
        </h1>

        <h4 className="text-3xl font-medium text-center">To be announced</h4>
      </section>


      <section className="bg-[#F3F4F6] h-[75vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold">
        Comprehensive Documentation
        </h1>
        <p className="text-2xl text-center mt-4">
        Our clear and concise documentation makes it easy to find the information you need.        </p>
        <Link
          to="https://newtonkamau14.github.io/Kenya-Open-Data/"
          className="text-white text-xl bg-[#357de8] pl-6 pr-4 py-2 rounded-sm hover:bg-[#7298ee] my-4 flex items-center"
        >
          Explore Docs
          <img
            src={arrow_right}
            alt="arrow right"
            className="inline-block ml-2 w-8 h-8"
          />
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
