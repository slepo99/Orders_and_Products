import express from "express";
import authController from "../controllers/AuthController";
import { check } from "express-validator";
import roleMiddleware from "../middleware/RoleMiddleware";

const authRouter = express.Router();

authRouter.post(
  "/registration",
  [
    check("username", "User name can not be empty").notEmpty(),
    check(
      "password",
      "Password must be longer then 4 symbols and less then 10"
    ).isLength({ min: 4, max: 10 }),
  ],

  authController.registration
);
authRouter.put("/users/:userId", authController.updateUser);
authRouter.post("/login", authController.login);
authRouter.get("/users", roleMiddleware(["USER"]), authController.getUsers);
authRouter.get("/users/:userId", authController.getUserById);
export default authRouter;
