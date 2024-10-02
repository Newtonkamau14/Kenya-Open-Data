import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import Footer from "../components/Footer";
import visibility from "../assets/visibility.svg";
import visibilityOff from "../assets/visibility_off.svg"; 

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);

  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#F3F4F6] border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {error && <div className="text-red-600">{error}</div>}

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="user@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isVisible ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <button
                      type="button"
                      onClick={handleVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      <img
                        src={isVisible ? visibilityOff : visibility}
                        alt="Toggle visibility"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-[#357de8] text-white w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#7298ee]"
                >
                  Login
                </button>
                <p className="text-sm font-light">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
