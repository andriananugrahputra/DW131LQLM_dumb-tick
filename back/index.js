require('express-group-routes');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 666;
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

app.get("/",(req, res)=>{
    res.send("<h1>qwertuip asdfghjl; zxcvbnm,./</h1>");
});

const authController = require("./controller/auth");
const categoriesController = require('./controller/categories')
const eventsController = require('./controller/events')
const ordersController = require('./controller/orders')
const usersController = require('./controller/users')
const { authenticated, authorized } = require('./middleware')

app.group("/api/v1", router => {
    //login
    router.post("/login", authController.login);
    router.post("/register", authController.register);
    
    //category
    router.get('/categories', categoriesController.index)
    router.get('/category/:id', categoriesController.show)
    //router.post('/category', categoriesController.create)
    //router.patch('/category/:id', categoriesController.update)
    //router.delete('/category/:id', categoriesController.delete)
    // //--GET Article By Category
    // router.get('/category/:id/articles', CategoriesController.articleDetails)
    
    //event
    router.get('/events', eventsController.index)
    router.get('/event/:id', eventsController.show)
    router.post('/event', authenticated, eventsController.create)
    router.patch('/event/:id', authenticated, eventsController.update)
    router.delete('/event/:id', authenticated, eventsController.delete)
    
    //order
    router.get('/orders', ordersController.index)
    router.get('/order/:id', ordersController.show)
    router.post('/order', authenticated, ordersController.create)
    router.patch('/order/:id', authenticated, ordersController.update)
    router.delete('/order/:id', authenticated, ordersController.delete)

    //user
    router.get('/users', usersController.index)
    router.get('/user/:id', usersController.show)
    //router.post('/user', usersController.create)
    router.patch('/user/:id', authenticated, usersController.update)
    router.delete('/user/:id', usersController.delete)
    
    
})

app.listen(port, ()=> console.log(`Server is listening port:${port}!`));