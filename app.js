const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/shop", (req, res) => {
  res.send("Shop Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/cartItems", (req, res) => {
  res.status(200).send({
    items: [
      {
        id: 1,
        name: "Laptop",
        price: 1000,
      },
      {
        id: 2,
        name: "Mobile",
        price: 500,
      },
    ],
  });
});

app.use((req, res, next) => {
  res.status(404).send("Page not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
