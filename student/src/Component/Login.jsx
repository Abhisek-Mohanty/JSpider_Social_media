import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  // let [details, setDetails] = useState([]);

  let navigation = useNavigate();

  let invalid = () => {
    return "Invalid UserId or Password";
  };

  let userChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  let passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  let login = (e) => {
    e.preventDefault();
    let log = { userid: user, password: password };
    axios
      .post("http://localhost:7000/login", log)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          console.log("if");
          localStorage.setItem("data", response.data.id);
          navigation(`/${response.data.id}/home`);
        } else {
          alert("Invalid User Id or Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="relative top-12">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://www.qspiders.com/_nuxt/img/qspiders_logo.6096665.png"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to Student account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address / User ID
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user}
                  onChange={userChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forget"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={passwordChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-gray-500">
            Still not Join?{" "}
            <Link
              to="/createuser"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register with us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
