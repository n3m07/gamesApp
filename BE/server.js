const express = require("express");
const app = express();
/* const port = 4000; */
const usersRouter = require("./routes/usersRouter");
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your React app's URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the allowed HTTP methods
  credentials: true, // Enable credentials (e.g., cookies)
  optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests (OPTIONS)
};

//middlewares
app.use(cors(corsOptions))
app.use(express.json());

app.use((req, res, next) => {
  console.log(`the route and request type are: ${req.path} ${req.method}`);
  next();
});





app.use("/api/Users", usersRouter);

mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`conneted to DB & listening on port ${process.env.PORT} bitch`);
        });
        })
        .catch((error) => {
        console.log(error);
        });

/* app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT} bastards`);
});
 */