const Orders = require("../models").orders;

exports.index = (req, res) => {
    Orders.findAll().then(data => res.send(data));
};

exports.show = (req, res) => {
  const { id } = req.params;

  Orders.findOne({
    where: {
      id
    }
  }).then(data => res.send(data));
};

exports.create = (req, res) => {
    Orders.create(req.body).then(data =>
    res.send({
      message: "Success create",
      data
    })
  );
};

exports.update = (req, res) => {
  const { id } = req.params;

  Orders.update(req.body, {
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
