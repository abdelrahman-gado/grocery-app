const Item = require('../models/item');

exports.item_list = function (req, res, next) {
  Item.find({}).populate('category').exec(function (err, result) {
    if (err) {
      return next(err);
    }

    res.render('all-items', { title: 'All Items', error: err, data: result });
  })
};

exports.item_detail = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED");
};


exports.item_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED");
};

exports.item_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED");
};







