const express = require("express");
const router = express.Router();
const Visitor = require("../models/Visitor");


router.get("/", async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count += 1;
    }

    await visitor.save();
    res.json({ count: visitor.count });
  } catch (err) {
    console.error("Visitor error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
