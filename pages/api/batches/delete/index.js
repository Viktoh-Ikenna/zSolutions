import axios from "axios";

const handle = async (req, res) => {
    const { id } = req.body;
    // console.log(id)
    
  const host='http://localhost:5000';
//   const host = "http://localhost:5000";
//   console.log(req.body);
  await axios.get(`${host}/batches/delete/${id}`);
  res.json({ name: "", description: "", route: "" });
};

export default handle;
