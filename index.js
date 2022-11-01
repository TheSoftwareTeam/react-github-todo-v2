const express = require("express");
const cors = require("cors");
const path = require("path");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");

const host = "localhost";

const client_id = "cb9bb57da585db57597f";
const client_secret = "4e43b91fecea1daee467627a5c80d687b3ffb89c";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

app.get("/getAccessToken", async function (req, res) {
  console.log(req.query.code);

  const params =
    "?client_id=" +
    client_id +
    "&client_secret=" +
    client_secret +
    "&code=" +
    req.query.code;

  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.get("/getUserData", async function (req, res) {
  req.get("Authorization");
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.listen(4000, host, function () {
  console.log("CORS server running on port 4000");
});
