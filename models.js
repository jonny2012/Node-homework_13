import mongoose from "mongoose";

const PublisherSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  location: String,
});

const MagazineSchema = new mongoose.Schema({
  title: String,
  issueNumber: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "publisher",
  },
});

const TagSchema = new mongoose.Schema({
  name: { type: String },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "article",
    },
  ],
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
      
    },
  ],
});

const Publisher = mongoose.model("publisher", PublisherSchema);
const Magazine = mongoose.model("magazine", MagazineSchema);

const Tag = mongoose.model("tag", TagSchema);
const Article = mongoose.model("article", ArticleSchema);

export { Publisher, Magazine, Tag, Article };
