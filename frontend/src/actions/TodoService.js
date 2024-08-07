const { default: axios } = require('axios');

const handleTodoFormSubmit = async (opt) => {
  //console.log('Request body:', opt);
  const resp = await axios.post('http://localhost:8000/api/task', opt);
  return resp.data.task;
};

const handleTaskRemove = async (id) => {
  console.log('Removing task with ID:', id);
  await axios.delete(`http://localhost:8000/api/task/${id}`);
  return { id };
};

module.exports = { handleTodoFormSubmit, handleTaskRemove };