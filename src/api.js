const axios = require("axios");
// consumindo um API
// axios
//   .get("http://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log({ data: response.data });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

const fecthAxios = async () => {
  try {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/todos/1"
    );
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};

fecthAxios();
