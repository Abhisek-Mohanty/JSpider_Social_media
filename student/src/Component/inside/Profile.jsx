import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let [personal, setPersonal] = useState("");
  let [education, setEducation] = useState("No");
  let { abc } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:7000/edu/${abc}`)
      .then((response) => {
        console.log(response);
        setEducation(response.data);
      })
      .catch(() => {
        console.log("error");
      });
    axios
      .get(`http://localhost:7000/per/${abc}`)
      .then((response) => {
        console.log(response);
        setPersonal(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <div>
      <h1>Profile page</h1>
      <img src="https://source.unsplash.com/1600x180/?software" alt="banner" />
      <img
        src={"https://source.unsplash.com/800x800/?male"}
        className="w-48 h-48"
        alt="profile"
      />
      <h1 className="text-4xl">
        <b>
          {personal.first} {personal.last}
        </b>
      </h1>
      <h6>
        {personal.city},{personal.state},{personal.country}
      </h6>
      <h3>
        <b>Personal Details</b>
      </h3>
      <h5>Email ID:{personal.email}</h5>
      <h5>Phone :{personal.phone}</h5>
      <h5>City:{personal.city}</h5>
      <h5>Pin:{personal.pincode}</h5>
      <h5>State:{personal.state}</h5>
      <h5>Country:{personal.country}</h5>
      <br />
      <br />
      <h2>
        <b>Eduction Details</b>
      </h2>
      <h4>Metric Details</h4>
      <h5>School Name: {education.sclname}</h5>
      <h5>Year of Passout: {education.tyop}</h5>
      <h5>Percentage Score: {education.tper}%</h5>
      <br />

      <h4>12th Details</h4>
      <h5>Unversity Name: {education.uname}</h5>
      <h5>Year of Passout: {education.twyop}</h5>
      <h5>Percentage Score: {education.twper}%</h5>
      <br />
      <h4>Batchlore Details</h4>
      <h5>Unversity Name: {education.bname}</h5>
      <h5>Year of Passout: {education.byop}</h5>
      <h5>Percentage Score: {education.bper}%</h5>
      <br />
      <h4>Master's Details</h4>
      <h5>Unversity Name: {education.mname}</h5>
      <h5>Year of Passout: {education.myop}</h5>
      <h5>Percentage Score: {education.mper}%</h5>
      <br />
    </div>
  );
};

export default Profile;
