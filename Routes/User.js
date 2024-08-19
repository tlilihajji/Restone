const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Welcome to users");
})
router.post("/", (req, res) => {
    res.send("Welcome to users");
})
router.get("/:id", (req, res) => {
    res.send("Welcome to users");
})
router.delete("/:id", (req, res) => {
    res.send("Welcome to users");
})
module.exports = router;