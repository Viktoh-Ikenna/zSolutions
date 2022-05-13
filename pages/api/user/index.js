import dbConnect from "../../../utils/dbConnection";
import Accounts from "../../../models/Account";
import { promisify } from "util";
// const jwt = require("jsonwebtoken");
import jwt_decode from 'jwt-decode';

const APP_SECRETE = process.env.APP_SECRETE;

// const checklogged = async (token) => {
//   try {
//     // const decode = await promisify(jwt.verify)(token, APP_SECRETE);
//     // return await decode.sub;
//     var decoded = 
//     return decoded.sub
//     // console.log("decode", decode);
//   } catch (err) {
//     return err;
//   }
// };

const handle = async (req, res) => {
  await dbConnect();
  const { method, body } = req;
  switch (method) {
    case "POST":
      const decoded = jwt_decode(body.token).sub;
      // console.log('decoded', decoded);
        Accounts.findById(
          decoded,
          (err, data) => {
            if (err) {
              res
                .status(500)
                .json({ status: false, message: "Something went wrong" });
              return;
            }
            if (data) {
              // console.log('data', data)
              res.json({ status: true, data: data });
            } else {
              res.status(404).json({ status: false, message: "No user Found" });
            }
          }
        );
      break;
    default:
      res
        .status(404)
        .json({ status: false, message: `unable to find ${method} method` });
  }
};

export default handle;
