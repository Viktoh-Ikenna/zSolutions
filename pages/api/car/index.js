import dbConnect from "../../../utils/dbConnection";
import Cars from "../../../models/Car";

const handle = async (req, res) => {
  await dbConnect();
  const { method, body } = req;
  switch (method) {
    case "GET":
        Cars.find(
          {},
          (err, data) => {
            if (err) {
              res
                .status(500)
                .json({ status: false, message: "Something went wrong" });
              return;
            }
            if (data) {
              console.log('data', data)
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
