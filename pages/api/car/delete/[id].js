import dbConnect from "../../../../utils/dbConnection";
import Cars from "../../../../models/Car";

const handle = async (req, res) => {
  await dbConnect();
  const { method, body, query } = req;
  switch (method) {
    case "DELETE":
        Cars.findByIdAndDelete(
          query.id,
          (err, data) => {
            if (err) {
              res
                .status(500)
                .json({ status: false, message: "Something went wrong" });
              return;
            }
            if (data) {
              res.json({ status: true });
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
