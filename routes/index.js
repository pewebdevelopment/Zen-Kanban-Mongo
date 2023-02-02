const { Router } = require("express");

const router = Router();

router.get("/test", (req, res, next) => {
  res.status(200).send("Test Res");
});

// Path will be "/api/test"

module.exports = router;
