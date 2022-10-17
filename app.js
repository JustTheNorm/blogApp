const express = require("express");
const morgan = require("morgan");
const dotenv = require(`dotenv`);
const mongoose = require(`mongoose`);
require(`dotenv`).config();
const methodOverride = require(`method-override`)
const path = require(`path`)

const app = express();
const PORT = 3000;

app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }));

app.use(morgan(`dev`));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use(`/blog`, require(`./controllers/BlogRouter`));
app.use(`/user`, require(`./controllers/UserRouter`));

app.get("/", (req, res) => {
  res.render('pages/HomePage')
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
});
