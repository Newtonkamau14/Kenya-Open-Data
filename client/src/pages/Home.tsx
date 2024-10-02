import { Link } from "react-router-dom";
import arrow_right from "../assets/arrow_right.svg";
import bolt from "../assets/bolt.svg";
import lock from "../assets/lock.svg";
import code from "../assets/code.svg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <section className="h-[75vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold mx-2">
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

      <section className="bg-[#F3F4F6] h-[60vh] pt-8 pb-4 py-4 w-full">
        <h1 className="text-center text-5xl font-semibold flex justify-center flex-col my-6 items-center">
          Key Features
        </h1>
        <div className="flex flex-row justify-center items-center">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-4 ">
            <img src={bolt} alt="bolt" className="w-10 h-10 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight">
              High Performance{" "}
            </h5>
            <p className="mt-6 font-normal">
              Lightning-fast API responses with global CDN support and optimized
              routing.
            </p>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-4 md:max-w-2xl">
            <img src={lock} alt="lock" className="w-10 h-10 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight">
              Advanced Security
            </h5>
            <p className="mt-6 font-normal">
              Protect your APIs with OAuth 2.0, API keys, and customizable
              access controls.
            </p>
          </div>

          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-4 md:max-w-2xl">
            <img src={code} alt="code" className="w-10 h-10 mb-3" />
            <h5 className="mb-2 text-2xl font-semibold tracking-tight">
              Developer-Friendly
            </h5>
            <p className="mt-6 font-normal">
              Comprehensive documentation, SDKs, and intuitive dashboards for
              easy integration.
            </p>
          </div>
        </div>
      </section>

      <section className=" h-[60vh] pt-8 pb-4 py-4 my-8">
        <h1 className="text-center text-5xl font-semibold flex justify-center flex-col my-16 items-center">
          Pricing
        </h1>

        <h4 className="text-3xl font-medium text-center">To be announced</h4>
      </section>

      <section className="bg-[#F3F4F6] h-[75vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold mx-2">
          Comprehensive Documentation
        </h1>
        <p className="text-2xl text-center mt-4">
          Our clear and concise documentation makes it easy to find the
          information you need.{" "}
        </p>
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
