import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();


app.listen(process.env.PORT || 4000,()=>
{
    console.log(`Server is Workin on Port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})