const express = require("express");
const pool = require("../db");
const router = express.Router();

//getting all users
router.get("/", async (req, res) => {
  try {
    const users = await pool.query(
      "SELECT u.user_name, u.user_id FROM users AS u"
    );

    res.json(users.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//getting a specific user
router.get("/:userId", async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT u.user_name, t.description FROM users AS u LEFT JOIN todos AS t ON u.user_id = t.user_id WHERE u.user_id = $1",
      [req.params.userId]
    );

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
