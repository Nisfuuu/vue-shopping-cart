const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// menerima data melalui inputan from
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "welcome to vuestore-client",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
