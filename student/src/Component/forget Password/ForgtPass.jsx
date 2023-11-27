import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ForgtPass = () => {
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmPassword] = useState("");
  let pass = useRef(null);
  let conpass = useRef(null);
  let navigate = useNavigate();

  let passwordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  let confirmPasswordChange = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  let validconfirmPassword = useCallback(
    (e) => {
      if (confirmpassword !== password) {
        return "Passwords do not match";
      }
    },
    [confirmpassword]
  );
  let submit = (e) => {
    let changePass = {
      password: password,
    };
    console.log(changePass);
    if (confirmpassword === password) {
      conpass.current.style.boxShadow = "0 0 0 1px gray";
      axios
        .post("http://localhost:7000/change", changePass)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate("/");
    } else {
      // pass.current.style.boxShadow = "0 0 0 1px red";
      conpass.current.style.boxShadow = "0 0 0 1px red";
      alert("Passwords don't match");
    }
  };

  return (
    <div>
      <div className="w-3/4 relative left-12 top-12">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-2xl font-semibold leading-8 text-gray-900">
                  Create Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      New Password*
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={passwordChange}
                      ref={pass}
                      autoComplete="current-password"
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
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      ref={conpass}
                      value={confirmpassword}
                      onChange={confirmPasswordChange}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {
                      <p className="text-sm text-red-600">
                        {validconfirmPassword()}
                      </p>
                    }
                  </div>
                </div>
              </div>
              <div className="mt-6  flex items-center justify-end gap-x-6">
                <Button variant="contained" onClick={submit}>
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

export default ForgtPass;
