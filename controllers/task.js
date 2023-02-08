const Tasks = require("../models/task.js");

const testFn = (req, res, next) => {
  res.status(200).send("Task Controller");
};

async function createTask(req, res, next) {
  try {
    // Destructuring the data
    const {
      name: taskName,
      iconURL: iconURL,
      tags: taskTags,
      dueDate,
    } = req.body;

    // checing for data
    // in catch we handle those erros
    // in try we throw the custom erros that come when trying something
    if (!taskName || !dueDate) {
      // const error = { status: 500, msg: "somethign went wrong" };
      // this is not recommended, its better to put the error object directly
      throw { status: 400, msg: "Required fields should not be empty" }; // we throw a new error here
    }

    if (taskTags && typeof taskTags == "array" && !taskTags.length) {
      // this means that user has given the tags, type of tags is an array and length is not zero, but the length is zero

      throw { status: 400, msg: "Tag(s) is/are required" };
    }

    // crerating an instance of the tasks class
    const task = new Tasks({
      name: taskName,
      iconURL: iconURL,
      tags: taskTags,
      dueDate,
    });

    // we are calling the task() and it will fire the constructor of this task class
    // we have to pass the data that we have to insert

    // saving it in mogoDB DB
    await task.save();

    res.status(200).send(task);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Something went wrong");

    // res.status(err.status ? err.status : 500).send("Something went wrong"); // this is just like the above

    // HTTP err status code is 500. This is for the user
    // Last lie should usually be response
  }
}

async function updateTask(req, res, next) {
  try {
    const { name: taskName, iconURL: iconURL } = req.body;

    if (!taskName) {
      throw { status: 400, msg: "Required fields should not be empty" }; // updating taskname, iconURL is optional for Update
    }

    const task = await Tasks.updateOne(
      { _id: req.params.taskID },
      {
        name: taskName,
        iconURL: iconURL,
      }
    );

    res.status(200).send(task);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Something went wrong");

    // res.status(err.status ? err.status : 500).send("Something went wrong"); // this is just like the above

    // HTTP err status code is 500. This is for the user
    // Last lie should usually be response
  }
}

async function deleteTask(req, res, next) {
  try {
    await Tasks.deleteById(req.params.taskID);

    res.status(200).send("Deleted Task witht he Task ID: ", req.params.taskID);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Something went wrong");

    // res.status(err.status ? err.status : 500).send("Something went wrong"); // this is just like the above

    // HTTP err status code is 500. This is for the user
    // Last lie should usually be response
  }
}

async function getAllTasks(req, res, next) {
  try {
    const allTasks = await Tasks.find(); // for getting all data. We pass params in find() fn if we want to filter some data

    res.status(200).send(allTasks);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Somethign went wrong");
  }
}

async function getFilteredTasks(req, res, next) {
  try {
    const querriedTasks = await Tasks.find({ status: "Assigned" }); // filtering tasks

    res.status(200).send(querriedTasks);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Somethign went wrong");
  }
}

async function getOneTask(req, res, next) {
  try {
    // const theTask = await Tasks.findOne({ _id: req.params.taskID }); // getting one task, for finding one record
    // const theTask = await Tasks.findOne({ name: req.params.taskID });
    const theTask = await Tasks.findById(req.params.taskID);

    res.status(200).send(theTask);
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Somethign went wrong");
  }
}

module.exports = {
  testFn: testFn,
  createTask: createTask,
  getAllTasks: getAllTasks,
  getFilteredTasks,
  getOneTask,
  updateTask,
  deleteTask,
};
