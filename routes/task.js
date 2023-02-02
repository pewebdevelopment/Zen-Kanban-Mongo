const { Router } = require("express");
const taskControllers = require("../controllers/task");

const taskRouter = require("./task.js");

const router = Router();

router.get("/", taskControllers.testFn);

module.exports = router;
