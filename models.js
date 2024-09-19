import mongoose from "mongoose";

const PublisherSchema = new mongoose.Schema({
  name:{type: String, unique:true},
  location: String,
});

const MagazineSchema = new mongoose.Schema({
  title: String,
  issueNumber: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
});

const TagSchema = new mongoose.Schema({
  name: String,
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const Publisher = mongoose.model("Publisher", PublisherSchema);
const Magazine = mongoose.model("Magazine", MagazineSchema);

const Tag = mongoose.model("Tag", TagSchema);
const Article = mongoose.model("Article", ArticleSchema);

export { Publisher, Magazine, Tag, Article };
