const { Router } = require("express");
const taskControllers = require("../controllers/task");

const router = Router();

router.post("/", taskControllers.createTask);

// router.get("/", taskControllers.getTask);

router.get("/", taskControllers.getAllTasks);

module.exports = router;
