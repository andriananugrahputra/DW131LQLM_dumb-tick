const Model = require('../models');
const Events = Model.events;
const Categories = Model.categories;
const Users = Model.users;

exports.index = (req, res) => {
    Categories.findAll().then(data => res.send(data));
};

exports.show = (req, res) => {
  const { id } = req.params;

  Categories.findOne({
    attributes: {
      exclude: [ 'updatedAt' , "is_active", "createdAt"]
    },
    include: [
      {
          // get data from table categories except createdAt, updatedAt, is_published and is_archived
          model: Events,
          as: 'events',
          attributes: {
              exclude: [ 'id', 'category', 'createdAt', 'updatedAt','is_active']
          }
      }
  ],
    where: {
      id
    }
  }).then(data => res.send(data));
};

exports.create = (req, res) => {
    Categories.create(req.body).then(data =>
    res.send({
      message: "Success create",
      data
    })
  );
};

exports.update = (req, res) => {
  const { id } = req.params;

  Categories.update(req.body, {
    where: {
      id
    }
  }).then(data => {
    res.send({
      message: "Success update",
      data
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Users.destroy({
    where: {
      id
    }
  }).then(data => {
    res.send({
      message: "Success delete",
      data
    });
  });
};
