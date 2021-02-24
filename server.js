const chalk = require("chalk");
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

require("dotenv").config();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

const app = express();
const server = http.createServer(app);
app.use(bodyParser.json({ limit: "100MB" }));

mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error)
            console.log(
                chalk.bgRed.black("Error connecting to DB ! Error : ", error)
            );
        else {
            console.log(chalk.bgGreen.black("Connected to DB "));
            //   server.close();
            server.listen(port, () => {
                console.log("Server started on Port : ", port);
                app.use("/", routes);
            });
        }
    }
);
