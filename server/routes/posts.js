import express from "express";

const router = express.Router();

//http://localhost:5000/posts
router.get("/", (req, res) => {
  res.send("THIS IS WORKING");
});

export default router;
