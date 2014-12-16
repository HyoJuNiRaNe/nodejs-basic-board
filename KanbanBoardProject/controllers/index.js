var initialTasks = require("../models/initial-tasks");

exports.index = function (req, res) {
	res.render("index", {
		title : "My Kanban Board00",
		todoTasks : initialTasks.getTasks().todo,
		inProgressTasks : initialTasks.getTasks().inProgress,
		doneTasks : initialTasks.getTasks().done
	});
};