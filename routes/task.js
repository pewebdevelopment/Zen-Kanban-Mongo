const { Router } = require("express");
const taskControllers = require("../controllers/task");

const router = Router();

router.get("/", taskControllers.testFn);

router.post("/", taskControllers.createTask);

router.get("/", taskControllers.getTask);

module.exports = router;
