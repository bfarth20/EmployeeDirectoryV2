import express from "express";
import employeesRouter from "./routes/employeeRouter.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
export default app;

app.use(express.json()); //to parse JSON bodies

//Route route
app.get("/", (req, res) => {
  res.send("Hello employees");
});

//Use the employee router
app.use("/employees", employeesRouter);

//Global error handler
app.use(errorHandler);
