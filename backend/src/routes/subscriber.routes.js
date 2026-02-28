import express from "express";
import * as subscriberController from "../controllers/subscriber.controller.js";

const router = express.Router();

router.post("/", subscriberController.createSubscriber);
router.get("/", subscriberController.getSubscribers);

export default router;