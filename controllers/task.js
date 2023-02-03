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
      const error = { status: 500, msg: "somethign went wrong" };
      // this is not recommended, its better to put the error object directly
      throw { status: 400, msg: "Required fields should not be empty" }; // we throw a new error here
    }
  } catch (err) {
    console.log("500 Error:", err);
    res.status(err.status || 500).send(err.msg || "Something went wrong");

    // res.status(err.status ? err.status : 500).send("Something went wrong"); // this is just like the above

    // HTTP err status code is 500. This is for the user
    // Last lie should usually be response
  }
}

module.exports = { testFn: testFn, createTask: createTask };
