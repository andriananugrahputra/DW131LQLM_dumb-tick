const Model = require('../models');
const Events = Model.events;
const Categories = Model.categories;
const Users = Model.users;

exports.index = (req, res) => {
    Events.findAll({
        // get all data article except updateAt, category_id and category_name
        attributes: {
            exclude: [ 'id', 'updatedAt' , 'category', "create_by", "is_active", "createdAt"]
        },
        include: [
            {
                // get data from table categories except createdAt, updatedAt, is_published and is_archived
                model: Categories,
                as: 'categories',
                attributes: {
                    exclude: [ 'id', 'createdAt', 'updatedAt','is_active']
                }
            },
            {
                // get data from table categories except createdAt, updatedAt, is_published and is_archived
                model: Users,
                as: 'createBy',
                attributes: {
                    exclude: [ 'id', 'createdAt', 'updatedAt', 'password', 'image', 'status', 'is_active']
                }
            }
        ],
    }).then((data) => res.send(data));
};

exports.show = (req, res) => {
  const { id } = req.params;

  Events.findOne({
    attributes: {
      exclude: [ 'id', 'updatedAt' , 'category', "create_by", "is_active", "createdAt"]
  },
  include: [
      {
          // get data from table categories except createdAt, updatedAt, is_published and is_archived
          model: Categories,
          as: 'categories',
          attributes: {
              exclude: [ 'id', 'createdAt', 'updatedAt','is_active']
          }
      },
      {
          // get data from table categories except createdAt, updatedAt, is_published and is_archived
          model: Users,
          as: 'createBy',
          attributes: {
              exclude: [ 'id', 'createdAt', 'updatedAt', 'password', 'image', 'status', 'is_active']
          }
      }
  ],
    where: {
      id
    }
  }).then(data => res.send(data));
};

exports.create = (req, res) => {
  Events.findOne().then(events => {
      Events.create({
        title: req.body.title,
        category: req.body.category,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        price: req.body.price,
        description: req.body.description,
        address: req.body.address,
        url_maps: req.body.url_maps,
        image: req.body.image,
        create_by: req.user_id,
        is_active: req.body.is_active
      }).then(data => {
        res.status(200).json({
          message: "success add article",
          data: data
        });
      });
    
  });
    Events.create(req.body).then(data =>
    res.send({
      message: "Success create",
      attributes: {
        exclude: [ "create_by", "is_active", "updatedAt", "createdAt"]
      },
      data
    })
  );
};

exports.update = (req, res) => {
  const { id } = req.params;

  Events.update(req.body, {
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
