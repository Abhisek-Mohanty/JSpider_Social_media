import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Forgt = () => {
  let [userId, setUserId] = useState("");
  let navigate = useNavigate();
  let userIdChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  let check = () => {
    axios
      .post("http://localhost:7000/forgetuser", { userId })
      .then((x) => {
        console.log(x);
        if (x.data !== null) {
          navigate(`/ForgtPass/${x.data._id}`);
        } else {
          alert("User Id not found ");
        }
      })
      .catch(() => {
        console.log("error1");
      });
  };
  return (
    <div>
      <div className="w-3/4 relative left-12 top-12">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-semibold leading-8 text-gray-900">
                  Find Your Account
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Please enter your email address or User Id to search for your
                  account.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address / User ID
                    </label>
                    <div className="mt-2">
                      <input
                        id="userid"
                        name="userid"
                        type="userid"
                        autoComplete="userid"
                        value={userId}
                        onChange={userIdChange}
                        required
                        className="block w-full mb-0 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6  flex items-center justify-end gap-x-6">
                <Button variant="contained" onClick={check}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgt;
