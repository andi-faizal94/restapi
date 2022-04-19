import * as express from "express";
import User from "../routes/v1/router";
import Tweet from "../routes/v1/tweet";

const router = express.Router();

router.use("/v1", User);
router.use("/v1", Tweet);

export default router;
