const testFn = (req, res, next) => {
  res.status(200).send("Task Controller");
};

function createTask(req, res, next) {
  console.log(req.body);
  res.status(200).send("Create Task");
}

module.exports = { testFn: testFn, createTask: createTask };
