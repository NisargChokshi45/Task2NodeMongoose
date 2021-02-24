const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 100,
            unique: true,
        },
        mobileNumber: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            default: "India",
        },
        darkTheme: {
            type: Boolean,
            default: false,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamp: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
