const express=require("express");
const dotenv=require("dotenv").config();
const colors=require("colors");
const connectDB=require("./config/db")
const port= process.env.PORT || 5000;

connectDB();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoutes=require("./Routes/GoalRoutes");
const {errorHandler}=require("./middleware/errorMiddleware");

app.use("/api/goals",userRoutes);
app.use(errorHandler);

app.listen(port,()=> console.log(`process is taking place in port ${port}`));