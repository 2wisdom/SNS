import { Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User";
import _ from "lodash";
import passwordProvider from "../utils/password-provider";
import tokenProvider from "../utils/token-provider";

const router = new Router();

router.post(
  `/api/login`,
  body("email").isEmail().not().isEmpty(),
  body("password").not().isEmpty(),
  async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({
        message: "존재하지 않는 이메일 입니다",
      });
    }

    const isMatches = await passwordProvider.matches(password, user.password);
    if (!isMatches) {
      return res.status(400).send({
        message: "아이디 또는 비밀번호가 다릅니다.",
      });
    }

    const token = tokenProvider.encode(
      _.omitBy(
        {
          sub: user._id.toString(),
          email: user.email,
        },
        ["password"]
      )
    );

    res.send({
      accessToken: token,
    });
  }
);

export default router;
