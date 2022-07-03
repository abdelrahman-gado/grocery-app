const Category = require("../models/category");
const Item = require("../models/item");

exports.category_list = function (req, res) {
  Category.find({}, function (err, result) {
    res.render("index", { title: "Grocery App", error: err, data: result });
  });
};

exports.category_detail = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_create_get = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_create_post = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_delete_get = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_delete_post = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_update_get = function (req, res) {
  res.send("NOT IMPLEMNETED");
};

exports.category_update_post = function (req, res) {
  res.send("NOT IMPLEMNETED");
};
