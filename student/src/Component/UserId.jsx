import React, { useCallback, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserId = () => {
  let [userId, setUserId] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmPassword] = useState("");
  let pass = useRef(null);
  let conpass = useRef(null);

  let userIdChange = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };
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

  let navigate = useNavigate();

  let submit = (e) => {
    let userid = {
      userid: userId,
      password: password,
    };
    console.log(userid);
    if (confirmpassword === password) {
      conpass.current.style.boxShadow = "0 0 0 1px gray";
      axios
        .post("http://localhost:7000/UserID", userid)
        .then((response) => {
          console.log(response);
          navigate(`/${response.data.details}/register`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // pass.current.style.boxShadow = "0 0 0 1px red";
      conpass.current.style.boxShadow = "0 0 0 1px red";
      alert("Passwords don't match");
    }
  };
  let checkpasswords = useCallback(() => {
    conpass.current.style.boxShadow = "0 0 0 1px red";
    alert("Passwords don't match");
  }, [confirmpassword]);
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

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Create User ID*
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
                        className="block w-full mb-12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
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
                  Next
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserId;
