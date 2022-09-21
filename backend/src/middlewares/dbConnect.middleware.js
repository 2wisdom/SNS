import dbConnect from "../db/mongodb";

export default async function middleware(req, res, next) {
  await dbConnect();

  next();
}
