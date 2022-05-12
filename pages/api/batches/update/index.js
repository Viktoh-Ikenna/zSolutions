import axios from "axios";

const handle = async (req, res) => {
  // const host='https://southscale.com';
  const host = "http://localhost:5000";
  console.log(req.body);
  const data = await axios.post(`${host}/batches/update`, { ...req.body });
//   console.log(data.data)
  res.json({ name: "", description: "", route: "" });
};

export default handle;
