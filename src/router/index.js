const homeController = require('../home/controller.home');
const cartsController = require('../carts/controller.carts');
const messagesController = require('../messages/controller.messages');
const productsController = require('../products/controller.products');

const router = app => {
    app.use('/', homeController)
    app.use('/api/carts', cartsController);
    app.use('/api/messages', messagesController);
    app.use('/api/products', productsController);
}

module.exports = router;