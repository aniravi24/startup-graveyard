const compression = require("compression");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const url =
  process.env.DEV_ENV === "dev"
    ? process.env.MONGODB_URI
    : process.env.PROD_MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

let whiteList = ["https://startupgraveyard.herokuapp.com"];
if (process.env.DEV_ENV === "dev") {
  whiteList.push("http://localhost:3000", "http://localhost:3001");
}

let corsOptions = {
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors());

app.use(express.static(path.resolve(__dirname, "build")));

app.listen(port, () => console.log(`Listening on port ${port}`));

const Company = require("./models/Company");

// route for front page
app.get("/api/home", (req, res) => {
  Company.find()
    .sort({ date: -1 })
    .then(companies => {
      res.json({
        confirmation: "success",
        responses: companies
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

// route for individual card
app.get("/api/story/:id", (req, res) => {
  const id = req.params.id;
  Company.findById(id)
    .then(company => {
      res.json({
        confirmation: "success",
        response: company
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

// route for form data -> DB
app.post("/api/addstory", cors(corsOptions), (req, res) => {
  Company.create(req.body)
    .then(company => {
      res.json({
        confirmation: "success"
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

app.post("/api/recaptcha", cors(corsOptions), (req, res) => {
  axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.RECAPTCHA_SECRETKEY
      }&response=${req.body.response}`,
      {}
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => console.error(error));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
