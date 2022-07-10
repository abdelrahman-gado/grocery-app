const Item = require("../models/item");
const Category = require("../models/category");

exports.item_list = function (req, res, next) {
  Item.find({})
    .populate("category")
    .exec(function (err, result) {
      if (err) {
        return next(err);
      }

      res.render("all-items", { title: "All Items", error: err, data: result });
    });
};

exports.item_detail = function (req, res, next) {
  const itemId = req.params.id;
  Item.findById(itemId)
    .populate("category")
    .exec(function (err, result) {
      if (err) {
        return next(err);
      }

      res.render("item-detail", {
        itemName: result.name,
        error: err,
        data: result,
      });
    });
};

exports.item_create_get = function (req, res, next) {
  // select name and exclude _id
  Category.find({}).select('name -_id').exec(function (err, result) {
    if (err) {
      return next(err);
    }
    
    res.render('item-create', { title: "Add Item", data: result });
  })
};

exports.item_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_delete_post = function (req, res, next) {
  const itemId = req.params.id;
  Item.deleteOne({ "_id" : itemId }).exec(function (err) {
    if (err) {
      return next(err);
    }

    res.redirect('/catalog/items');
  });
};

exports.item_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED");
};
