import { FormEvent } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const logInData = new FormData(event.currentTarget);
    const rememberChannel = logInData.getAll("remember");
    const data = Object.fromEntries(logInData.entries());
    data.remember = rememberChannel[0];
    console.log(data);
    const formElement = event.target as HTMLFormElement;
    formElement.reset();
  };

  return (
    <section className="my-auto">
      <div className="w-96 bg-secondary rounded-lg shadow">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-secondary-900 border border-secondary-500 text-text sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    name="remember"
                    className="accent-accent w-4 h-4 opacity-50 border bg-white sm:text-sm rounded-lg focus:border-accent focus:outline-none focus:ring-0 block p-2.5"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-accent hover:underline "
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-background bg-accent-600 hover:bg-accent-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?{" "}
              <NavLink
                to="/register"
                className="font-medium text-accent hover:underline"
              >
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
