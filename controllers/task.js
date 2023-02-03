const testFn = (req, res, next) => {
  res.status(200).send("Task Controller");
};

function createTask(req, res, next) {
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
      throw err; // we throw a new error here
    }
  } catch (err) {
    console.log("500 Error:", err);
    res.status(500).send("Something went wrong");
    // HTTP err status code is 500. This is for the user
    // Last lie should usually be response
  }
}

module.exports = { testFn: testFn, createTask: createTask };
