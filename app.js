const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const port = 4000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});