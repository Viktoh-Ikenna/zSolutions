import dbConnect from "../../utils/dbConnection";
import Accounts from "../../../models/Account";
import NodeMailer from "../../utils/nodeMailer";
const handle = async (req, res) => {
  await dbConnect();
  const { method, body,params } = req;
  switch (method) {
    case "POST":
      const accounts = Accounts({
        email: body.email,
        password: body.password,
        name: body.firstName,
      });
      accounts.save().then((success, err) => {
        if (err) {
          res.status(500).json({ status: false, message: "User not saved" });
          return;
        }
        NodeMailer(
          body.email,
          `${body.firstName}, confirm you email`,
          `Dear ${body.firstName}`,
          `<p>Dear ${body.firstName}</p><br/><p>please click <a href='https://relcanonical.com/account/access'>here</a> to confirm your email</p>`
        );
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
