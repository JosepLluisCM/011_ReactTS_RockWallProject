import { NavLink } from "react-router-dom";
import { FormEvent } from "react";

const RegisterPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const logInData = new FormData(event.currentTarget);
    /* const rememberChannel = logInData.getAll("remember"); */
    const data = Object.fromEntries(logInData.entries());
    /* data.remember = rememberChannel[0]; */
    console.log(data);
  };

  return (
    <section className="my-auto">
      <div className="w-full bg-secondary rounded-lg shadow">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Create your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex">
              <input
                type="name"
                name="name"
                id="name"
                className="inline bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0  p-2.5 mr-4"
                placeholder="Name"
                required
              />
              <input
                type="name"
                name="surname"
                id="surname"
                className="bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 inline  p-2.5"
                placeholder="Surname"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-secondary-900 border  border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                placeholder="Your email here"
                required
              />
            </div>
            <div className="flex ">
              <div className="mr-4 grow">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-secondary-900 border border-secondary-500 focus:text-text text-gray-400 sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                  placeholder="YYYY-MM-DD"
                  required
                />
              </div>
              <div className="grow">
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-text "
                >
                  Select your gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-secondary-900 border border-secondary-500 focus:text-text text-gray-400 text-text-500 sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5 h-11"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text 
                  
                  "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirmpassword"
                  placeholder="••••••••"
                  className="bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-text"
                >
                  Confirm Password
                </label>
                <input
                  type="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="accent-accent w-4 h-4 bg-white border border-secondary-500 sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block p-2.5"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    I Accept the{" "}
                    <a
                      href="#"
                      className="font-medium text-accent hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-background bg-accent-600 hover:bg-accent-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an Account
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="font-medium text-accent hover:underline"
              >
                Login Here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
