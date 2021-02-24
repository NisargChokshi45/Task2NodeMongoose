require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");
const { dbConnection } = require("./dbConnection");
const { userSchema } = require("./../models/user");

const modelConnection = async () => {
    try {
        await dbConnection.model("user", userSchema);
        console.log(chalk.bgGreen.black("User model Connected"));
        return dbConnection;
    } catch (error) {
        console.log(chalk.bgRed.black("Error : ", error));
    }
};

module.exports = modelConnection;
