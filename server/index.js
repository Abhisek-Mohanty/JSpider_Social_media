let mongoose = require("mongoose");
let express = require("express");
const cors = require("cors");
let userModel = require("./models/users");
let regModel = require("./models/regDetails");
const eduModel = require("./models/eduDetails");
let app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://127.0.0.1/Student`);

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("error", () => {
    console.log("error");
  });

app.post("/UserID", (req, res) => {
  userModel
    .create(req.body)
    .then((x) => {
      let v = { status: "success", details: x._id };
      res.json(v);
    })
    .catch(() => {
      res.json("error");
    });
});
app.get("/:abc/register", (req, res) => {
  console.log(req.params);
  userModel
    .findOne({ _id: req.params.abc })
    .then((user) => {
      res.json(user);
      console.log(user);
    })
    .catch(() => {
      console.log("error");
    });
});

app.post("/login", (req, res) => {
  userModel
    .findOne({ userid: req.body.userid })
    .then((x) => {
      console.log(x);
      if (req.body.password === x.password) {
        let k = { status: "success", id: x._id };
        res.json(k);
      } else res.json("error2");
    })
    .catch(() => {
      res.json("error");
    });
});

app.post("/forgetuser", (req, res) => {
  userModel
    .findOne({ userid: req.body.userId })
    .then((x) => {
      console.log(x);
      if (req.body !== null) {
        res.json(x);
      } else {
        res.json("errorf");
      }
    })
    .catch(() => {
      console.log("error");
    });
});
app.post("/register", (req, res) => {
  regModel
    .create(req.body)
    .then((x) => {
      console.log(x);
      res.json("success");
    })
    .catch(() => {
      res.json("error");
    });
});
app.post("/change", (req, res) => {
  userModel
    // .update({ _id: req.body. }, { $set: { name: "helloword" } })
    .then((x) => {
      console.log(x);
    })
    .catch(() => {
      console.log("error");
    });
});
app.get("/:xyz/register/education", (req, res) => {
  userModel
    .findOne({ _id: req.params.xyz })
    .then((x) => {
      res.json(x);
      console.log(x);
    })
    .catch(() => {
      console.log("error");
    });
});
app.post("/edu", (req, res) => {
  eduModel
    .create(req.body)
    .then((x) => {
      res.json("success");
      console.log(x);
    })
    .catch(() => {
      console.log("error");
    });
});
app.get(`/edu/:abc`, (req, res) => {
  console.log(req.params.abc);
  eduModel
    .findOne({ userid: req.params.abc })
    .then((x) => {
      res.json(x);
      console.log(x);
    })
    .catch(() => {
      console.log("big error");
    });
});
app.get(`/per/:abc`, (req, res) => {
  console.log(req.params.abc);
  regModel
    .findOne({ userid: req.params.abc })
    .then((x) => {
      res.json(x);
      console.log(x);
    })
    .catch(() => {
      console.log("big error");
    });
});

app.listen(7000, () => {
  console.log("server started");
});
