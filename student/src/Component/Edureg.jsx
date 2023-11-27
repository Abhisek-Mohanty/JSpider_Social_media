import * as React from "react";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Edureg = () => {
  const branchesWithHonors = {
    "B.Tech Business": [
      "Economics",
      "Management",
      "Marketing",
      // Add more B.Tech Business honors subjects
    ],
    "B.Tech Computer Science": [
      "Algorithms",
      "Data Structures",
      "Machine Learning",
      // Add more B.Tech Computer Science honors subjects
    ],
    // Add more branches and their corresponding honors subjects
    "B.Sc Physics": [
      "Classical Mechanics",
      "Quantum Physics",
      "Thermodynamics",
      // Add more B.Sc Physics honors subjects
    ],
    "B.Sc Chemistry": [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      // Add more B.Sc Chemistry honors subjects
    ],
    // Add more B.Sc branches and their corresponding honors subjects
  };
  let brances = Object.keys(branchesWithHonors);
  let [branch] = useState(brances);
  let [degree, setDegree] = useState("");
  let [perbranch, setPerbranch] = useState("");
  let [sclname, setSclname] = useState("");
  let [tper, setTper] = useState("");
  let [tyop, setTyop] = useState("");
  let [uname, setUname] = useState("");
  let [twper, setTwper] = useState("");
  let [twyop, setTwyop] = useState("");
  let [bname, setBname] = useState("");
  let [bper, setBper] = useState("");
  let [byop, setByop] = useState("");
  let [mname, setMname] = useState("");
  let [mper, setMper] = useState("");
  let [myop, setMyop] = useState("");
  let [userid, setUserid] = React.useState("");
  let [id, setId] = React.useState("");
  let navigate = useNavigate("");
  let { xyz } = useParams();

  React.useEffect(() => {
    axios
      .get(`http://localhost:7000/${xyz}/register/education`)
      .then((response) => {
        setUserid(response.data.userid);
        setId(response.data._id);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  let sclnameChange = (e) => {
    e.preventDefault();
    setSclname(e.target.value);
  };
  let tperChange = (e) => {
    e.preventDefault();
    setTper(e.target.value);
  };
  let tyopChange = (e) => {
    e.preventDefault();
    setTyop(e.target.value);
  };
  let unameChange = (e) => {
    e.preventDefault();
    setUname(e.target.value);
  };
  let twperChange = (e) => {
    e.preventDefault();
    setTwper(e.target.value);
  };
  let twyopChange = (e) => {
    e.preventDefault();
    setTwyop(e.target.value);
  };
  let bnameChange = (e) => {
    e.preventDefault();
    setBname(e.target.value);
  };
  let deg = (e) => {
    e.preventDefault();
    setDegree(e.target.value);
    setPerbranch("");
  };
  let branchfunction = (e) => {
    setPerbranch(e.target.value);
  };
  let bperChange = (e) => {
    e.preventDefault();
    setBper(e.target.value);
  };
  let byopChange = (e) => {
    e.preventDefault();
    setByop(e.target.value);
  };
  let mnameChange = (e) => {
    e.preventDefault();
    setMname(e.target.value);
  };
  let mperChange = (e) => {
    e.preventDefault();
    setMper(e.target.value);
  };
  let myopChange = (e) => {
    e.preventDefault();
    setMyop(e.target.value);
  };
  let submit = () => {
    let edu = {
      userid: id,
      sclname: sclname,
      tper: tper,
      tyop: tyop,
      uname: uname,
      twper: twper,
      twyop: twyop,
      bname: bname,
      degree: degree,
      perbranch: perbranch,
      bper: bper,
      byop: byop,
      mname: mname,
      mper: mper,
      myop: myop,
    };
    axios
      .post("http://localhost:7000/edu", edu)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <div>
      <div className="w-3/4 relative left-12 top-12 ">
        <form action="">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              Educational Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use your correct information to fill the details.
            </p>

            <h2 className="text-xl font-semibold leading-7 text-gray-900 pt-8 pb-1">
              Matriculation Details
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="school-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  School Name*
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="school-name"
                    id="school-name"
                    value={sclname}
                    onChange={sclnameChange}
                    required
                    autoComplete="given-school"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  10th Percentage*
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={tper}
                    required
                    onChange={tperChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year of Passout*
                </label>
                <div className="mt-2">
                  <input
                    id="year"
                    value={tyop}
                    onChange={tyopChange}
                    required
                    name="year"
                    type="year"
                    autoComplete="year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 pt-8 pb-1">
              HighSchool Details
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="school-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  University Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="school-name"
                    id="school-name"
                    value={uname}
                    onChange={unameChange}
                    required
                    autoComplete="given-school"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  12th Percentage
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={twper}
                    onChange={twperChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year of Passout
                </label>
                <div className="mt-2">
                  <input
                    id="year"
                    name="year"
                    type="year"
                    value={twyop}
                    onChange={twyopChange}
                    autoComplete="year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 pt-8 pb-1">
              Bachelor Details
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="school-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  University Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="school-name"
                    id="school-name"
                    value={bname}
                    onChange={bnameChange}
                    autoComplete="given-school"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type of Degree
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={degree}
                    onChange={deg}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {branch.map((x) => {
                      return <option>{x}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Branch
                </label>
                <div className="mt-2">
                  {degree && (
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      value={perbranch}
                      onChange={branchfunction}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      {branchesWithHonors[degree].map((x) => {
                        return <option>{x}</option>;
                      })}
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Passout Percentage
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={bper}
                    onChange={bperChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year of Passout
                </label>
                <div className="mt-2">
                  <input
                    id="year"
                    name="year"
                    type="year"
                    value={byop}
                    onChange={byopChange}
                    autoComplete="year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-xl font-semibold leading-7 text-gray-900 pt-8 pb-1">
              Masters Details
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="school-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Univercity Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="school-name"
                    id="school-name"
                    value={mname}
                    onChange={mnameChange}
                    autoComplete="given-school"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Passout Percentage
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={mper}
                    onChange={mperChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Year of Passout
                </label>
                <div className="mt-2">
                  <input
                    id="year"
                    name="year"
                    type="year"
                    value={myop}
                    onChange={myopChange}
                    autoComplete="year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6  flex items-center justify-end gap-x-6">
            <Button variant="contained" onClick={submit}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edureg;
