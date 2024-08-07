const { default: axios } = require('axios');

const handleTodoFormSubmit = async (opt) => {
  const resp = await axios.post('http://localhost:8000/api/task', opt);
  return resp.data.task;
};

module.exports = { handleTodoFormSubmit };