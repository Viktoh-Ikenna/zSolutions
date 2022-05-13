import dbConnect from "../../../utils/dbConnection";
import Accounts from "../../../models/Account";
const jwt = require('jsonwebtoken');

const APP_SECRETE = process.env.APP_SECRETE


const handle = async (req, res) => {
  await dbConnect();
  const { method, body, params } = req;
  switch (method) {
    case "POST":
      const accounts = Accounts({
        email: body.email,
        password: body.password,
        username: body.username,
      });
      accounts.save().then((success, err) => {
        // console.log("success", success);
        if (err) {
          res.status(500).json({ status: false, message: "User not saved" });
          return;
        }
        const token = jwt.sign({ sub: success._id }, APP_SECRETE , { expiresIn: '7d' });
        res.json({
          status: true,
          message: "Data Successfully Saved  ",
          data: success,
          token
        });
      });
      break;
    default:
      res
        .status(404)
        .json({ status: false, message: `unable to find ${method} method` });
  }
};

export default handle;
