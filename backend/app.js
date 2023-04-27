const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// menerima data melalui inputan from
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  })
  .then((result) => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "welcome to vuestore-client",
  });
});

require("./app/routes/product.route")(app);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
