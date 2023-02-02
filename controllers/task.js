const testFn = (req, res, next) => {
  res.status(200).send("Task Controller");
};

module.exports = { testFn: testFn };
