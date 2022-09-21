import bcrypt from "bcrypt";

let salt = 10;

async function encode(str) {
  return bcrypt.hash(str, salt);
}

async function matches(str, enc) {
  return bcrypt.compare(str, enc);
}

export default {
  encode,
  matches,
};
