import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { Tweet } from "../entity/Tweet";
import { User } from "../entity/User";

// create tweet
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { tweet,user_id } = req.body;
    const checkuserid:User = await User.findOne({id:user_id}) 
    if(!checkuserid) throw "user id not found"
    
    const tweets = await Tweet.create({
      tweet,
      user:{id:user_id},
    }).save();
    return res.status(201).json({
      message: "created tweet succesfully",
      data: [tweets],
    });
  } catch (e:any) {
    return res.status(404).json({
      message:e,
    });
    
    // next(error);
  }
};

// get all tweet
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const tweet = await Tweet.find({ relations: ["user"] });
    return res.status(200).json({
      message: "get tweet succesfully",
      data: tweet,
    });
  } catch (error) {
    next(error);
  }
};

// get tweet by id
export const show = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findOne(Number(id));
    if (!tweet) {
      throw new Error("blog not found");
    }

    return res
      .status(200)
      .json({ message: "get blog by id is succesfully", data: tweet });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// update tweet
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { tweet, user } = req.body;
    const { userName } = req.body;

    const { id } = req.params;
    const users = await User.create({ userName });

    const tweets = await Tweet.update(Number(id), { tweet, user});

    if (!tweets) {
      throw new Error("tweet not found");
    }
    return res.status(200).json({
      message: "update tweet succesfully",
      data: tweet,
    });
  } catch (error) {
    next(error);
  }
};

// delete tweet
export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findOne(Number(id));
    if (!tweet) {
      throw new Error("tweet not found");
    }
    const tweets = await Tweet.softRemove(tweet);
    return res.status(200).json({
      message: `delete tweet ${id} succesfully`,
      data: tweets,
    });
  } catch (error) {
    next(error);
  }
};
