import axios from "axios";

const handle = async (req, res) => {
  // const host='https://southscale.com';
  const host = "http://localhost:5000";
//   console.log(req.body);
  await axios.post(`${host}/batches/save`, { ...req.body });
  res.json({ name: "", description: "", route: "" });
};

export default handle;
