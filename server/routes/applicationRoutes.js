const express = require("express");
const router = express.Router();

const Application = require("../models/Application");


// ------------------------------------
// CREATE APPLICATION
// ------------------------------------

router.post("/", async (req, res) => {

    try {

        const newApplication = new Application({

    userId: req.body.userId,

    companyName: req.body.companyName,

    role: req.body.role,

    status: req.body.status,

    notes: req.body.notes

});

        const savedApplication = await newApplication.save();

        res.status(201).json(savedApplication);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// ------------------------------------
// GET ALL APPLICATIONS
// ------------------------------------

router.get("/", async (req, res) => {

    try {

        const applications = await Application.find({

    userId: req.query.userId

});

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

// ------------------------------------
// DELETE APPLICATION
// ------------------------------------

router.delete("/:id", async (req, res) => {

    try {

        await Application.findByIdAndDelete(req.params.id);

        res.json({
            message: "Application Deleted"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

// ------------------------------------
// UPDATE APPLICATION STATUS
// ------------------------------------

router.put("/:id", async (req, res) => {

    try {

        const updatedApplication =
            await Application.findByIdAndUpdate(

                req.params.id,

                {
                    status: req.body.status
                },

                {
                    new: true
                }

            );

        res.json(updatedApplication);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;