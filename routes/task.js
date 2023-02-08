const { Router } = require("express");
const taskControllers = require("../controllers/task");

const router = Router();

router.post("/", taskControllers.createTask);

// router.get("/", taskControllers.getTask);

router.put("/", taskControllers.updateTask);

router.delete("/", taskControllers.deleteTask);

router.get("/", taskControllers.getAllTasks);

router.get("/filter", taskControllers.getFilteredTasks);

router.get("/:taskID", taskControllers.getOneTask);

module.exports = router;
