import { Publisher, Magazine } from "./models.js";

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

      const publisher = await  Publisher.findById(body.publisher)
      const createdMagazine = await Magazine.create({
        title: body.title,
        issueNumber: body.issueNumber,
        publisher:publisher
      })
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
      console.log(err.message)
    }
  }

  async getByIdMagazine(req, res) {
    try {
      const { id } = req.params;
      const magazine = await Magazine.findById(id);
      res.json(magazine);
    } catch (err) {
      console.log(err.message);
    }
  }


  async createTag(req, res) {
    try {
      const body = req.body;

      const publisher = await  Publisher.findById(body.publisher)
      const createdMagazine = await Magazine.create({
        title: body.title,
        issueNumber: body.issueNumber,
        publisher:{publisher}
      })
      res.json(createdMagazine);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getAllMagazines(req, res) {
    try {
      const magazines = await Magazine.find();
      res.json(magazines);
    } catch (err) {
      console.log(err.message);
    }
  }

  async getByIdMagazine(req, res) {
    try {
      const { id } = req.params;
      const magazine = await Magazine.findById(id);
      res.json(magazine);
    } catch (err) {
      console.log(err.message);
    }
  }

}

export default new Controller()