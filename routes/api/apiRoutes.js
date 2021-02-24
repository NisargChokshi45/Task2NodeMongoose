const express = require("express");
const chalk = require("chalk");
const {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
} = require("../../controllers/users/user.controller");
const userValidation = require("./../../controllers/users/user.validator");

const apiRouter = express.Router();
apiRouter.get("/users", getAllUsers);
apiRouter.get("/user", getUser);
apiRouter.post("/adduser", userValidation, addUser);
apiRouter.post("/updateuser", userValidation, updateUser);
apiRouter.post("/deleteuser", deleteUser);

module.exports = apiRouter;
