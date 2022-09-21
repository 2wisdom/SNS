import { Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User";
import passwordProvider from "../utils/password-provider";

const router = new Router();

export function sleet(delay) {
  return new Promise((resolve, reject) => setTimeout(resolve, delay));
}

router.post(
  `/api/user/register`,
  body("email")
    .isEmail()
    .withMessage("email 은 필수입니다")
    .not()
    .isEmpty()
    .custom(async (email) => {
      const findOne = await User.findOne({ email });
      if (!!findOne) {
        throw new Error(`사용 할 수 없는 이메일 입니다`);
      }
    }),
  body("password").not().isEmpty(),
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).send(errors);
    }

    const user = await User.create({
      email,
      password: await passwordProvider.encode(password),
    });

    return res.status(200).send({
      id: user._id,
    });
  }
);

export default router;
