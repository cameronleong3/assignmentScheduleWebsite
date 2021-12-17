const sendResponse = require("./utils/send-response");

const getIncompleteTasks = (req, res) => {
  // https://camino.instructure.com/courses/73359/assignments/502673
  return sendResponse(res, 400, {
    error:
      "this route is unimplemented. Implement me (+ the corresponding TasksCollection method) for extra credit :D",
  });
};

module.exports = getIncompleteTasks;
