import { Publisher, Magazine, Tag, Article } from "./models.js";
import mongoose from "mongoose";

class Controller {
  async createPublisher(req, res) {
    try {
      const body = req.body;
      const createdPublisher = await Publisher.create({
        name: body.name,
        location: body.location,
      });
      res.json(createdPublisher);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getAllPublishers(req, res) {
    try {
      const publishers = await Publisher.find();
      res.json(publishers);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getByIdPublisher(req, res) {
    try {
      const { id } = req.params;
      const publisher = await Publisher.findById(id);
      res.json(publisher);
    } catch (err) {
      console.log(err.message);
    }
  }

  async createMagazine(req, res) {
    try {
      const body = req.body;

      const publisher = await Publisher.findById(body.publisher);
      const createdMagazine = await Magazine.create({
        title: body.title,
        issueNumber: body.issueNumber,
        publisher: publisher,
      });
      res.json(createdMagazine);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getAllMagazines(req, res) {
    try {
      const magazines = await Magazine.find().populate("publisher");
      res.json(magazines);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getByIdMagazine(req, res) {
    try {
      const { id } = req.params;
      const magazine = await Magazine.findById(id).populate("publisher");
      console.log(magazine);
      res.json(magazine);
    } catch (err) {
      console.log(err.message);
    }
  }

  async createTag(req, res) {
    try {
      const body = req.body;
      const createdTag = await Tag.create({
        name: body.name,
      });
      res.json(createdTag);
    } catch (err) {
      console.log(err.message);
    }
  }
  async getAllTags(req, res) {
    try {
      const Tags = await Tag.find();
      res.json(Tags);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getByIdTag(req, res) {
    try {
      const { id } = req.params;
      const Tag = await Tag.findById(id);
      res.json(Tag);
    } catch (err) {
      console.log(err.message);
    }
  }

  async createArticle(req, res) {
    try {
      const article = req.body;
    
      const createdArticle = await Article.create({
        title:article.title,
        content:article.content,
        tags:article.tags
      });
      await Tag.updateMany(

        { _id: createdArticle.tags },
        { $push: { articles: createdArticle._id } }

      );
      res.json(createdArticle);
    } catch (err) {
      console.log(err);
    }
  }
  async getAllArticles(req, res) {
    try {
      const Articles = await Article.find().populate('tags')
      res.json(Articles);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getByIdArticle(req, res) {
    try {
      const { id } = req.params;
      const Article = await Article.findById(id).populate("tags");
      res.json(Article);
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default new Controller();
