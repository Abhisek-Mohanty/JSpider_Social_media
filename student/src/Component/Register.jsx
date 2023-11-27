import * as React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Register() {
  let [firstname, setFirstname] = React.useState("");
  let [lastname, setLastname] = React.useState("");
  let [phone, setPhone] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [country, setCountry] = React.useState("");
  let [address, setAddress] = React.useState("");
  let [city, setCity] = React.useState("");
  let [statey, setStatey] = React.useState("");
  let [pin, setPin] = React.useState("");
  let [userid, setUserid] = React.useState("");
  let [id, setId] = React.useState("");
  let navigate = useNavigate("");
  let { abc } = useParams();
  console.log(abc);
  console.log("hi");

  React.useEffect(() => {
    axios
      .get(`http://localhost:7000/${abc}/register`)
      .then((response) => {
        setUserid(response.data.userid);
        setId(response.data._id);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, [abc]);

  let firstChange = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
  };
  let lastChange = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  let phoneChange = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  };
  let emailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  let countryChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  let addressChange = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  let cityChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  let stateChange = (e) => {
    e.preventDefault();
    setStatey(e.target.value);
  };
  let pinChange = (e) => {
    e.preventDefault();
    setPin(e.target.value);
  };
  let regsubmit = (e) => {
    e.preventDefault();
    let reg = {
      userid: id,
      first: firstname,
      last: lastname,
      phone: phone,
      email: email,
      country: country,
      address: address,
      city: city,
      state: statey,
      pincode: pin,
    };
    console.log(reg);
    axios
      .post("http://localhost:7000/register", reg)
      .then((x) => {
        console.log(x);
        console.log("success!");
        if (x.data === "success") {
          navigate(`/${id}/register/educations`);
        }
      })
      .catch((x) => {
        console.log("error!");
      });
  };

  return (
    <div>
      <div className="w-3/4 relative left-12 top-12">
        <form action="">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    value={firstname}
                    onChange={firstChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    value={lastname}
                    onChange={lastChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    value={phone}
                    onChange={phoneChange}
                    autoComplete="phone number-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    onChange={emailChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    value={country}
                    onChange={countryChange}
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>--select country--</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>United State</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    value={address}
                    onChange={addressChange}
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={cityChange}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    value={statey}
                    onChange={stateChange}
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    value={pin}
                    onChange={pinChange}
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button variant="contained" onClick={regsubmit}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
