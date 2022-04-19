import * as express from "express";
import * as TweetController from "../../controllers/tweet.controller";

const router = express.Router();

router.get("/tweet", TweetController.index);
router.get("/tweet/:id", TweetController.show);
router.post("/tweet", TweetController.store);
router.put("/tweet/:id", TweetController.update);
router.delete("/tweet/:id", TweetController.destroy);

export default router;
