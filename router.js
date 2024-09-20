import { Router } from "express";
import Controller from "./controller.js";

 export const router = new Router()

router.get("/publisher", Controller.getAllPublishers )
router.get("/publisher/:id", Controller.getByIdPublisher )
router.post("/publisher", Controller.createPublisher )

router.get("/magazine", Controller.getAllMagazines )
router.get("/magazine/:id", Controller.getByIdMagazine )
router.post("/magazine", Controller.createMagazine)

router.post("/tag", Controller.createTag)
router.get("/tag", Controller.getAllTags)
router.get("/tag/:id", Controller.getByIdTag)

router.post("/article", Controller.createArticle)
router.get("/article", Controller.getAllArticles)
router.get("/article/:id", Controller.getByIdArticle)