import dbConnect from "../../utils/dbConnection";
import Accounts from "../../../models/Account";
import axios from "axios";

const handle = async (req, res) => {
  await dbConnect();
  const { method, body } = req;

  if (method === "POST") {
    // const host = "http://localhost:5000";

    // const data = await axios.post(`${host}/accounts/data`, { ...body });
    // console.log(data);
    Accounts.findById(body.id)
    .then((accounts) => {
      if (accounts) {
        res.status(200).json({ status: true, data: accounts });
      } else {
        res.status(200).json({ status: false });
      }
    });
  } else {
    res
      .status(404)
      .json({ status: false, message: `unable to find ${method} method` });
  }
};

export default handle;
