import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";
import Footer from "../components/Footer";
import visibility from "../assets/visibility.svg";
import visibilityOff from "../assets/visibility_off.svg";
import PageTitle from "../components/PageTitle";
import DynamicSpinner from "../components/DynamicSpinner";

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { signUp, error, isLoading } = useSignUp();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signUp(email, password);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const checkPasswordsMatch = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError(null);
    }
  };

  useEffect(() => {
    checkPasswordsMatch();
  }, [password, confirmPassword]);

  return (
    <>
      <PageTitle title="Signup" />
      <section className="h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-100 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {error && <div className="text-red-600">{error}</div>}

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      type={isVisible ? "text" : "password"}
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className={`bg-gray-50 border ${
                        !passwordError ? "border-gray-300" : "border-red-600"
                      } text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
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
                {passwordError && (
                  <div className="text-red-600 text-center p-0 m-0">
                    {passwordError}
                  </div>
                )}

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className={`bg-gray-50 border ${
                        !passwordError ? "border-red-600" : "border-gray-300"
                      } text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className={`bg-[#357de8] text-white w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-[#7298ee]  ${
                    isLoading ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {isLoading ? <DynamicSpinner /> : "Login"}
                </button>
                <p className="text-sm font-light">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default Signup;
