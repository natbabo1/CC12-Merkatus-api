require("dotenv").config();

// -----------sync to table -----------------
// const { sequelize } = require("./models");
// sequelize.sync({ force: true });
// -----------End sync to table -------------

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const notFound = require("./middlewares/notFound");
const error = require("./middlewares/error");
const authenticate = require("./middlewares/authenticate");
const authRoute = require("./routes/authRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const sellerRoute = require("./routes/sellerRoute");
const productRoute = require("./routes/productRoute");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); // ใช้เพื่อดู req ใน nodemon
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRoute);
app.use("/category", categoryRoute);
// app.use('/users', authenticate, userRoute);
app.use("/seller", sellerRoute);
app.use("/product", productRoute);
app.use(notFound);
app.use(error);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is running on port: ${port}`));
