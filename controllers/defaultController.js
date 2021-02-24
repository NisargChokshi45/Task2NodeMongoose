const errorFunction = require("./../utils/errorFunction");
const chalk = require("chalk");

const defaultController = (req, res, next) => {
    console.log(chalk.inverse("API called - / "));
    res.status(200);
    res.json(
        errorFunction(false, "Welcome to Bacancy Technology", "Dashboard Page")
    );
};

module.exports = defaultController;
