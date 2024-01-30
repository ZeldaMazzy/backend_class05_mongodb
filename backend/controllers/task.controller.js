const getAllTasks = (req, res) => {
	res.send("ALL TASKS");
};

const getTaskById = (req, res) => {
	res.send('GET TASK BY ID: ' + req.params.id);
};

const createTask = (req, res) => {
	res.send('CREATE TASK');
};

const updateTask = (req, res) => {
	res.send('UPDATE TASK: ' + req.params.id);
};

const deleteTask = (req, res) => {
	res.send('DELETE TASK: ' + req.params.id);
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask
}