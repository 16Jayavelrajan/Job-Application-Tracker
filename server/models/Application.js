const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    companyName: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Applied"
    },

    notes: {
        type: String
    },

    appliedDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Application",
    applicationSchema
);