const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const photosRouter = require("./routes/photos");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/photos', photosRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});