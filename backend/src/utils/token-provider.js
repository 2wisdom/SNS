import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import _ from "lodash";

/**
 *
 * @param {Object} obj
 * @returns
 */
function encode(obj) {
  const { JWT_SECRET } = process.env;

  if (!obj.hasOwnProperty("sub")) {
    throw new Error("sub property is required.");
  }

  return jwt.sign(_.omitBy(obj, ["sub"]), JWT_SECRET, {
    algorithm: "HS256",
    jwtid: nanoid(32),
  });
}

function decode(jwtToken) {
  return jwt.verify(jwtToken, JWT_SECRET);
}

export default {
  encode,
  decode,
};
