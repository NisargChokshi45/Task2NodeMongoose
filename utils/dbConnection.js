require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");

const mongoUrl = process.env.MONGO_URL;
// console.log(mongoUrl);

const dbConnect = async () => {
    try {
        const dbConnection = await mongoose.createConnection(
            mongoUrl,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (error) => {
                if (error)
                    console.log(
                        chalk.bgRed.black(
                            "Error connecting to DB ! Error : ",
                            error
                        )
                    );
                else console.log(chalk.bgGreen.black("Connected to DB"));
            }
        );
    } catch (error) {
        console.log(chalk.red("Error : ", error));
    }
};

// SAMPLE_URL = mongodb+srv://NisargBacancy:mongoBacancy@cluster0.pj1cr.mongodb.net/test?authSource=admin&replicaSet=atlas-xgfwb5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
// dbConnect();

module.exports = { dbConnect: dbConnect, dbConnection: this.dbConnection };
