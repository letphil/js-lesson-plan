const express = require("express");
const { list } = require("../../../controllers/user.controllers");

const router = express.Router();

router.get("/", async function (req, res) {
  const getUsers = await list();
  res.send(getUsers);
});

module.exports = router;
