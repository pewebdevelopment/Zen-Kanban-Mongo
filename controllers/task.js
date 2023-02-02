const testFn = (req, res, next) => {
  res.status(200).send("Task Controller");
};

function createTask(body) {
  res.status(200).send("We will create a task here");
}

module.exports = { testFn: testFn, createTask: createTask };
