import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = Router();
router.use(arcjetProtection, protectRoute);
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.get("/send/:id", sendMessage);

export default router;
