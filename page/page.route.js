import express from 'express';
import { create, changeContent, deletePageRecord, details, list, update } from './page.controller.js';

const pageRoute = express.Router();

pageRoute.post("/", create);
pageRoute.post("/:pageId/content", changeContent);
pageRoute.put("/:pageId", update);
pageRoute.delete("/:pageId", deletePageRecord);
pageRoute.get("/", list);
pageRoute.get("/:pageId", details);

export default pageRoute;
