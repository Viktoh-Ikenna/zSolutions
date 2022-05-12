import dbConnect from "../../utils/dbConnection";
import Accounts from "../../../models/Account";
const handle = async (req, res) => {
  await dbConnect();
  const { method, body,params } = req;
  switch (method) {
    case "POST":
      const accounts = Accounts({
        email: body.email,
        password: body.password,
        username: body.username,
      });
      accounts.save().then((success, err) => {
        if (err) {
          res.status(500).json({ status: false, message: "User not saved" });
          return;
        }
        res.json({ status: true, message: "Data Successfully Saved  " });
      });
      break;
    default:
      res
        .status(404)
        .json({ status: false, message: `unable to find ${method} method` });
  }
};

export default handle;
