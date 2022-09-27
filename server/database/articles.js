const knex = require("./knex");


function createArticle(article) {
  return knex("articles").insert(article);
}

function getAllArticles() {
  return knex("articles").select("*");
}

function getOneArticle(id) {
  return knex("articles").where("id", id);
}

function deleteArticle(id) {
  return knex("articles").where("id", id).del();
}

function updateArticle(id, article) {
  return knex("articles").where("id", id).update(article, ['id', 'title', 'content']);
}

module.exports = {
  createArticle,
  getAllArticles,
  getOneArticle,
  deleteArticle,
  updateArticle,
};