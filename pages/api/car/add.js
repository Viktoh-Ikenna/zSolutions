import nextConnect from "next-connect";
import multer from "multer";
import dbConnect from "../../../utils/dbConnection";
import Cars from "../../../models/Car";
import jwt_decode from 'jwt-decode';

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) =>
      cb(null, file.originalname.split(" ").join("_")),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("theFiles"));

apiRoute.post(async (req, res) => {
  await dbConnect();
  const { method, body, params } = req;
  const {
    name,
    brand,
    prize,
    city,
    country,
    description,
    token
  } = body;
  switch (method) {
    case "POST":
    //   console.log("request", req.files);
    //   console.log("body", name);
      const userId = jwt_decode(token).sub;
      const mapped = req.files.map((el) => el.path);
    //   console.log(mapped,'mapped')
      const cars = Cars({
        imgs: mapped,
        name,
        brand,
        prize,
        city,
        country,
        description,
        userId
      });
      cars.save().then((success, err) => {
         if (err) {
             console.log('error', err);
          res.status(500).json({ status: false, message: "User not saved" });
          return;
        }
        res.json({
          status: true,
          message: "Data Successfully Saved  ",
        });
      }).catch(err=>{
          console.log('error',error)
      })
      break;
    default:
      res
        .status(404)
        .json({ status: false, message: `unable to find ${method} method` });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
