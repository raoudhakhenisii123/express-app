const express = require("express");
const hbs = require("hbs");

const app = express();

// app.set("view engine", hbs);

// app.get("/connectedUser", (req, res) => {
//   res.render("user.hbs", { name: "foued" });
// });

// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.use(date = (req, res, next) => {
//     let requestAt = new Date();
//     console.log(requestAt);
//     next();
//   })


//req means request / res means response , they're objects that have many variables and predefined functions
// app.get("/home", (req, res) => {
//   res.send("hello home");
// });

// app.get("/contact", (req, res) => {
//   res.send("hello contact");
// });

// app.get("/product", (req, res) => {
//   res.send("hello product");
// });

// app.get("/user/:nom", (req, res) => {
//   res.send("hello user: " + req.params.nom);
// });

// app.get("/story", (req, res) => {
//   res.send("hello story");
// });

Requestdate = (req, res, next) => {
  let reqAt = new Date().getHours();
  console.log(reqAt);
  if (reqAt > 8 && reqAt < 17) {
    return res.sendFile(__dirname + "/public/outOfTimeZone.html");
  }
  next();
}

app.get("/home", Requestdate, (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/contact", Requestdate, (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/ourServices", Requestdate, (req, res) => {
  res.sendFile(__dirname + "/public/ourServices.html");
});

app.listen(3000, err => {
  if (err) console.log("server not ruunnig");
  else console.log("server running");
});

