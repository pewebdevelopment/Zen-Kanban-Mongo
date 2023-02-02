const { Router } = require("express");

const taskRouter = require("./task.js");

const router = Router();

router.get("/test", (req, res, next) => {
  res.status(200).send("Test Res");
});

// Path will be "/api/test"

router.use("/task", taskRouter);

module.exports = router;
