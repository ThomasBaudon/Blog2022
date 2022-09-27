const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/articles");
const port = 1337;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/articles", async (req, res) => {
  const results = await db.createArticle(req.body);
  res.status(201).json({ id: results[0] });
});

app.get("/articles", async (req, res) => {
  const articles = await db.getAllArticles();
  res.status(200).json({ articles });
});

app.get("/articles/:id", async (req, res) => {
  const articles = await db.getOneArticle(req.params.id);
  res.status(200).json({ articles });
});

app.patch("/articles/:id", async (req, res) => {
  const id = await db.updateArticle(req.params.id, req.body);
  res.status(200).json({ id });
});

app.delete("/articles/:id", async (req, res) => {
  await db.deleteArticle(req.params.id);
  res.status(200).json({ succes: true });
});

app.listen(port, () => console.log(`server is running on port ${port}`));

console.log('bonjour madame');