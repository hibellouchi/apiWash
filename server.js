const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config({ path: ".env" });
const morgan = require("morgan");

const connectDB = require("./config/db");
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/error");

//routes diclaration
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const customerRoutes = require("./routes/customer");
const employeeRoutes = require("./routes/employee");
// const chargeRoutes = require("./routes/charge");
// const categoryClotheRoutes = require("./routes/categoryClothe");
// const orderRoutes = require("./routes/order");

const { authenticate } = require("./middlewares/auth");

// DB Connection
connectDB();

// express app
const app = express();

// cors Middlewares

app.use(cors());

//set static folder

app.use(express.static(path.join(__dirname, "public")));

//body Json Middlewares
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ limit: "1mb", extended: true }));

// morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//Routes get
app.use("/auth", authRoutes);
app.use("/user", authenticate, userRoutes);
app.use("/customer", authenticate, customerRoutes);
app.use("/employee", authenticate, employeeRoutes);
// app.use("/charge", authenticate, chargeRoutes);
// app.use("/category-clothe", authenticate, categoryClotheRoutes);
// app.use("/order", authenticate, orderRoutes);

app.all("*", (req, res, next) => {
  next(new ApiError(`cant find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

//Server running port
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle rejection outside express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
