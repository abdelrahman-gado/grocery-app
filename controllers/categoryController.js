const Category = require("../models/category");
const Item = require("../models/item");

exports.category_list = function (req, res) {
  Category.find({}, function (err, result) {
    console.log(result);
    res.render("index", { title: "Grocery App", error: err, data: result });
  });
};

exports.category_detail = function (req, res, next) {
  const categoryId = req.params.id;
  Item.find({ category: categoryId })
    .populate('category')
    .exec(function (err, result) {
      if (err) {
        return next(err);
      }

      if (result.length <= 0) {
        res.render("category-detail", { title: "No Category Items", data: result });
      }

      res.render('category-detail', { title: result[0].category.name,  data: result });
    });
};

exports.category_create_get = function (req, res) {
  res.render('category-create', { title: "Add Category"});
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
