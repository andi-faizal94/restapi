import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { User } from "../entity/User";

// create user
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { userName } = req.body;
    const user = await User.create({
      userName,
    });
    await user.save();
    return res.status(201).json({
      message: "created user succesfully",
      data: [user],
    });
  } catch (error) {
    next(error);
  }
};

// get all data
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const user = await User.find({ relations: ["tweets"] });

    return res.status(200).json({
      message: "get user succesfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// get user by id
export const show = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id: id } = req.params;

    const UserById = await User.findOne(Number(id));
    if (!UserById) {
      throw new Error("user not found");
    }

    return res
      .status(200)
      .json({ message: "get user by id is succesfully", data: UserById });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// update user
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { userName } = req.body;
    const { id } = req.params;

    await User.update(id, {
      userName,
    });
    const user = await User.findOne(Number(id));

    if (!user) {
      throw new Error("user not found");
    }
    return res.status(200).json({
      message: "update user succesfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// delete user
export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const user = await User.findOne(Number(id));

    if (!user) {
      throw new Error("user not found");
    }
    const userId = await User.softRemove(user);
    return res.status(200).json({
      message: `delete user ${id} succesfully`,
      data: userId,
    });
  } catch (error) {
    next(error);
  }
};
