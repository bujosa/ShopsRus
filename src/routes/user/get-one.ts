import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { User } from "../../models/user/user.entity";

const getOneUserRouterById = express.Router();
const getOneUserRouterByName = express.Router();

getOneUserRouterById.get(
  "/api/users/:id",
  async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new NotFoundError();
    }

    return res.send(user);
  }
);

getOneUserRouterByName.get(
  "/api/users/:name",
  async (req: Request, res: Response) => {
    const user = await User.findOne({ fullName: req.params.name });

    if (!user) {
      throw new NotFoundError();
    }

    return res.send(user);
  }
);

export { getOneUserRouterById, getOneUserRouterByName };
